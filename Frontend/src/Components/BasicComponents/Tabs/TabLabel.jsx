import React from 'react'
import { Tab } from '@mui/material'

export function TabLabel({ className = '', style, label, ...props }) {
    return (
        <>
            <Tab
                label={label}
                title={label}
                className={className}
                style={style}
                {...props}
            />
        </>
    )
}
