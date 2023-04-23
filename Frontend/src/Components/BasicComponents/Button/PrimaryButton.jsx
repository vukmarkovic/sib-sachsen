import React from 'react'
import Button from './Button'

export function PrimaryButton({ ...props }) {
    return (
        <Button
            style={{ borderRadius: '20px', fontWeight: '600' }}
            color={'secondary'}
            className={'btn-sm rounded-pill'}
            {...props}
        />
    )
}
