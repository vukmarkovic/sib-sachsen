import Card from '../../BasicComponents/Card/Card'
import { SurveyIntroPage } from './SurveyIntroPage'
import { SurveyNavigation } from './SurveyNavigation'
import { useSurvey } from '../../../Hooks/Surveys/Survey'
import { SurveyRadioType } from './Types/SurveyRadioType'
import { SurveySeparator } from './SurveySeparator'
import { SurveyButtonType } from './Types/SurveyButtonType'
import { parseQuestion as utilParseQuestion } from '../../../Services/Utils/SurveyUtil'
import { SurveyMultiSelectType } from './Types/SurveyMultiSelectType'
import { SurveyRangeDefinitionType } from './Types/SurveyRangeDefinitionType'
import { useEffect } from 'react'
import { SurveyRadioRangeType } from './Types/SurveyRadioRangeType'
import { SurveyContentType } from './Types/SurveyContentType/SurveyContentType'
import { SurveyTextareaType } from './Types/SurveyTextareaType'
import { SurveyMultiSelectDragDropType } from './Types/SurveyMultiSelectDragDropType'

export const Survey = ({
    type,
    index = 0,
    showSkip,
    onFinish,
    initialValue,
    onAnswerChosen,
    setSurveyId,
    setProjectId,
    surveyOptions,
    yourResultsButtonText,
    showLoader,
}) => {
    const {
        survey,
        question,
        answers,
        onNextClicked,
        onBackClicked,
        onFinishClicked,
        hasMorePages,
        progress,
        onAnswer,
        projectId,
        onSkipClicked,
        isLastQuestion,
    } = useSurvey(
        type,
        index,
        initialValue,
        onFinish,
        onAnswerChosen,
        surveyOptions,
        showLoader
    )

    useEffect(() => {
        setProjectId(projectId)
    }, [projectId])

    useEffect(() => {
        setSurveyId(survey?.id)
    }, [survey])

    function parseQuestion(question) {
        if (question && answers) {
            return utilParseQuestion(survey, question, answers, null)
        }
        return question
    }

    function contentQuestion() {
        return (
            <SurveyContentType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }

    function textQuestion() {
        return (
            <SurveyTextareaType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
                type="text"
            />
        )
    }

    //TODO (Low Prio) implement (we don't have any of these questions as far as I know)
    function numberQuestion() {
        return (
            <Card>
                <h2>{question?.title}</h2>
                <p>{question?.description}</p>
            </Card>
        )
    }

    //TODO (Low Prio) implement (we don't have any of these questions as far as I know)
    function dateQuestion() {
        return (
            <Card>
                <h2>{question?.title}</h2>
                <p>{question?.description}</p>
            </Card>
        )
    }

    function textAreaQuestion() {
        return (
            <SurveyTextareaType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }

    //TODO (Low Prio) implement (we don't have any of these questions as far as I know)
    function emailsQuestion() {
        return (
            <Card>
                <h2>{question?.title}</h2>
                <p>{question?.description}</p>
            </Card>
        )
    }
    //TODO (Low Prio) implement (we don't have any of these questions as far as I know)
    function dateRangeQuestion() {
        return (
            <Card>
                <h2>{question?.title}</h2>
                <p>{question?.description}</p>
            </Card>
        )
    }

    function multiSelectDnDQuestion() {
        return (
            <SurveyMultiSelectDragDropType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }

    function multiSelectQuestion() {
        return (
            <SurveyMultiSelectType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }
    //TODO (Low Prio) implement (we don't have any of these questions as far as I know)
    function selectRequiredQuestion() {
        return (
            <Card>
                <h2>{question?.title}</h2>
                <p>{question?.description}</p>
            </Card>
        )
    }

    function radioQuestion() {
        return (
            <SurveyRadioType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }

    //TODO (Low Prio) implement (we don't have any of these questions as far as I know)
    function selectQuestion() {
        return (
            <Card>
                <h2>{question?.title}</h2>
                <p>{question?.description}</p>
            </Card>
        )
    }

    function buttonsQuestion() {
        return (
            <SurveyButtonType
                parseQuestion={parseQuestion}
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }

    function radioScaleQuestion() {
        return (
            <SurveyRadioRangeType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }

    function rangeQuestion() {
        return (
            <SurveyRangeDefinitionType
                question={question}
                onValueChosen={onAnswer}
                answers={answers}
            />
        )
    }

    function renderQuestion() {
        if (!question?.type || !hasMorePages()) {
            return null
        }

        switch (question.type) {
            case 'content':
                return contentQuestion()
            case 'text':
                return textQuestion()
            case 'textarea':
                return textAreaQuestion()
            case 'emails':
                return emailsQuestion()
            case 'number':
                return numberQuestion()
            case 'date':
                return dateQuestion()
            case 'date_range':
                return dateRangeQuestion()
            case 'multiselect':
                return multiSelectQuestion()
            case 'multiselect_dnd':
                return multiSelectDnDQuestion()
            case 'select_required':
                return selectRequiredQuestion()
            case 'radio':
                return radioQuestion()
            case 'select':
                return selectQuestion()
            case 'buttons':
            case 'option-buttons':
                return buttonsQuestion()
            case 'option-radio':
                return radioScaleQuestion()
            case 'range-definition':
                return rangeQuestion()
            default:
                return <></>
        }
    }

    function currentQuestion() {
        const type = question?.type

        switch (type) {
            case 'seperator':
                return (
                    <>
                        <SurveySeparator
                            onBackClicked={onBackClicked}
                            onNextClicked={onNextClicked}
                            title={question?.title}
                        />
                    </>
                )
            default:
                return (
                    <>
                        <div className={question?.class || ''}>
                            <div
                                className={
                                    question?.type === 'welcome' ? 'h-full' : ''
                                }>
                                <SurveyIntroPage
                                    parseQuestion={parseQuestion}
                                    answers={answers}
                                    progress={progress}
                                    survey={survey}
                                    hasMorePages={hasMorePages}
                                    question={question}
                                />

                                {renderQuestion()}
                            </div>

                            <SurveyNavigation
                                onFinishClicked={onFinishClicked}
                                nextClicked={onNextClicked}
                                backClicked={onBackClicked}
                                survey={survey}
                                question={question}
                                hasMorePages={hasMorePages}
                                showSkip={showSkip && !isLastQuestion()}
                                onSkipClicked={onSkipClicked}
                                isLastQuestion={isLastQuestion}
                                yourResultsButtonText={
                                    yourResultsButtonText
                                }></SurveyNavigation>
                        </div>
                    </>
                )
        }
    }

    function body() {
        return <>{survey ? <>{currentQuestion()}</> : null}</>
    }

    return <>{body()}</>
}
