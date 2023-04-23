import React from 'react'
import { SectionHeader } from '../Typography/SectionHeader'
import Card from './Card'
import CardTitle from './CardTitle'
import { SubSectionHeader } from '../Typography/SubSectionHeader'
import { logger } from '../../../Services/Utils/LoggerUtil'

export function SectionCard({ sectionHeader, title, subSection, body }) {
    logger.debug({ sectionHeader, title, subSection, body })

    function sectionHeaderComponent() {
        if (subSection) {
            return <SubSectionHeader title={sectionHeader} />
        }
        return <SectionHeader title={sectionHeader} />
    }

    function titleComponent() {
        if (!title) {
            return null
        }

        return (
            <>
                <CardTitle>{title}</CardTitle>
            </>
        )
    }

    function bodyComponent() {
        if (!body) {
            return null
        }
        return <p>{body}</p>
    }

    return (
        <>
            {sectionHeaderComponent()}

            <Card>
                {titleComponent()}

                {bodyComponent()}
            </Card>
        </>
    )
}
