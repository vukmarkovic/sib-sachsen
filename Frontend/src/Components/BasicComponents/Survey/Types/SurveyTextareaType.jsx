import React from 'react'
import { Textarea } from '../../Textarea/Textarea'
import { convertKey } from '../../../../Services/Utils/SurveyUtil'

export function SurveyTextareaType({ question, onValueChosen, answers }) {
    function body() {
        return (
            <>
                <div className="mx-auto survey-textarea">
                    <Textarea
                        label={question?.label}
                        name={question?.key}
                        type={'textarea'}
                        placeholder={question?.placeholder}
                        className={'block w-100'}
                        cols={60}
                        rows={8}
                        onChange={(e) =>
                            onValueChosen(question, e.target.value)
                        }
                        value={
                            answers[convertKey(question?.key)] ||
                            question?.default ||
                            ''
                        }></Textarea>
                </div>
            </>
        )
    }

    return <>{body()}</>
}
