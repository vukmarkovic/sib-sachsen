import React from 'react'
import AppHead from '../Platform/AppHead/AppHead'
import Footer from '../Platform/Footer/Footer'
import { Outlet } from 'react-router-dom'
import AuthNavbar from '../Platform/AuthNavbar/AuthNavbar'

const Layout = ({ children, type }) => {
    function authLayout() {
        return (
            <>
                <div>
                    <AppHead />
                    <div className="container-fluid container-application">
                        <div
                            className="main-content position-relative"
                            style={{ minHeight: '100vh' }}>
                            <AuthNavbar />
                            {children}
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }

    return <>{authLayout()}</>
}

export default Layout
