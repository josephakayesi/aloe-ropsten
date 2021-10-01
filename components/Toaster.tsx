import React from 'react'
import { Toaster as Toast } from 'react-hot-toast'

export default function Toaster() {
    return (
        <Toast
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                // define default options
                className: 'rounded-pill',
                duration: 5000,
                style: {
                    color: '#333',
                    fontWeight: 500,
                    background: 'rgba( 43, 10, 10, 0.15 )',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                },
                // Default options for specific types
                success: {
                    duration: 5000,
                },

                error: {
                    duration: 5000,
                }
              
            }}
        />
    )
}
