import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.scss'
//import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.css'
import 'prismjs/themes/prism-coy.css'
import Layout from './Components/Layouts/Layout'
import { routes } from './Config/Routes'
import { ErrorPage } from './Pages/ErrorPage'

const AppRoutes = () => {
    function getError(error) {
        if (error) {
            return <ErrorPage status={error} />
        }
        return null
    }

    function getLayoutRoutes(layout) {
        return Object.values(routes).filter(route => route.layout === layout)
    }

    function createRoute(route) {
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.component}
                errorElement={<startError />}
            >
                {route.children.map(child => createRoute(child))}
            </Route>
        )
    }

    function fallback() {
        return (
            <>
                <h1>Fallback</h1>
            </>
        )
    }

    function i18nStatusCond() {
        return (
            <Suspense fallback={fallback()}>
                {getError()}

                <Routes>
                    {getLayoutRoutes(null).map(route => createRoute(route))}

                    <Route element={<Layout type="auth" />}>
                        {getLayoutRoutes('auth').map(route =>
                            createRoute(route)
                        )}
                    </Route>
                    <Route
                        path="/"
                        element={<Navigate replace to="/arbeitszufriedenheit" />}
                    />
                    <Route path="/*" element={getError('404')} />
                </Routes>
            </Suspense>
        )
    }

    return <>{i18nStatusCond()}</>
}

export default AppRoutes
