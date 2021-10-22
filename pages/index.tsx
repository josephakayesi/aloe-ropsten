import React, { useContext, useEffect, useState } from 'react'
import { data } from '../ethereum/scripts/data'
import web3 from '../ethereum/web3'
import { GetServerSidePropsResult } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Modal from '../components/Modal'
import { Container } from '../styled/Container'
import { ArtworkType } from '../types/artwork.types'
import aloe from '../ethereum/aloe'
import Loader from '../components/Loader'
import Toaster from '../components/Toaster'
import AloeService from './api/AloeService'
import { GlobalContext } from '../context/GlobalContext'
import useMobileDetect from '../hooks/useMobileDetect'

declare let window: any

function Index({ dispatch, pageProps }) {
    const [selectedImage, setSelectedImage] = useState(null)
    const context: any = useContext(GlobalContext)

    useEffect(() => {
        loadEthereumData(context.dispatch)
    }, [])

    async function loadEthereumData(dispatch) {
        if (typeof window.ethereum !== 'undefined') {
            await AloeService.Update(dispatch)
            window.ethereum.on('accountsChanged', async () => {
                await AloeService.Update(dispatch)
            })
            window.ethereum.on('chainChanged', async () => {
                await AloeService.Update(dispatch)
            })
        }
    }

    return (
        <Container>
            <main>
                <Toaster />
                <Header />
                <Hero />
                {context.contract.metadata && context.contract.metadata!.length && context.contract.state && context.contract.state!.length ? (
                    <Gallery setSelectedImage={setSelectedImage} />
                ) : (
                    <Loader />
                )}
                {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
            </main>
        </Container>
    )
}

export default Index
