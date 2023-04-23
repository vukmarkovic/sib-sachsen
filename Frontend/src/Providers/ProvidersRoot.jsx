import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export function ProvidersRoot({ children }) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            {children}
        </BrowserRouter>
    )
}
