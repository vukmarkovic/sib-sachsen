import React from 'react'
import Error403 from '../Components/BasicComponents/Error/403.jsx'
import Error404 from '../Components/BasicComponents/Error/404.jsx'

export const ErrorPage = (props) => {
    function getErrorPage() {
        switch (props.status) {
            case '401':
                return <Error403 />
            case '403':
                return <Error403 />
            case '404':
                return <Error404 />
            case '419':
                return <Error403 />
            case '429':
                return <Error403 />
            case '500':
                return <Error404 />
            case '503':
                return <Error404 />

            default:
                return <Error404 />
        }
    }

    return getErrorPage()
}
