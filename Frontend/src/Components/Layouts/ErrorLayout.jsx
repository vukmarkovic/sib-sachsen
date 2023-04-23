import React from 'react'
import { Outlet } from 'react-router-dom'

const ErrorLayout = ({ children }) => {
    return (
        <>
            <div>
                {children}
                <Outlet />
            </div>
        </>
    )
}

export default ErrorLayout
