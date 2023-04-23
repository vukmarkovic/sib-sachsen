import React from 'react'

const CardHeader = ({ children, className = '', style, title, ...props }) => {
    function titleComponent() {
        if (!title) {
            return null
        }
        return (
            <>
                <h5 className="mb-0">{title}</h5>
            </>
        )
    }

    return (
        <>
            <div className={'card-header ' + className} style={style}>
                <div className="d-flex justify-content-between">
                    {titleComponent()}

                    <div>{children}</div>
                </div>
            </div>

            <span className="clearfix"></span>
        </>
    )
}
export default CardHeader
