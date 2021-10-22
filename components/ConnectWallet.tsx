import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AloeService from '../pages/api/AloeService'

const ConnectWallet = () => {
    const [device, setDevice] = useState('')

    const getBrowserDevice = () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            setDevice('mobile')
          }else{
           setDevice('browser')
          }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <motion.button
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                onClick={AloeService.EnableWeb3}
                className="connect-wallet rounded-pill">
                connect wallet
            </motion.button>
        </motion.div>
    )
}

export default ConnectWallet
