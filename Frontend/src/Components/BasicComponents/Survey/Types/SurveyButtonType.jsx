import React from 'react'
import { convertKey, parseButtons } from '../../../../Services/Utils/SurveyUtil'
import Input from '../../Input/Input'

export function SurveyButtonType({
    question,
    onValueChosen,
    answers,
    parseQuestion,
}) {
    function radioGroup() {
        const parsedAnswers = parseButtons(question?.answers)

        const values = parsedAnswers.map((answer) => {
            return answer['value']
        })

        return (
            <>
                <Input
                    id={question?.id}
                    horizontal={true}
                    className={
                        'mx-2 w-60 flex-grow-1 ' +
                        (Object.keys(question?.answers || {})?.length > 2
                            ? 'justify-content-around'
                            : 'justify-content-center')
                    }
                    radioClassName={'justify-content-between w-100'}
                    type={'radio'}
                    name={question?.key}
                    onChange={(e) => onValueChosen(question, e.target.value)}
                    values={values}
                    value={answers[convertKey(question?.key)]}
                    primary
                />
            </>
        )
    }

    function body() {
        return (
            <>
                <div className="w-full d-flex flex-row align-items-center justify-content-center">
                    {question?.subQuestion && (
                        <>
                            <p className="z-20 items-center block max-w-sm font-weight-bold text-center text-gray-900 dark:text-white mx-auto mb-8">
                                {question?.subQuestion}
                                {/*TOOD @Sherif add tooltip*/}
                                {/*@if($question->subQuestionTooltip)*/}
                                {/*<x-c.tooltip :tooltip="$question->subQuestionTooltip" className="inline-block align-bottom"/>*/}
                                {/*@endif*/}
                            </p>
                        </>
                    )}

                    <div className="d-md-flex justify-content-md-between align-items-center text-center w-100">
                        <div className="p-2">
                            {question?.option1 && (
                                <>
                                    <p
                                        className="text-center"
                                        style={{
                                            maxWidth: '300px',
                                            marginBottom: 'auto',
                                            marginTop: 'auto',
                                        }}>
                                        {parseQuestion(question?.option1)}
                                    </p>
                                </>
                            )}
                        </div>

                        {radioGroup()}
                        <div className="p-2">
                            {question?.option2 && (
                                <>
                                    <p
                                        className="text-center"
                                        style={{
                                            maxWidth: '300px',
                                            marginBottom: 'auto',
                                            marginTop: 'auto',
                                        }}>
                                        {parseQuestion(question?.option2)}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return <>{body()}</>
}
