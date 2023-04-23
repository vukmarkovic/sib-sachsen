import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Errors403 = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>403</h1>
                </div>
                <h2>Oops, You don't have permission to access this page.</h2>
                <p>
                    A web server may return a 403 Forbidden HTTP status code in
                    response to a request from a client for a web page or
                    resource to indicate that the server can be reached and
                    understood the request, but refuses to take any further
                    action.{' '}
                    <Link to={'/'}>Return to homepage</Link>
                </p>
            </div>
        </div>
    )
}

export default Errors403
