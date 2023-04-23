import React from 'react'
import { Popover, Typography } from '@mui/material'
import { PopoverTitle } from '@themesberg/react-bootstrap'
import { PopoverBody } from 'react-bootstrap'

export function WayOfWorkingPolesModal({ show, setShow, title, message }) {
    return (
        <Popover
            onClose={() => setShow(false)}
            open={show}
            PaperProps={{
                style: { width: '500px', height: '200px' },
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}>
            <PopoverTitle>{title}</PopoverTitle>

            <PopoverBody>
                <Typography>{message}</Typography>
            </PopoverBody>
        </Popover>
    )
}
