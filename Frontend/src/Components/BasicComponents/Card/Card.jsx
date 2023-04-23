import React from 'react'

const Card = ({ children, className = '', style, ...props }) => {
    const classes = [
        'card',
        'animate__animated',
        'animate__fadeIn',
        'shadow',
        'p-4',
        className.includes('mb-') ? '' : 'mb-5',
        className,
    ]

    return (
        <>
            <div className={classes.join(' ')} style={style} {...props}>
                {children}
            </div>
        </>
    )
}

export default Card
