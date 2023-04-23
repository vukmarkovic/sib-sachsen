import React from 'react'
import Button from '../Button/Button'
import { useAppTranslate } from '../../../Hooks/Platform/AppTranslate'
import { isIntroQuestion } from '../../../Services/Utils/SurveyUtil'
import { Col, Container, Row } from '@themesberg/react-bootstrap'
import Card from '../Card/Card'
import { PrimaryButton } from '../Button/PrimaryButton'
import { PrimaryOutlinedButton } from '../Button/PrimaryOutlinedButton'

export function SurveyNavigation({
    survey,
    question,
    nextIndex,
    nextClicked,
    backClicked,
    isLastQuestion,
    showSkip = false,
    onFinishClicked,
    onSkipClicked,
    yourResultsButtonText,
}) {
    const [trans] = useAppTranslate()

    function skipButton() {
        if (!showSkip) {
            return null
        }
        return (
            <div className="fixed-bottom" style={{ zIndex: 900 }}>
                <Container className="d-flex flex-row-reverse">
                    <Col className="d-flex col-lg-9 justify-content-center">
                        <Card>
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    <Button onClick={onSkipClicked}>
                                        Skip to End (My lord)
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Container>
            </div>
        )
    }

    function body() {
        if (isIntroQuestion(question)) {
            return (
                <>
                    <div>
                        <div className={'text-center'}>
                            <PrimaryButton
                                primary
                                name={'goto'}
                                onClick={nextClicked}>
                                {trans('survey.lets_go')}
                            </PrimaryButton>
                        </div>
                    </div>
                </>
            )
        }

        if (isLastQuestion()) {
            return (
                <>
                    <div className="d-flex justify-content-end">
                        <PrimaryOutlinedButton
                            className={'mx-2'}
                            onClick={backClicked}
                            secondary>
                            {trans('base.back')}
                        </PrimaryOutlinedButton>

                        <PrimaryButton
                            className={'mx-2'}
                            onClick={onFinishClicked}
                            secondary>
                            {yourResultsButtonText ||
                                trans('project.your_results')}
                        </PrimaryButton>
                    </div>
                </>
            )
        }

        return (
            <>
                <div className="d-flex justify-content-end">
                    <PrimaryOutlinedButton
                        className={'mx-2'}
                        onClick={backClicked}
                        secondary>
                        {trans('base.back')}
                    </PrimaryOutlinedButton>

                    <PrimaryButton
                        className={'mx-2'}
                        onClick={nextClicked}
                        primary>
                        {trans('base.next')}
                    </PrimaryButton>
                </div>
            </>
        )
    }

    return (
        <>
            {body()}
            {skipButton()}
        </>
    )
}
