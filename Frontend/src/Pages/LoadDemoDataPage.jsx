import React, { useEffect, useState } from 'react'
import { usePublicSurvey } from '../Hooks/Redux/PublicSurvey'
import { useAppNavigate } from '../Hooks/Routing/AppNavigate'
import demoAnswers from '../public_survey_feed/demoAnswers.json'

export const LoadDemoDataPage = () => {
    const [currentSurveyState, setSurveyResult, resetSurveyResult] =
        usePublicSurvey()

    const { navigate } = useAppNavigate()

    useEffect(() => {
        resetSurveyResult()
        for (const answerSet of demoAnswers.result) {
            setSurveyResult(answerSet.data)
        }
        navigate('/graph')
    }, [])

    return <></>
}
