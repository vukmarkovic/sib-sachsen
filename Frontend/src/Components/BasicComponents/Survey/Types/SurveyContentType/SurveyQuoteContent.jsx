import React from 'react'

export function SurveyQuoteContent({ contentGroup }) {
    return (
        <>
            {(contentGroup?.elements || []).map((el, i) => {
                return (
                    <>
                        <blockquote
                            className={`inline-block max-w-lg ${
                                el?.class || ''
                            }`}>
                            {el?.quote}
                            <cite className="block mt-1 text-sm opacity-75">
                                - {el?.author}
                            </cite>
                        </blockquote>
                    </>
                )
            })}
        </>
    )
}
