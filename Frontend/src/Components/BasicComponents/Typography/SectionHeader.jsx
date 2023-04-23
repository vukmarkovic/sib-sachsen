import React from 'react'

export function SectionHeader({ title, ...props }) {
    function bodyComponent() {
        if (!title) {
            return null
        }
        return (
            <h2 className={'mt-3'} {...props}>
                {title}
            </h2>
        )
    }

    return <>{bodyComponent()}</>
}
