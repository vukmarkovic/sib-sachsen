import React from 'react'

export function SurveyVideoContent({ contentGroup }) {
    return (
        <>
            {(contentGroup?.elements || []).map((el, i) => {
                return (
                    <>
                        <div
                            className={`inline-block w-full my-4 rounded-lg shadow-lg embed-container ${
                                el?.class || ''
                            }`}>
                            <iframe
                                width="560"
                                height="315"
                                src={el?.url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    </>
                )
            })}
        </>
    )
}
