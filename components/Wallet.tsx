import React, { useContext } from 'react'
import Image from 'next/image'
import Identicon from 'identicon.js'
import { motion } from 'framer-motion'
import { GlobalContext } from '../context/GlobalContext'

export default function Wallet({ account }) {
    const context: any = useContext(GlobalContext)
    const network = context.web3.network
    console.log('CONTEXT HERE', context.web3.network)
    
    return (
        <motion.div
            className="wallet rounded-pill justify-center d-flex justify-content-between py-1 px-1 align-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}>
            <Image
                src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
                alt="identicon"
                className="img-fluid p-0 identicon"
                width={40}
                height={40}
            />
            <a
                href={
                    ['main', 'private', 'wrong network'].includes(network.toLowerCase())
                        ? `https://etherscan.io/address/${account}`
                        : `https://${network}.etherscan.io/address/`
                }
                target="_blank"
                rel="noreferrer"
                className="text-link account">
                {'  '}
                {`${account.substring(0, 5)}...${account.substring(38, 42)}`}
            </a>
        </motion.div>
    )
}
