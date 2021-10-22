import React, { useContext } from 'react'
import ConnectWallet from './ConnectWallet'
import Wallet from './Wallet'
import { GlobalContext } from '../context/GlobalContext'
import GetMetamask from './GetMetamask'

function Web3() {
    const context: any = useContext(GlobalContext)

    const renderWalletComponent = () => {

        if(context.web3.account) return <Wallet account={context.web3.account} />

        if(!context.web3.account && context.web3.network) return <ConnectWallet />

        return <ConnectWallet />
    }

    return <div className="web3-wrapper">{renderWalletComponent()}</div>
}

export default Web3
