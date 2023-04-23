import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'

export function Textarea({
    label,
    name,
    placeholder,
    className,
    cols,
    rows,
    value,
    onChange,
    props,
}) {
    function body() {
        return (
            <>
                <TextareaAutosize
                    placeholder={placeholder}
                    name={name}
                    className={'form-control' + (className || '')}
                    cols={cols}
                    minRows={rows}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            </>
        )
    }

    return <>{body()}</>
}
