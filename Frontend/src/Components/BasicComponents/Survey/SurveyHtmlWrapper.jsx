import React from 'react'
import HtmlWrapper from '../Wrapper/HtmlWrapper'
import { useSurveyPath } from '../../../Hooks/Surveys/SurveyPath'

export function SurveyHtmlWrapper({ type, params }) {
    const path = useSurveyPath(type, params)

    return <>{path && <HtmlWrapper type={path} />}</>
}
