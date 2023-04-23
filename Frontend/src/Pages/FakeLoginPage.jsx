import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GraphPage } from './GraphPage'
import { PrimaryButton } from '../Components/BasicComponents/Button/PrimaryButton'
import { fetchToken, checkVerify } from '../Redux/Slices/AuthTokenSlice'

const FakeLoginPage = () => {
    const [isVerified, setVerified] = useState(false)
    const [isValid, setValid] = useState(true)
    const [password, setPassword] = useState()
    // const location = useLocation()
    const dispatch = useDispatch()

    const currentToken = useSelector(state => {
        return state?.authToken?.currentToken
    })

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(fetchToken(password))
    }

    const handleInputChange = e => {
        const inpVal = e.target.value
        setPassword(e.target.value)
        setValid(inpVal !== '')
    }

    useEffect(() => {
        if (currentToken) {
            setVerified(true)
        } else {
            let usertoken = localStorage.getItem('token')
            if (usertoken) {
                dispatch(checkVerify(usertoken))
            } else {
                setVerified(false)
            }
        }
    }, [currentToken])

    return (
        <>
            {isVerified ? (
                <GraphPage />
            ) : (
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <aside className="col-8 col-sm-8 col-md-6 col-lg-5">
                            <div className="shadow p-3 mb-5 bg-body rounded card login-page">
                                <article className="card-body">
                                    <h4
                                        className="card-title mb-4 mt-1"
                                        style={{ color: '#337E33' }}
                                    >
                                        Sign in
                                    </h4>
                                    {!isValid && (
                                        <div
                                            className="alert alert-danger alert-dismissible fade show"
                                            role="alert"
                                        >
                                            Incorrect password.
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="alert"
                                            ></button>
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                className={`${
                                                    isValid ? '' : 'is-invalid'
                                                } form-control`}
                                                placeholder="Enter your password"
                                                type="password"
                                                onChange={e =>
                                                    handleInputChange(e)
                                                }
                                            />
                                        </div>
                                        <div className="form-group pt-3">
                                            <PrimaryButton
                                                type="submit"
                                                className="btn btn-primary btn-block font-weight-bold py-2"
                                                style={{
                                                    backgroundColor: '#337E33',
                                                    fontSize: '18px',
                                                }}
                                            >
                                                Login
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </aside>
                    </div>
                </div>
            )}
        </>
    )
}

export default FakeLoginPage
