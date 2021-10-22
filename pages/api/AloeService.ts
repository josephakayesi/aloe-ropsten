import WalletConnectProvider from '@walletconnect/web3-provider'
import { ArtworkType } from '../../types/artwork.types'
import Aloe from '../../ethereum/build/Aloe.json'
import Web3 from 'web3'
import Actions from '../../store/actions'
import { data } from '../../ethereum/scripts/data'
declare let window: any
import toast from 'react-hot-toast'

const provider = new WalletConnectProvider({
    infuraId: '1dc840ea53f04c0daef5b4733e7924a1',
})
// import Web3 from 'web3'

// const provider = await provider.enable()

// const web3 = new Web3(provider)

// module.exports = web3

class AloeService {
    public provider: any

    constructor(provider: WalletConnectProvider) {
        // console.log(this.provider)
        this.provider = provider
    }

    async EnableWeb3() {
        try {
            await provider.enable()
        } catch (e) {
            console.log(e)
        }
    }

    async LoadWeb3(dispatch) {
        try {
            // if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            //     // we are in the browser and metamask is running
            //     const web3 = new Web3(window.ethereum)
            //     dispatch(Actions.Web3Loaded(web3))
            //     return web3
            // }
            const web3 = new Web3(this.provider)
            dispatch(Actions.Web3Loaded(web3))

            return web3
        } catch (error) {
            console.log('error loading web3')
        }
    }

    async LoadNetwork(dispatch, web3) {
        try {
            let network = await web3.eth.net.getNetworkType()
            network = network.charAt(0).toUpperCase() + network.slice(1)
            dispatch(Actions.Web3NetworkLoaded(network))
            return network
        } catch (e) {
            dispatch(Actions.Web3NetworkLoaded('wrong network'))
            console.log('error loading network: ', e)
        }
    }

    async LoadAccount(dispatch, web3) {
        try {
            const accounts = await web3.eth.getAccounts()
            const account = await accounts[0]
            if (typeof account !== 'undefined') {
                dispatch(Actions.Web3AccountLoaded(account))
                return account
            } else {
                dispatch(Actions.Web3AccountLoaded(null))
                return null
            }
        } catch (e) {
            console.log('error loading account: ', e)
        }
    }

    async LoadBalance(dispatch, web3, account) {
        try {
            const etherBalance = await web3.eth.getBalance(account)
            const balance = (etherBalance / 10 ** 18).toFixed(5)
            dispatch(Actions.Web3BalanceLoaded(balance))
            return balance
        } catch (e) {
            console.log('error loading balance: ', e)
        }
    }

    async LoadContract(dispatch, web3, netId) {
        try {
            const contract = new web3.eth.Contract(Aloe.abi, Aloe.networks[netId].address)
            dispatch(Actions.ContractLoaded(contract))
            return contract
        } catch (e) {
            console.log('error loading contract: ', e)
            toast.error(`you are on the wrong network. please switch your network to main`)

            dispatch(Actions.ContractLoaded(null))
            return null
        }
    }

    async Update(dispatch) {
        try {
            let account, web3, netId, contract

            web3 = await this.LoadWeb3(dispatch)
            await this.LoadNetwork(dispatch, web3)
            account = await this.LoadAccount(dispatch, web3)
            netId = await web3.eth.net.getId()
            contract = await this.LoadContract(dispatch, web3, netId)

            await this.LoadAloeData(dispatch, contract)
            await this.LoadAloeState(dispatch, contract)

            if (account && contract) await this.LoadBalance(dispatch, web3, account)
        } catch (e) {
            toast.error(`error connecting to blockchain. please check your network`)
        }
    }

    async LoadAloeData(dispatch, contract) {
        try {
            // const totalSupply = await contract.methods.totalSupply().call()
            const uri = await contract.methods.tokenURI(1).call()

            try {
                const response = await fetch(uri)
                const responseData = await response.json()

                if (responseData.ipfs_url == data[0].ipfs_url) {
                    const orderedData = data.sort((a: ArtworkType, b: ArtworkType) => a.id - b.id)
                    dispatch(Actions.MetadataLoaded(orderedData))
                }
            } catch (error) {
                toast.error(`error connecting to blockchain. please check your network`)
            }
        } catch (e) {
            console.log('error loading aloe artworks', e)
        }
    }

    async LoadAloeState(dispatch, contract) {
        try {
            const tab = []
            const totalSupply = await contract.methods.totalSupply().call()

            for (let i = 0; i < totalSupply; i++) {
                const state = await contract.methods.sold(i).call()
                if (state) {
                    tab.push(await contract.methods.ownerOf(i).call()) // if sold, then add owner address
                } else {
                    tab.push(state)
                }
            }
            dispatch(Actions.NFTStateLoaded(tab))
        } catch (e) {
            console.log('error loading aloe state', e)
        }
    }

    async buyAloeArtwork(dispatch, id, price) {
        try {
            const web3 = await this.LoadWeb3(dispatch)
            await this.LoadNetwork(dispatch, web3)
            const account = await this.LoadAccount(dispatch, web3)
            const netId = await web3.eth.net.getId()
            const contract = await this.LoadContract(dispatch, web3, netId)

            let toastId: string

            await contract.methods
                .buy(id)
                .send({ from: account, value: price })
                .once('sending', () => (toastId = toast.loading('loading...', { duration: Infinity })))
                .on('receipt', async r => {
                    this.Update(dispatch)
                    toast.success(`congratulations! you've purchased an aloe collectible`, { id: toastId, duration: 4000 })
                })
                .on('error', e => {
                    toast.error(`unable to process request`, { id: toastId, duration: 4000 })
                })
        } catch (e) {
            console.log('error buying aloe artwork', e)
        }
    }
}

export default new AloeService(provider)
