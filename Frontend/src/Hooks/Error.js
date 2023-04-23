import { useContext } from 'react'
import { ErrorContext } from '../Contexts/Error'

export const useError = () => useContext(ErrorContext)
