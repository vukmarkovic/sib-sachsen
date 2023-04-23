import React from 'react'
import * as Survey from 'survey-react'
import './PublicSurvey.scss'
import { usePublicSurvey } from '../../Hooks/Redux/PublicSurvey'
import { useAppNavigate } from '../../Hooks/Routing/AppNavigate'

Survey.StylesManager.applyTheme('modern')

const PublicSurveyComponent = props => {
    const [currentSurveyState, setSurveyResult] = usePublicSurvey()
    const { navigate } = useAppNavigate()

    const inroPage = {
        elements: [
            {
                type: 'html',
                html: '<p className="title">' + props.lang.intro.de + '</p>',
            },
        ],
    }

    const outroPage = {
        elements: [
            {
                type: 'html',
                html: '<p className="title">' + props.lang.outro.de + '</p>',
            },
        ],
    }

    const namePage = {
        elements: [
            {
                name: 'second_page_container_panel2',
                type: 'panel',
                renderMode: 'progressTop',
                isRequired: false,
                alternateRows: true,
                isAllRowRequired: true,
                elements: [
                    {
                        type: 'text',
                        name: 'name',
                        title: props.lang.player_name.de,
                    },
                ],
            },
        ],
    }

    const surveyRadioTemplate = q => ({
        navigationTitle: ' ',
        startWithNewLine: false,
        elements: [
            {
                type: 'panel',
                renderMode: 'progressTop',
                isRequired: false,
                alternateRows: true,
                isAllRowRequired: true,
                elements: [
                    {
                        type: 'radiogroup',
                        name: q.key,
                        title: JSON.stringify(
                            [
                                q.question.default,
                                q.question.relevantQuestion,
                            ].filter(a => Boolean(a))
                        ),
                        description: q.question.description,
                        colCount: q.colCount || 0,
                        choices: q.choices,
                        visibleIf: q.visibleIf,
                        isRequired: q.isRequired,
                        itemTemplate: 'button',
                    },
                ],
            },
        ],
    })

    const surveyCommentTemplate = q => ({
        navigationTitle: ' ',
        startWithNewLine: false,
        elements: [
            {
                type: 'panel',
                renderMode: 'progressTop',
                isRequired: false,
                alternateRows: true,
                isAllRowRequired: true,
                elements: [
                    {
                        type: 'comment',
                        name: q.key,
                        title: JSON.stringify(
                            [
                                q.question.default,
                                q.question.relevantQuestion,
                            ].filter(a => Boolean(a))
                        ),
                        visibleIf: q.visibleIf,
                    },
                ],
            },
        ],
    })

    const surveyTextTemplate = q => ({
        navigationTitle: ' ',
        startWithNewLine: false,
        elements: [
            {
                type: 'panel',
                renderMode: 'progressTop',
                isRequired: false,
                alternateRows: true,
                isAllRowRequired: true,
                elements: [
                    {
                        type: 'text',
                        name: q.key,
                        title: JSON.stringify(
                            [
                                q.question.default,
                                q.question.relevantQuestion,
                            ].filter(a => Boolean(a))
                        ),
                        visibleIf: q.visibleIf,
                    },
                ],
            },
        ],
    })

    var json = {
        goNextPageAutomatic: false,
        showNavigationButtons: true,
        triggers: [
            { type: 'complete', expression: "{exit1} = 'Yes'" },
            { type: 'complete', expression: "{exit2} = 'Yes'" },
        ],
        showProgressBar: 'top',
        // progressBarType: 'requiredQuestions',
        pages: [
            //namePage,
            inroPage,
            ...props.survey.map(q => {
                if (q.type == 'radio') return surveyRadioTemplate(q)
                else if (q.type == 'comment') return surveyCommentTemplate(q)
                else if (q.type == 'text') return surveyTextTemplate(q)
            }),
            outroPage,
        ],
    }

    const survey = new Survey.Model(json)

    survey.locale = props.currentLang
    survey.requiredText = ''
    survey.showQuestionNumbers = false

    // survey.onValidateQuestion.add((survey, options) => {
    //     if (
    //         (options.question.getType() == 'text' ||
    //             options.question.getType() == 'radiogroup') &&
    //         options.question.value == undefined
    //     ) {
    //         options.error = props.lang.response_required.de
    //     }
    // })

    survey.onValueChanged.add(() => {
        //survey.nextPage()
    })

    survey.onComplete.add(() => {
        setSurveyResult(survey.valuesHash)
        navigate(
            {
                pathname: '/vielen-dank',
            },
            {
                state: {
                    completed: true,
                },
            }
        )
    })

    survey.onGetQuestionTitle.add((survey, options) => {
        const titleList = JSON.parse(options.question.title)
        if (titleList.length > 1 && survey.getValue('question_3') == 6) {
            options.title = titleList[1]
        } else {
            options.title = titleList[0]
        }
    })

    survey.onAfterRenderQuestion.add(() => {
        if (survey.activePage.num > 1) {
            // only focus first question!
            survey.focusFirstQuestionAutomatic = false
        }
    })

    survey.showCompletedPage = false

    return (
        <>
            <div className="react-survey">
                <Survey.Survey model={survey} locale={'de'} />
                {/*<pre>{JSON.stringify(survey, null, 2)}</pre>*/}
            </div>
        </>
    )
}

export default PublicSurveyComponent
