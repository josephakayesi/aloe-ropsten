import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import React from 'react'
import Head from 'next/head'
import { GlobalContextProvider } from '../context/GlobalContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <GlobalContextProvider>
                <Component {...pageProps} />
            </GlobalContextProvider>
        </>
    )
}
