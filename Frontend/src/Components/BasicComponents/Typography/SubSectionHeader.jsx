import React from 'react'

export function SubSectionHeader({ title, ...props }) {
    function bodyComponent() {
        if (!title) {
            return null
        }
        return (
            <h3 className={''} {...props}>
                {title}
            </h3>
        )
    }

    return <>{bodyComponent()}</>
}
