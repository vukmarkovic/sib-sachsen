import React, { useState, useEffect } from 'react'
import PublicSurveyComponent from '../legacy/components/PublicSurvey'
import { jsonData, surveyLangData } from '../public_survey_feed/questions'

export const PublicSurveyPage = () => {
    const [surveyData, setSurveyData] = useState([])

    useEffect(() => {
        jsonData?.forEach(item => {
            if (item.relevantQuestion) {
                item.question.relevantQuestion = item.relevantQuestion['de']
            }

            item.question.default = item.question['de']

            if (item.description) {
                item.question.description = item.description['de']
            }

            item.choices.forEach(choice => {
                choice.text.default = choice.text['de']
            })
        })

        setSurveyData(jsonData)

        // const newLangData = {}

        // Object.entries(surveyLangData).forEach((item) => {
        //     newLangData[item[0]] = item[1]['de']
        // })

        // setLangData(newLangData)
    }, [])

    return (
        <div className="m-4">
            {surveyLangData && surveyData && (
                <div className="public-survey">
                    <PublicSurveyComponent
                        lang={surveyLangData}
                        survey={surveyData}
                    />
                </div>
            )}
        </div>
    )
}
