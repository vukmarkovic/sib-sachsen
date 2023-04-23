import React from 'react'

const CardTitle = ({ children, className = '', style, ...props }) => {
    return (
        <>
            <h5 style={{ textAlign: 'start', ...style }} className={className}>
                {children}
            </h5>
        </>
    )
}
export default CardTitle
