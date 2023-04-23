import React from 'react'

export function RelativeProgressBar({
    max = 100,
    min = 0,
    height = 8,
    values,
    renderEntry,
    className = '',
    leftLabel = '',
    rightLabel = '',
    correction = 0,
}) {
    function labelComponent(labelSide) {
        return labelSide === 'left' ? leftLabel : rightLabel
    }

    return (
        <div
            className={
                'd-flex flex-row align-items-center justify-content-between w-100 ' +
                className
            }>
            <div className={'mx-2'}>{labelComponent('left')}</div>
            <div
                className={'bg-gray-500 rounded w-100 flex-grow-1 mx-1'}
                style={{ position: 'relative', height: `${height}px` }}>
                {(values || []).map((singleValue, index) => {
                    const progress = Math.round(
                        ((singleValue.value - min) / (max - min)) * 100
                    )
                    return (
                        <div
                            className={'d-flex flex-row'}
                            style={{
                                position: 'absolute',
                                left: `calc(${progress}% - ${correction}px)`,
                                top: '-17.5px',
                                zIndex: 10,
                            }}>
                            {renderEntry && renderEntry(singleValue)}
                        </div>
                    )
                })}
            </div>
            <div className={'mx-2'}>{labelComponent('right')}</div>
        </div>
    )
}
