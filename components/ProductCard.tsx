import React, { useContext, Dispatch } from 'react'
import { ArtworkType } from '../types/artwork.types'
import { motion } from 'framer-motion'
import { GlobalContext } from '../context/GlobalContext'
import Buy from './Buy'
import Sold from './Sold'

type ProductCardProps = {
    setSelectedImage: Dispatch<any>
    artwork: ArtworkType
}

function ProductCard({ setSelectedImage, artwork }: ProductCardProps) {
    const context: any = useContext(GlobalContext)
    const isSold = context.contract.state[artwork.id]

    return (
        <div className="card mt-3">
            <div className="product align-items-center text-center">
                <motion.div className="artwork-wrap" whileHover={{ opacity: 1 }} onClick={() => setSelectedImage(`data:image/png;base64,${artwork.image}`)}>
                    <motion.img src={`data:image/png;base64,${artwork.image}`} alt={artwork.name} animate={{ opacity: 1 }} />
                </motion.div>
                <h6 className="text-dark py-2">{artwork.name}</h6>
                <div className="mt-3 info">
                    <a target="_blank" href={artwork.metadata_url} rel="noreferrer" className="d-block text-link owner-link">
                        link
                    </a>
                </div>
                <div className="product-status">{isSold ? <Sold account={isSold} /> : <Buy price={artwork.price} id={artwork.id} />}</div>
            </div>
        </div>
    )
}

export default ProductCard
