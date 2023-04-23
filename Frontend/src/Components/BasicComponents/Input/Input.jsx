import { Checkbox } from 'primereact/checkbox'
import { uuid } from '../../../Services/Utils/Util'
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material'
import Select from '@mui/material/Select'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Switch from '@mui/material/Switch'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// @TODO(BasicComponents) @Sherif @Emre extend this to support more types
// @TODO(BasicComponents) form control

// remove primereact
export const Input = ({
    id = uuid(),
    name,
    label,
    helpLabel = undefined,
    value,
    onChange,
    handleFileUploadError,
    handleChange,
    checked,
    maxRows,
    minRows,
    placeholder,
    inputFileRef,
    children,
    defaultCountry = 'DE',
    type = 'text',
    className = '',
    style,
    values,
    labels,
    debounce,
    horizontal,
    error,
    isValid,
    onBlur,
    variant = 'outlined',
    ref,
    params,
    radioClassName = '',
    defaultValue,
    onKeyDown,
    InputProps,
    onKeyPress,
    endAdornment,
    labelStyle,
    ...props
}) => {
    function onValueChange(e) {
        if (onChange) {
            if (debounce) {
                setTimeout(() => {
                    onChange(e)
                }, debounce)
            } else {
                onChange(e)
            }
        }
    }

    /*
        const IOSSwitch = styled((props) => (
            <Switch inputProps={{ 'aria-label': 'controlled' }} focusVisibleClassName=".Mui-focusVisible"
                disableRipple {...props} />
        ))(({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff !important',
                    '& + .MuiSwitch-track': {
                        opacity: 1,
                        border: 0,
                        backgroundColor: colors.primary,

                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color:
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[600],
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
            },
            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
            },
        }));
        */

    /*
        const StyledSelect = styled((Select))(({ theme }) => ({
    
    
            '& .MuiSelect-select-root':
            {
                backgroundColor: colors.primary,
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                margin: "auto",
                border: `1px solid ${colors.gray}`,
                '&:focus': {
                    backgroundColor: colors.white,
                    color: colors.black,
                    borderRadius: 5,
                    padding: 10,
                    border: `1px solid ${colors.gray}`,
                },
            },
            '& .MuiSelect-select': {
    
                color: colors.black,
                borderRadius: 5,
                alignItems: 'center',
                width: '200px',
                maxWidth: '200px',
                justifyContent: 'center',
                direction: "column",
                padding: 10,
                border: `1px solid ${colors.gray}`,
                '&:focus': {
                    color: colors.black,
                    borderRadius: 5,
                    padding: 10,
                    border: `1px solid ${colors.gray}`,
                },
            },
    
            '& .MuiSelect-icon': {
                color: colors.black,
    
            },
            '& .MuiSelect-selectMenu': {
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                border: `1px solid ${colors.gray}`,
            },
            '& .MuiSelect-select:focus': {
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                border: `1px solid ${colors.gray}`,
            },
            '& .MuiSelect-selectMenu:focus': {
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                border: `1px solid ${colors.gray}`,
            },
            '& .MuiSelect-select:focus-visible': {
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                border: `1px solid ${colors.gray}`,
            },
            '& .MuiSelect-selectMenu:focus-visible': {
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                border: `1px solid ${colors.gray}`,
            },
            '& .MuiSelect-select:focus-visible .MuiSelect-icon': {
                color: colors.black,
            },
            '& .MuiSelect-selectMenu:focus-visible .MuiSelect-icon': {
                color: colors.black,
            },
            '& .MuiSelect-select:focus-visible .MuiSelect-selectMenu': {
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                border: `1px solid ${colors.gray}`,
            },
            '& .MuiSelect-selectMenu:focus-visible .MuiSelect-selectMenu': {
                color: colors.black,
                borderRadius: 5,
                padding: 10,
                border: `1px solid ${colors.gray}`,
            },
    
        }));
    
    
        const StyledTextField = styled((TextField))(({ theme }) => ({
            '& .MuiInputBase-root:before': {
                border: "1px solid #E0E6ED",
                padding: "0.75rem 1.25rem",
                height: "-webkit-calc(1.5em + 1.5rem + 2px)",
                height: "calc(1.5em + 1.5rem + 2px)",
                lineHeight: 1.5,
                alignItems: "center",
                display: "flex",
                width: "100%",
            },
            '& .MuiInputBase-root:after': {
                border: "none",
            },
            '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
                border: "none",
            },
            '& .MuiInputBase-root:hover:not(.Mui-disabled):after': {
                border: "none",
            },
            '& .MuiInputBase-root': {
                border: "1px solid #E0E6ED",
                padding: "0.75rem 1.25rem",
                display: "block",
                width: "100%",
                height: "-webkit-calc(1.5em + 1.5rem + 2px)",
                height: "calc(1.5em + 1.5rem + 2px)",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#3C4858",
                backgroundClip: "padding-box",
                
            },
            '& .MuiInputBase-root .MuiInputBase-input': {
                border: "none",
                padding: "0",
                backgroundClip: "padding-box",
            },
            '& .MuiInputBase-root .MuiInput-root:after': {
                border: "none",
            },
    
    
            
    
    
        }));
    */

    function input() {
        if (['text', 'email', 'password'].includes(type)) {
            return (
                <>
                    <TextField
                        id={id}
                        name={name}
                        className={className}
                        error={error}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={placeholder}
                        style={style}
                        label={label}
                        helperText={helpLabel}
                        variant={variant}
                        InputLabelProps={{ shrink: true }}
                        ref={ref}
                        type={type}
                        onKeyDown={onKeyDown}
                        sx={{ pt: 1, pb: 1 }}
                        {...props}
                    />
                </>
            )
        }

        if (type === 'chipInput') {
            return (
                <>
                    <TextField
                        id={id}
                        name={name}
                        className={className}
                        error={error}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={placeholder}
                        style={style}
                        label={label}
                        helperText={helpLabel}
                        variant={variant}
                        InputLabelProps={{ shrink: true }}
                        ref={ref}
                        type={type}
                        sx={{ pt: 1, pb: 1 }}
                        InputProps={{ endAdornment: endAdornment }}
                        onKeyPress={onKeyPress}
                        {...props}
                    />
                </>
            )
        }
        if (type === 'checkbox') {
            return (
                <>
                    <Checkbox
                        id={id}
                        name={name}
                        className={className}
                        checked={checked}
                        onChange={onValueChange}
                        value={value === undefined ? '' : value}
                        placeholder={placeholder}
                        style={style}
                        label={label}
                        helperText={helpLabel}
                        InputLabelProps={{ shrink: true }}
                        type={type}
                        ref={ref}
                        {...props}
                    />
                </>
            )
        }
        if (type === 'radio') {
            return (
                <>
                    <FormControl component="fieldset" className={className}>
                        {label && (
                            <FormLabel component="legend">{label}</FormLabel>
                        )}
                        <RadioGroup
                            className={
                                (horizontal ? 'd-flex flex-row ' : '') +
                                radioClassName
                            }
                            name={name}
                            value={value}
                            onChange={onValueChange}>
                            {(values || []).map((radioValue, index) => {
                                return (
                                    <FormControlLabel
                                        value={radioValue}
                                        control={
                                            <Radio
                                                checked={radioValue === value}
                                            />
                                        }
                                        style={labelStyle}
                                        label={labels ? labels[index] : null}
                                    />
                                )
                            })}
                        </RadioGroup>
                    </FormControl>
                </>
            )
        }
        if (type === 'file') {
            return (
                <>
                    <input
                        ref={inputFileRef}
                        accept="image/*"
                        hidden
                        id={id}
                        type="file"
                        onChange={handleChange}
                        {...props}
                    />
                </>
            )
        }
        if (type === 'textarea') {
            return (
                <>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder={placeholder}
                        className={className}
                        style={style}
                        maxRows={maxRows}
                        minRows={minRows}
                        ref={ref}
                        onChange={onChange}
                        value={value}
                        {...props}
                    />
                </>
            )
        }

        if (type === 'select') {
            return (
                <>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        defaultValue={defaultValue}
                        label={label}
                        onChange={onChange}
                        style={style}
                        className={className}
                        IconComponent={ExpandMoreIcon}
                        {...props}>
                        {children}
                    </Select>
                </>
            )
        }

        if (type === 'phone-number') {
            return (
                <>
                    {/* TODO @Emre Why did you change this from type="tel"? Please talk to @Sherif about it, if this is right. */}
                    <input
                        type="text"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        value={value}
                        onChange={onChange}
                        className={className}
                        style={style}
                        placeholder={placeholder}
                        {...props}
                    />
                </>
            )
        }
        if (type === 'switch') {
            return (
                <>
                    <FormControlLabel
                        control={
                            <Switch
                                sx={{ mt: 1.2 }}
                                checked={checked}
                                onChange={onChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                                focusVisibleClassName=".Mui-focusVisible"
                                {...props}
                            />
                        }
                        label={label}
                    />
                </>
            )
        }

        if (type === 'date') {
            return (
                <>
                    <input
                        type="date"
                        value={value}
                        onChange={onChange}
                        className={className}
                        style={style}
                        {...props}
                    />
                </>
            )

            // TODO @Emre Was the DatePicker already working?
            // This is the code from the Material UI docs, but it doesn't work. So I did it with the input type="date" for now.
            /*
            return (<>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={() => alert('on change')}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </>);
            */
        }
    }

    return <>{input()}</>
}

export default Input
