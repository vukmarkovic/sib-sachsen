import React from 'react'

const CardBody = ({ children, className = '', style, ...props }) => {
    return (
        <>
            <div style={style} className={'card-body ' + className}>
                {children}
            </div>
        </>
    )
}
export default CardBody
