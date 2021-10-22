import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AloeService from '../pages/api/AloeService'
import useMobileDetect from '../hooks/useMobileDetect'


const ConnectWallet = () => {
const currentDevice = useMobileDetect()

const getCurrentDevice = () => {
    const device = currentDevice.isMobile() === true ? 'mobile' : 'desktop'
    return device
}

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <motion.button
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                onClick={() => AloeService.EnableWeb3(getCurrentDevice())}
                className="connect-wallet rounded-pill">
                connect wallet
            </motion.button>
        </motion.div>
    )
}

export default ConnectWallet
