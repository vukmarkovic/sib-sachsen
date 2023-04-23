import React from 'react'
import { useAppTranslate } from '../../../Hooks/Platform/AppTranslate'
import { logger } from '../../../Services/Utils/LoggerUtil'

export function SurveyIntroPage({
    question,
    hasMorePages,
    progress,
    parseQuestion,
}) {
    const [trans] = useAppTranslate()

    function title() {
        return (
            <>
                <p className="mt-4 text-lg text-center w-100">
                    {parseQuestion(question?.title)}
                </p>
            </>
        )
    }

    function audio() {
        if (!question?.audio) {
            return null
        }

        return (
            <>
                <div className="my-4">
                    <audio controls>
                        <source src={question?.audio} type="audio/mpeg" />
                        {trans('base.no_audio_support')}
                    </audio>
                </div>
            </>
        )
    }

    function image() {
        if (!question?.image) {
            return null
        }

        return (
            <>
                <img
                    src={question?.image}
                    alt={question?.title}
                    className="img-fluid m-3"
                    style={{ maxHeight: '200px' }}
                />
            </>
        )
    }

    function description() {
        if (!question?.description) {
            return null
        }

        return (
            <>
                <p
                    className={`whitespace-pre-wrap ${
                        !!question?.image ? 'text-left' : 'text-center'
                    }`}>
                    {question?.description}
                </p>
            </>
        )
    }

    function imageDescriptionComponent() {
        if (!question?.description) {
            return image()
        }

        if (!question?.image) {
            return description()
        }

        return (
            <div className={'d-flex flex-row align-items-center'}>
                {image()}
                {description()}
            </div>
        )
    }

    function progressBar() {
        if (!hasMorePages()) {
            return null
        }

        return (
            <>
                <div className="progress">
                    <div
                        className={'progress-bar'}
                        role="progressbar"
                        style={{ width: progress + '%' }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
            </>
        )
    }

    function body() {
        return (
            <>
                {progressBar()}
                {title()}
                {audio()}
                {imageDescriptionComponent()}
            </>
        )
    }

    return <>{body()}</>
}
