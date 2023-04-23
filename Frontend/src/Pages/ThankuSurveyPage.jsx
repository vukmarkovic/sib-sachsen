import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppNavigate } from '../Hooks/Routing/AppNavigate'

import { PrimaryButton } from '../Components/BasicComponents/Button/PrimaryButton'
import { ErrorPage } from './ErrorPage'

const ThankuSurveyPage = () => {
    const { navigate } = useAppNavigate()
    const location = useLocation()
    const [isCompleted, setCompleted] = useState(undefined)

    useEffect(() => {
        setCompleted(location?.state?.completed || false)
    }, [])

    const handleClick = (route, data) => {
        navigate(route, data)
    }

    return (
        <>
            {isCompleted === true && (
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <aside className="col-8 col-sm-8 col-md-6 col-lg-5">
                            <h4
                                className="card-title mb-4 mt-1"
                                style={{ color: '#337E33' }}
                            >
                                Vielen Dank für die Teilnahme an der Umfrage!
                            </h4>
                            {/*
                            <div className="form-group pt-3">
                                <PrimaryButton
                                    type="submit"
                                    className="btn btn-primary btn-block font-weight-bold py-2"
                                    style={{
                                        backgroundColor: '#337E33',
                                        fontSize: '18px',
                                    }}
                                    onClick={() =>
                                        handleClick('/public-survey')
                                    }
                                >
                                    Run survey again
                                </PrimaryButton>
                            </div>
                            */}
                        </aside>
                    </div>
                </div>
            )}

            {isCompleted === false && <ErrorPage status={'403'} />}
        </>
    )
}

export default ThankuSurveyPage
