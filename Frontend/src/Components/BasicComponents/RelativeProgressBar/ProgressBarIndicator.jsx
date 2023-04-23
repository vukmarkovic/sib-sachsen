import React from 'react'
import { Tooltip } from '../Tooltip/Tooltip'

export function ProgressBarIndicator({
    height = 50,
    width = 10,
    progress = 0,
    backgroundColor = 'green',
    style = {},
    onClick = (id) => {},
    id,
    children,
    tooltip,
    ...props
}) {
    function indicatorComponent() {
        return (
            <div className={'d-flex flex-column align-items-start'}>
                <div
                    style={{
                        height: `${height}px`,
                        width: `${width}px`,
                        borderRadius: '20px',
                        backgroundColor: backgroundColor,
                        cursor: 'pointer',
                    }}
                    onClick={() => onClick(id)}>
                    &nbsp;
                </div>
                {children && children}
            </div>
        )
    }

    function body() {
        if (tooltip) {
            return (
                <Tooltip title={tooltip} placement={'top'}>
                    {indicatorComponent()}
                </Tooltip>
            )
        }

        return indicatorComponent()
    }

    return <>{body()}</>
}
