import React from 'react'

export function Link({
    children,
    className = '',
    style,
    disabled,
    title,
    to,
    anchor,
    target,
    ...props
}) {
    function body() {
        if (disabled) {
            return <> {children} </>
        }

        return (
            <>
                <a
                    href={to + anchor ? anchor : ''}
                    target={target}
                    className={className}
                    style={{ ...style }}
                    {...props}>
                    {children || title}
                </a>
            </>
        )
    }

    return <>{body()}</>
}
