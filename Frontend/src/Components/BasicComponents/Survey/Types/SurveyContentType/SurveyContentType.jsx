import React from 'react'
import Card from '../../../Card/Card'
import { createContentGroup } from '../../../../../Services/Utils/SurveyUtil'
import { SurveyAudioContent } from './SurveyAudioContent'
import { SurveyQuoteContent } from './SurveyQuoteContent'
import { SurveyBlockContent } from './SurveyBlockContent'
import { SurveyImageContent } from './SurveyImageContent'
import { SurveyVideoContent } from './SurveyVideoContent'
import { SurveyTestimonialContent } from './SurveyTestimonialContent'

export function SurveyContentType({
    question,
    onValueChosen,
    answers,
    parseQuestion,
}) {
    function getContentGroups() {
        const contentGroups = createContentGroup(question)

        return contentGroups.map((contentGroup, index) => {
            switch (contentGroup.type) {
                case 'audio':
                    return (
                        <SurveyAudioContent
                            key={index}
                            contentGroup={contentGroup}
                        />
                    )
                case 'quote':
                    return (
                        <SurveyQuoteContent
                            key={index}
                            contentGroup={contentGroup}
                        />
                    )
                case 'block':
                    return (
                        <SurveyBlockContent
                            key={index}
                            contentGroup={contentGroup}
                        />
                    )
                case 'image':
                    return (
                        <SurveyImageContent
                            key={index}
                            contentGroup={contentGroup}
                        />
                    )
                case 'video':
                    return (
                        <SurveyVideoContent
                            key={index}
                            contentGroup={contentGroup}
                        />
                    )
                case 'testimonial':
                    return (
                        <SurveyTestimonialContent
                            key={index}
                            contentGroup={contentGroup}
                        />
                    )
            }
        })
    }

    function body() {
        return (
            <>
                <div>
                    <Card className={'d-flex flex-column'}>
                        {getContentGroups()}
                    </Card>
                </div>
            </>
        )
    }

    return <>{body()}</>
}
