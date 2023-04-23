import React from 'react'
import InnerHTML from 'dangerously-set-html-content'

export function AppInnerHTML({
    html,
    id,
    onClick,
    onFormSubmit,
    className,
    ...props
}) {
    function body() {
        if (!html) {
            return null
        }
        return (
            <InnerHTML
                className={className}
                id={id}
                onSubmit={onFormSubmit}
                onClick={onClick}
                html={html}
                {...props}
            />
        )
    }

    return <>{body()}</>
}
