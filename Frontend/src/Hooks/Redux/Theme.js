import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../Redux/Slices/ThemeSlice'

export function useTheme() {
    const theme = useSelector((state) => state.theme.currentTheme)

    const dispatch = useDispatch()

    const onChangeTheme = (theme) => {
        dispatch(setTheme(theme))
    }

    return [theme, onChangeTheme]
}
