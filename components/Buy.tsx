import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import AloeService from '../pages/api/AloeService'
import { GlobalContext } from '../context/GlobalContext'

type BuyProps = {
    price: number
    id: number
}

const Buy = ({ price, id }: BuyProps) => {
    const context: any = useContext(GlobalContext)
    const displayPrice = price / 10 ** 18

    return (
        <>
            <span className="mt-2 price">{displayPrice} eth</span>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                className="p-3 buy text-center text-light mt-3 cursor"
                onClick={e => AloeService.buyAloeArtwork(context.dispatch, id, price)}>
                <span className="text-lowercase">buy</span>
            </motion.div>
        </>
    )
}

export default Buy
