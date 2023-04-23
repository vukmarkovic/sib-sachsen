import React from 'react'
import { convertKey } from '../../../../Services/Utils/SurveyUtil'
import Checkbox from '../../Checkbox/Checkbox'

export function SurveyRangeDefinitionType({
    question,
    onValueChosen,
    answers,
}) {
    const questionKey = convertKey(question?.key)

    function body() {
        return (
            <>
                <div className="w-full max-w-xl dark:bg-dark-mode-0 dark:border-dark-mode-3">
                    <table className="survey-range w-100">
                        <thead>
                            <tr>
                                <th></th>
                                {Object.keys(question?.answers2).map(
                                    (answer2) => {
                                        return (
                                            <th className="py-2 text-left text-gray-800 label dark:text-gray-200">
                                                {question?.answers2[answer2]}
                                            </th>
                                        )
                                    }
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(question?.answers).map((key1) => {
                                const answer1 = question?.answers[key1]
                                const key1Index = Object.keys(
                                    question?.answers
                                ).indexOf(key1)

                                return (
                                    <>
                                        <tr>
                                            <th className="py-2 pr-4 text-xs text-left text-gray-800 range-th dark:text-gray-200">
                                                {answer1}
                                            </th>
                                            {Object.keys(
                                                question?.answers2
                                            ).map((key2) => {
                                                const key2Index = Object.keys(
                                                    question?.answers2
                                                ).indexOf(key2)
                                                const key =
                                                    key1Index + '_' + key2Index
                                                const checked =
                                                    answers[questionKey] &&
                                                    answers[questionKey][key]

                                                return (
                                                    <>
                                                        <td
                                                            // onMouseOver="handleMouseOver(event, '{{ $key1 }}', '{{ $key2 }}')"
                                                            // onMouseDown="handleMouseClicked(event, '{{ $key1 }}', '{{ $key2 }}')"
                                                            className={
                                                                'p-0 m-0 range-td'
                                                            }>
                                                            <Checkbox
                                                                onClick={(e) =>
                                                                    onValueChosen(
                                                                        question,
                                                                        {
                                                                            key1Index,
                                                                            key2Index,
                                                                            checked:
                                                                                !checked,
                                                                        },
                                                                        true
                                                                    )
                                                                }
                                                                name={
                                                                    question?.key +
                                                                    '[' +
                                                                    key1 +
                                                                    key2 +
                                                                    ']'
                                                                }
                                                                id={
                                                                    key1 +
                                                                    '_' +
                                                                    key2
                                                                }
                                                                className={
                                                                    'flex-shrink-0 mb-0'
                                                                }
                                                                checked={
                                                                    checked
                                                                }
                                                            />
                                                        </td>
                                                    </>
                                                )
                                            })}
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    return <>{body()}</>
}
