import React, { useContext } from 'react'
import { ArtworkType } from '../types/artwork.types'
import ProductCard from '../components/ProductCard'
import { GlobalContext } from '../context/GlobalContext'

function Gallery({ setSelectedImage }) {
    const context: any = useContext(GlobalContext)
    const artworks = context.contract.metadata

    const renderGallery = (artworks: readonly ArtworkType[] | null, setSelectedImage): JSX.Element => {
        const items = artworks && artworks.map(artwork => <ProductCard key={artwork.id} setSelectedImage={setSelectedImage} artwork={artwork} />)

        return <>{items}</>
    }
    return <div className="gallery">{renderGallery(artworks, setSelectedImage)}</div>
}

export default Gallery
