import React from 'react'

export function SurveyImageContent({ contentGroup }) {
    return (
        <>
            {(contentGroup?.elements || []).map((el, i) => {
                return (
                    <>
                        <div className="flex items-center justify-center">
                            <img
                                src={el?.url}
                                alt={el?.alt}
                                className={`inline-block w-auto rounded-lg h-auto my-8 max-h-48 mx-auto ${
                                    el?.class || ''
                                }`}
                            />
                            />
                        </div>
                    </>
                )
            })}
        </>
    )
}
