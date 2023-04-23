import * as React from 'react'
import MuiButton from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { Link } from '../Link/Link'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors } from '../../../Config/Colors'
import { getContrastText } from '../../../Services/Utils/Util'

// TODO @Emre (Low) Changed to Mui / Talk to Sherif before because of PrimaryButton etc.
const SFButton = ({
    label,
    href,
    onClick,
    tooltip,
    placement,
    showOnDisabled,
    type = 'button',
    className,
    variant = 'contained',
    style,
    children,
    onChange,
    title,
    asLink = false,
    link,
    disabled = false,
    icon,
    color = 'secondary',
    startIcon,
    endIcon,
    ...props
}) => {
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const IconButtonStyled = styled(IconButton)(({ theme }) => {
        return {
            'color':
                variant === 'outlined' ? theme.palette[color]?.main : 'white',
            'fontSize': '1rem',
            '&:hover': {
                backgroundColor: theme.palette[color]?.dark,
            },
            'textTransform': 'none',
            'boxShadow': 'none',
            'backgroundColor':
                variant === 'outlined' ? '#FFFFFF' : theme.palette[color]?.main,
            'border':
                variant === 'outlined'
                    ? `1px solid ${theme.palette[color]?.main}`
                    : 'none',
        }
    })

    const TooltipStyled = styled(Tooltip)(({ theme }) => ({
        'color': colors.white,
        'fontSize': 12,
        'backgroundColor': theme.palette.secondary.main,
        '&:hover': {
            color: colors.white,
        },
    }))

    const Button = styled(MuiButton)(({ theme }) => {
        return {
            'boxShadow': 'none',
            'textTransform': 'none',
            '&:hover': {
                backgroundColor: theme.palette[color]?.dark,
                color: getContrastText(theme.palette[color].dark),
            },

            '&:disabled': {
                backgroundColor:
                    variant === 'outlined'
                        ? 'inherit'
                        : theme.palette[color]?.main,
                color: variant === 'outlined' ? 'inherit' : 'white',
                opacity: 0.5,
            },
        }
    })

    function body() {
        if (asLink) {
            return (
                <>
                    <Link
                        title={title}
                        style={{ cursor: 'pointer', ...style }}
                        href={link}
                        onClick={onClick}
                        {...props}>
                        {children}
                    </Link>
                </>
            )
        }

        if (type === 'button' || type === 'submit') {
            return (
                <Button
                    startIcon={startIcon}
                    endIcon={endIcon}
                    disabled={disabled}
                    variant={variant}
                    href={href}
                    type={type}
                    className={className}
                    onClick={onClick}
                    style={style}
                    {...props}
                    title={title}
                    color={color}>
                    {children || title}
                </Button>
            )
        }

        if (type === 'icon') {
            return (
                <Tooltip title={tooltip} placement={placement}>
                    {variant == 'text' ? (
                        <Button
                            startIcon={startIcon}
                            endIcon={endIcon}
                            disabled={disabled}
                            variant={variant}
                            href={href}
                            type={type}
                            className={className}
                            onClick={onClick}
                            style={style}
                            {...props}
                            title={title}
                            color={color}>
                            {icon}
                        </Button>
                    ) : (
                        <IconButtonStyled
                            onClick={onClick}
                            title={title}
                            style={style}
                            className={className}
                            variant={variant}
                            disabled={disabled}
                            color={color}
                            {...props}>
                            <span className="px-2">
                                {icon}
                                <span className="pl-1">
                                    {children || title}
                                </span>
                            </span>
                        </IconButtonStyled>
                    )}
                </Tooltip>
            )
        }

        if (type === 'tooltip') {
            return (
                <TooltipStyled
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    title={tooltip}
                    placement={placement}>
                    {children}
                </TooltipStyled>
            )
        }
        /*
        if (type === 'radio') {
            return (
                <div className={'field-radiobutton'}>
                    <RadioButton

                        type={type}
                        className={className}
                        icon={icon}
                        tooltip={tooltip}
                        tooltipOptions={{
                            showOnDisabled: toolTipShowOnDisabled,
                            position: tooltipPlacement,
                            disabled: Boolean(tooltipDisabled)
                        }}
                        onClick={onClick}
                        style={style}
                        onChange={onChange}
                        {...props}
                    >

                    </RadioButton>
                    <label className="p-2" htmlFor={props.id}>{label}</label>
                </div>
            )
        }*/
    }

    return <>{body()}</>
}
export default SFButton
