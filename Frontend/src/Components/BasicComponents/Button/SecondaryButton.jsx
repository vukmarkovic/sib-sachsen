import React from 'react'
import Button from './Button'

export function SecondaryButton({ ...props }) {
    return (
        <Button
            style={{ borderRadius: '20px', fontWeight: '600' }}
            variant={'outlined'}
            color={'secondary'}
            {...props}
        />
    )
}
