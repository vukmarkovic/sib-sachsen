import { useDispatch, useSelector } from 'react-redux'
import {
    updateSurvey,
    fetchSurvey,
    resetResult,
} from '../../Redux/Slices/PublicSurveySlice'

export function usePublicSurvey() {
    const dispatch = useDispatch()

    const currentSurveyState = useSelector(state => {
        return state.publicSurvey
    })

    const setSurveyResult = result => {
        if (result) {
            dispatch(updateSurvey(result))
        }
    }

    const resetSurveyResult = () => {
        dispatch(resetResult())
    }

    const loadSurveyData = () => {
        dispatch(fetchSurvey())
    }

    return [
        currentSurveyState,
        setSurveyResult,
        loadSurveyData,
        resetSurveyResult,
    ]
}
