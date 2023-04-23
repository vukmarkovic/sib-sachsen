import React from 'react'
import { isArray } from '../../../../../Services/Utils/TypesUtil'

export function SurveyBlockContent({ contentGroup }) {
    return (
        <>
            {(contentGroup?.elements || []).map((el, i) => {
                return (
                    <>
                        <div
                            className={`my-4 content-block ${el?.class || ''}`}>
                            {el?.title && (
                                <p className="mb-0 font-weight-bold text-gray-900 whitespace-pre-wrap md:text-lg lg:text-xl dark:text-white">
                                    {el?.title}
                                </p>
                            )}

                            {isArray(el?.content) &&
                                el?.content.map((paragraph, i) => {
                                    return <p className="mt-2">{paragraph}</p>
                                })}

                            {!isArray(el?.content) && (
                                <p className="mt-2">{el?.content}</p>
                            )}
                        </div>
                    </>
                )
            })}
        </>
    )
}
