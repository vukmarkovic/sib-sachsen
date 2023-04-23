import React from 'react'

const CardFooter = ({ children, className = '', style, title, ...props }) => {
    return (
        <>
            <div className={'card-footer px-md-5 ' + className} style={style}>
                {children}
            </div>
        </>
    )
}
export default CardFooter
