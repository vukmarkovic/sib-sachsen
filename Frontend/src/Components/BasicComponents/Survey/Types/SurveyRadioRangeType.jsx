import React from 'react'
import { convertKey, parseButtons } from '../../../../Services/Utils/SurveyUtil'
import Input from '../../Input/Input'
import Typography from '../../Typography/Typography'

export function SurveyRadioRangeType({ question, onValueChosen, answers }) {
    function body() {
        const parsedAnswers = parseButtons(question?.answers)
        const labels = parsedAnswers.map((answer) => answer.text)
        const values = parsedAnswers.map((answer) => answer.value)
        return (
            <>
                <div className="d-flex flex-row justify-content-between">
                    <Input
                        className={
                            'd-flex text-center flex-row w-100 ' +
                            (Object.keys(question?.answers || {})?.length > 2
                                ? 'justify-content-between'
                                : 'justify-content-center')
                        }
                        horizontal
                        radioClassName={'justify-content-around w-100'}
                        type={'radio'}
                        onChange={(e) =>
                            onValueChosen(question, e.target.value)
                        }
                        labels={labels.map((val) => (
                            <Typography
                                variant={'body2'}
                                style={{ fontsize: 'small' }}>
                                {val}
                            </Typography>
                        ))}
                        values={values}
                        value={answers[convertKey(question?.key)]}
                        name={question?.key}
                        primary
                    />
                </div>
            </>
        )
    }

    return <>{body()}</>
}
