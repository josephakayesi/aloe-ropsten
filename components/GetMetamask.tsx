import React from 'react'
import { motion } from 'framer-motion'
import AloeService from '../pages/api/AloeService'

const GetMetamask = () => {
    const handleClick = () => {
        try {
            window.open('https://metamask.io/')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <motion.button
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                onClick={handleClick}
                className="get-metamask rounded-pill">
                get metamask
            </motion.button>
        </motion.div>
    )
}

export default GetMetamask
