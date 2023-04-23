import React from 'react'
import ExternalTooltip from '@mui/material/Tooltip'

export function Tooltip({ title, children, placement, ...props }) {
    return (
        <ExternalTooltip title={title} placement={placement} {...props}>
            {children}
        </ExternalTooltip>
    )
}
