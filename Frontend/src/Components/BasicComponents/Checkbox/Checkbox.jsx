import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import { colors } from '../../../Config/Colors'

const SFCheckbox = ({
    label,
    onClick,
    tooltip,
    tooltipPlacement,
    tooltipDisabled,
    toolTipShowOnDisabled,
    icon,
    type = 'button',
    className,
    style,
    children,
    onChange,
    checked,
    ...props
}) => {
    function onInputChanged(value) {
        if (onChange) {
            onChange(value)
        }
    }

    function onInputClicked(value) {
        if (onClick) {
            onClick(value)
        }
    }

    const CheckBoxStyled = styled(Checkbox)({
        '&.Mui-checked': {
            color: colors.primary,
        },
        '&.MuiIconButton-colorPrimary': {
            color: colors.primary,
        },
        'backgroundColor': colors.white,
        'color': colors.primary,
        '&:hover': {
            backgroundColor: colors.white,
            color: colors.primary,
        },
        '&.Mui-disabled': {
            backgroundColor: colors.white,
            color: colors.primary,
        },
        '&.Mui-disabled:hover': {
            backgroundColor: colors.white,
            color: colors.primary,
        },
    })

    function body() {
        return (
            <>
                <div
                    className={
                        'd-flex w-100 ' +
                        (label || children ? 'justify-content-between ' : '') +
                        (className || '')
                    }>
                    {label && (
                        <div>
                            <h6 className="mb-1">{label}</h6>
                            <span className="text-sm text-muted">
                                {children}
                            </span>
                        </div>
                    )}
                    {!label && (
                        <div>
                            <span className="text-sm text-muted">
                                {children}
                            </span>
                        </div>
                    )}

                    <div>
                        <CheckBoxStyled
                            id={props.id}
                            type="checkbox"
                            // className={"custom-control-input"}
                            name={props.name}
                            onChange={(e) => onInputChanged(e)}
                            onClick={(e) => onInputClicked(!checked)}
                            checked={checked}
                            {...props}
                        />
                    </div>
                </div>
            </>
        )
    }

    return <>{body()}</>
}
export default SFCheckbox
