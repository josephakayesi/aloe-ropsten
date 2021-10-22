import React, { useContext } from 'react'
import ConnectWallet from './ConnectWallet'
import Wallet from './Wallet'
import { GlobalContext } from '../context/GlobalContext'
import GetMetamask from './GetMetamask'
import AloeService from '../pages/api/AloeService'
import useMobileDetect from '../hooks/useMobileDetect'


function Web3() {
    const context: any = useContext(GlobalContext)
    const currentDevice = useMobileDetect()

    const renderWalletComponent = () => {
        if (context.web3.account) return <Wallet account={context.web3.account} />

        if (!context.web3.account && context.web3.network) return <ConnectWallet />

        console.log('currentDevice', currentDevice.isDesktop())
        if(currentDevice.isDesktop()) return <GetMetamask />
        return <ConnectWallet />
    }

    return <div className="web3-wrapper">{renderWalletComponent()}</div>
}

export default Web3
