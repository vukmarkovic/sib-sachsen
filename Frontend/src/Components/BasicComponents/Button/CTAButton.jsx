import React from 'react'
import Button from './Button'

export function CTAButton({ ...props }) {
    return (
        <Button
            style={{ borderRadius: '20px', fontWeight: '600' }}
            color={'primary'}
            {...props}
        />
    )
}
