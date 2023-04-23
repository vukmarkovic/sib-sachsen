import React from 'react'
import { useAppTranslate } from '../../../../../Hooks/Platform/AppTranslate'

export function SurveyAudioContent({ contentGroup }) {
    const [trans] = useAppTranslate()

    return (
        <>
            {(contentGroup?.elements || []).map((el, i) => {
                return (
                    <>
                        <audio
                            controls
                            className={`inline w-full mx-auto my-4 ${
                                el?.class || ''
                            }`}>
                            <source src={el?.url} type="audio/mpeg" />
                            {trans('base.no_audio_support')}
                        </audio>
                    </>
                )
            })}
        </>
    )
}
