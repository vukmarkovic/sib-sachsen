import React from 'react'
import MuiTypography from '@mui/material/Typography'

const Typography = ({
    children,
    className,
    variant,
    color,
    align,
    style,

    ...props
}) => {
    function body() {
        return (
            <>
                <MuiTypography
                    className={className}
                    variant={variant}
                    color={color}
                    align={align}
                    style={style}
                    {...props}>
                    {children}
                </MuiTypography>
            </>
        )
    }

    return <>{body()}</>
}
export default Typography
