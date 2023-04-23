import React from 'react'
import { convertKey } from '../../../../Services/Utils/SurveyUtil'
import Input from '../../Input/Input'
import Typography from '../../Typography/Typography'

export function SurveyRadioType({ question, onValueChosen, answers }) {
    function body() {
        return (
            <>
                {question?.subQuestion && (
                    <p className="text-center">
                        <strong>{question?.subQuestion}</strong>
                    </p>
                )}

                <Input
                    className={
                        'd-flex text-center flex-row w-100 ' +
                        (Object.keys(question?.answers || {})?.length > 2
                            ? 'justify-content-between'
                            : 'justify-content-center')
                    }
                    type={'radio'}
                    radioClassName={
                        'w-100 ' +
                        (Object.keys(question?.answers || {})?.length > 2
                            ? 'justify-content-around'
                            : 'justify-content-center')
                    }
                    horizontal
                    labelStyle={{ fontSize: 'small' }}
                    onChange={(e) => onValueChosen(question, e.target.value)}
                    labels={Object.values(question?.answers || {}).map(
                        (val) => (
                            <Typography
                                variant={'body2'}
                                style={{ fontsize: 'small' }}>
                                {val}
                            </Typography>
                        )
                    )}
                    values={Object.keys(question?.answers || {})}
                    value={answers[convertKey(question?.key)]}
                    primary
                />
            </>
        )
    }

    return <>{body()}</>
}
