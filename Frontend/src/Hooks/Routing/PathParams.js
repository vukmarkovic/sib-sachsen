import React from 'react'
import { useParams } from 'react-router-dom'

/**
 * Wrapper for useParams
 * @returns {Readonly<Params<string>>}
 */
export function usePathParams() {
    return useParams()
}
