import React from 'react'
import { useAppTranslate } from '../../../Hooks/Platform/AppTranslate'
import { PrimaryButton } from '../Button/PrimaryButton'
import { PrimaryOutlinedButton } from '../Button/PrimaryOutlinedButton'

export function SurveySeparator({ title, onBackClicked, onNextClicked }) {
    const [trans] = useAppTranslate()

    function body() {
        return (
            <>
                <div className="text-center">
                    <p>{trans('survey.seperator_title')}</p>
                    <h3>{title}</h3>
                </div>

                <div className="d-flex justify-content-end">
                    <PrimaryOutlinedButton
                        className={'mx-3 float'}
                        onClick={onBackClicked}>
                        {trans('base.back')}
                    </PrimaryOutlinedButton>

                    <PrimaryButton
                        primary
                        className={'mx-3 float'}
                        onClick={onNextClicked}>
                        {trans('survey.lets_go')}
                    </PrimaryButton>
                </div>
            </>
        )
    }

    return <>{body()}</>
}
