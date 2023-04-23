import React from 'react'
import {
    convertKey,
    getSpecialField,
    getSpecialFieldKey,
} from '../../../../Services/Utils/SurveyUtil'
import { isArray } from '../../../../Services/Utils/TypesUtil'
import Checkbox from '../../Checkbox/Checkbox'
import Input from '../../Input/Input'

export function SurveyMultiSelectType({ question, onValueChosen, answers }) {
    const questionKey = convertKey(question?.key)

    function body() {
        return (
            <>
                <div className="survey-multiselect">
                    {Object.keys(question?.answers || {}).map((key) => {
                        // @php($specialField = $getSpecialField($answer))

                        const specialField = getSpecialField(
                            question?.answers[key]
                        )

                        if (specialField) {
                            let value = ''
                            const specialFieldKey =
                                getSpecialFieldKey(questionKey)
                            if (
                                Object.keys(answers).includes(specialFieldKey)
                            ) {
                                value = answers[specialFieldKey]
                            }

                            return (
                                <>
                                    <label className="mt-4">
                                        <span className="inline-block mb-4">
                                            {specialField?.label}
                                        </span>
                                        {specialField?.type === 'text' && (
                                            <Input
                                                className={'form-control'}
                                                type="text"
                                                name={questionKey + '[extra]'}
                                                value={value}
                                                onChange={(e) =>
                                                    onValueChosen(
                                                        question,
                                                        e.target.value,
                                                        true
                                                    )
                                                }
                                            />
                                        )}

                                        {specialField?.type === 'textarea' && (
                                            <textarea
                                                className="w-full"
                                                name={questionKey + '[extra]'}
                                                rows="4">
                                                {value}
                                            </textarea>
                                        )}
                                    </label>
                                </>
                            )
                        }
                        let checked = false
                        if (
                            Object.keys(answers).includes(questionKey) &&
                            isArray(answers[questionKey])
                        ) {
                            checked = answers[questionKey].includes(key)
                        }
                        return (
                            <>
                                <div className="mb-4">
                                    <Checkbox
                                        name={
                                            question?.key +
                                            '[]' +
                                            ' :label=' +
                                            key
                                        }
                                        value={key}
                                        className={'mb-0'}
                                        checked={checked}
                                        label={question?.answers[key]}
                                        onClick={() =>
                                            onValueChosen(question, key)
                                        }
                                    />
                                </div>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }

    return <>{body()}</>
}
