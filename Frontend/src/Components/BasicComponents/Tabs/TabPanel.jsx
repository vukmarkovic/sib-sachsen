import React from 'react'

export function TabPanel({
    children,
    className = '',
    style,
    value,
    index,
    ...props
}) {
    return (
        <>
            <div
                id={index}
                role={'tabpanel'}
                hidden={value !== index}
                className={className}
                value={value}>
                {children}
            </div>
        </>
    )
}
