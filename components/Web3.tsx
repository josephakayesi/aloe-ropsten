import React, { useContext } from 'react'
import ConnectWallet from './ConnectWallet'
import Wallet from './Wallet'
import { GlobalContext } from '../context/GlobalContext'

function Web3() {
    const context: any = useContext(GlobalContext)

    return <div className="web3-wrapper">{context.web3.account ? <Wallet account={context.web3.account} /> : <ConnectWallet />}</div>
}

export default Web3
