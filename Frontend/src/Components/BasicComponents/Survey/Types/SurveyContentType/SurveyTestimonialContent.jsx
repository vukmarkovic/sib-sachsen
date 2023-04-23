import React from 'react'

export function SurveyTestimonialContent({ contentGroup }) {
    function body() {
        if (contentGroup?.elements?.length > 1) {
            return (
                <>
                    {(contentGroup?.elements || []).map((el, i) => {
                        return (
                            <>
                                <div
                                    className={`flex-auto flex-grow relative border rounded-lg p-4 md:p-8 text-center md:text-left ${
                                        el?.class || ''
                                    } dark:border-dark-mode-3`}>
                                    <p className="max-w-3xl mx-auto text-sm font-weight-bold text-gray-900 md:text-base">
                                        {el?.quote}
                                    </p>
                                    <div className="mt-4">
                                        <div className="md:flex md:items-center">
                                            <div className="mr-2 md:flex-shrink-0">
                                                <img
                                                    src={el?.image}
                                                    alt=""
                                                    className="w-10 h-10 mx-auto rounded-full"
                                                />
                                            </div>
                                            <div className="mt-3 text-center md:mt-0 md:flex md:items-center">
                                                <div className="text-sm font-weight-bold dark:text-white">
                                                    {el?.name}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                                    {el?.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </>
            )
        }

        return (
            <>
                {(contentGroup?.elements || []).map((el, i) => {
                    return (
                        <>
                            <div
                                className={`frelative my-4 ${el?.class || ''}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 150 150"
                                    className="h-10 mx-auto">
                                    <title>{el?.name}</title>
                                    <path
                                        fill="#FF3536"
                                        d="M22.575 71L0 93.643l11.813 29.875L45.075 150H150L22.575 71zM150 150L59.435 66.387 32 65l118 85zM71 22.575L93.643 0l29.875 11.813L150 45.075V150L71 22.575zM150 150L66.387 59.435 65 32l85 118z"></path>
                                </svg>
                                <p className="px-8 mx-auto mt-8 text-xl font-weight-bold text-center text-gray-900">
                                    {el?.quote}
                                </p>
                                <div className="mt-4">
                                    <div className="md:flex md:items-center md:justify-center">
                                        <div className="md:flex-shrink-0">
                                            <img
                                                src={el?.image}
                                                alt={el?.name}
                                                className="w-10 h-10 mx-auto rounded-full"
                                            />
                                        </div>
                                        <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                            <div className="font-weight-bold dark:text-white">
                                                {el?.name}
                                            </div>
                                            <svg
                                                className="hidden w-5 h-5 mx-1 md:block text-matchmanao-red"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <title>{el?.description}</title>
                                                <path d="M11 0h3L9 20H6l5-20z"></path>
                                            </svg>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                {el?.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return <>{body()}</>
}
