import React from 'react'
import Card from './Card'

export function ImageCard({
    actions,
    title,
    description,
    imageSrc,
    imageAlt = 'Oops!',
    imageStyle = {},
    imageClassName = '',
    ...props
}) {
    function imageComponent() {
        if (!imageSrc) {
            return null
        }
        return (
            <img
                alt={imageAlt}
                src={imageSrc}
                className={'svg-inject img-fluid ' + imageClassName}
                style={{ height: '150px', width: '300px', ...imageStyle }}
            />
        )
    }

    function actionsComponent() {
        if (!actions) {
            return null
        }
        return (
            <div className={'d-flex flex-row justify-content-end mt-1'}>
                {actions}
            </div>
        )
    }

    function mainComponent() {
        return (
            <div className={'d-flex flex-row'}>
                {imageComponent()}
                <div>
                    <h2 className="mb-4">{title}</h2>
                    <p className="mb-0 whitespace-pre-wrap">{description}</p>
                </div>
            </div>
        )
    }

    function body() {
        return (
            <>
                {mainComponent()}
                {actionsComponent()}
            </>
        )
    }

    return (
        <Card className={'d-flex flex-column align-content-center'}>
            {body()}
        </Card>
    )
}
