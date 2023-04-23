import { createSlice } from '@reduxjs/toolkit'
import { logger } from '../../Services/Utils/LoggerUtil'
import {
    generateSortedBarChartData,
    generateWordCloudChartData,
    generateSnackedBarChartNegativeData,
    generateCarbonZeroProgressChartData,
    generateSnackedBarChartData,
} from '../../Services/Utils/AmChartDataUtil'
import { getSurvey, submitSurvey } from '../../Api/Services/SurveyAPIService'

const initialState = {
    result: [],
    graphData: {
        question2: [],
        question3: [],
        question4: [],
        question5: [],
        question6b: [],
        question8: [],
        question10: [],
        question16: [],
        question17: [],
        question35: [],
        question35a: [],
        question35b: [],
        question36: [],
        question37: [],
        question38: [],
        question39: 0,
        question40: [],
    },
    groupGraphData: {
        vergutung: [],
        karrieremöglichkeiten: [],
        sicherheit: [],
        führungsverhalten: [],
    },
}

const PublicSurveySlice = createSlice({
    name: 'publicsurvey',
    initialState: initialState,
    reducers: {
        setResult(state = initialState, action) {
            state.result = []
            const currentResultData = []

            action.payload.forEach(item => {
                state.result.push({ data: item.data, time: item.time })
                currentResultData.push(item.data)
            })

            // Allgemein
            state.graphData.question2 = generateSortedBarChartData(
                currentResultData,
                'question_2'
            )
            state.graphData.question3 = generateSortedBarChartData(
                currentResultData,
                'question_3'
            )
            state.graphData.question4 = generateWordCloudChartData(
                currentResultData,
                'question_4'
            )
            state.graphData.question5 = generateWordCloudChartData(
                currentResultData,
                'question_5'
            )

            // Vergütung
            state.groupGraphData.vergutung =
                generateSnackedBarChartNegativeData(currentResultData, [
                    'question_6',
                    'question_7',
                    'question_9',
                    'question_6a',
                ])
            state.graphData.question6b = generateWordCloudChartData(
                currentResultData,
                'question_6b'
            )
            state.graphData.question8 = generateSortedBarChartData(
                currentResultData,
                'question_8'
            )
            state.graphData.question10 = generateWordCloudChartData(
                currentResultData,
                'question_10'
            )

            // Karrieremöglichkeiten
            state.groupGraphData.karrieremöglichkeiten =
                generateSnackedBarChartData(currentResultData, [
                    'question_11',
                    'question_12',
                    'question_13',
                    'question_14',
                    'question_15',
                ])
            state.graphData.question16 = generateSnackedBarChartNegativeData(
                currentResultData,
                ['question_16']
            )
            state.graphData.question17 = generateSnackedBarChartNegativeData(
                currentResultData,
                ['question_17']
            )

            // Sicherheit
            state.groupGraphData.sicherheit = generateSnackedBarChartData(
                currentResultData,
                [
                    'question_18',
                    'question_19',
                    'question_20',
                    'question_21',
                    'question_22',
                    'question_23',
                ]
            )

            // Führungsverhalten
            state.groupGraphData.führungsverhalten =
                generateSnackedBarChartData(currentResultData, [
                    'question_24',
                    'question_25',
                    'question_26',
                    'question_27',
                    'question_28',
                    'question_29',
                ])

            // Arbeitsbedingungen
            state.groupGraphData.arbeitsbedingungen =
                generateSnackedBarChartData(currentResultData, [
                    'question_30',
                    'question_31',
                    'question_31a',
                    'question_31b',
                    'question_32',
                    'question_33',
                    'question_34',
                ])
            state.graphData.question35 = generateSnackedBarChartNegativeData(
                currentResultData,
                ['question_35']
            )
            state.graphData.question35a = generateSnackedBarChartNegativeData(
                currentResultData,
                ['question_35a']
            )
            state.graphData.question35b = generateSnackedBarChartNegativeData(
                currentResultData,
                ['question_35b']
            )
            state.graphData.question36 = generateSnackedBarChartNegativeData(
                currentResultData,
                ['question_36']
            )
            state.graphData.question37 = generateWordCloudChartData(
                currentResultData,
                'question_37'
            )

            // Abschluss
            state.graphData.question38 = generateWordCloudChartData(
                currentResultData,
                'question_38'
            )
            state.graphData.question39 = generateCarbonZeroProgressChartData(
                currentResultData,
                'question_39'
            )
            state.graphData.question40 = generateWordCloudChartData(
                currentResultData,
                'question_40'
            )

            // dispatch(
            //     GPTRequest(
            //         state.graphData.question6b,
            //         currentResultData,
            //         'question_6b'
            //     )
            // )
            // dispatch(
            //     GPTRequest(
            //         state.graphData.question10,
            //         currentResultData,
            //         'question_10'
            //     )
            // )
            // dispatch(
            //     GPTRequest(
            //         state.graphData.question37,
            //         currentResultData,
            //         'question_37'
            //     )
            // )
            // dispatch(
            //     GPTRequest(
            //         state.graphData.question38,
            //         currentResultData,
            //         'question_38'
            //     )
            // )
            // dispatch(
            //     GPTRequest(
            //         state.graphData.question40,
            //         currentResultData,
            //         'question_40'
            //     )
            // )
        },
        setWordCloudData(state = initialState, resultData, action) {
            state = resultData
        },
        resetResult(state = initialState, action) {
            state = initialState
        },
    },
})

export const { setResult, resetResult, setWordCloudData } =
    PublicSurveySlice.actions
export default PublicSurveySlice.reducer

export function updateSurvey(surveyData) {
    return async dispatch => {
        try {
            const response = await submitSurvey(surveyData)
            if (response?.data?.newSurvey && response.status === 201) {
                dispatch(fetchSurvey())
                logger.info('[PublicSurveySlice] Inserting survey data.')
            }
        } catch (e) {
            logger.debug('[PublicSurveySlice] Cannot update survey data', e)
        }
    }
}

export function fetchSurvey() {
    return async dispatch => {
        try {
            const response = await getSurvey()
            if (response?.data?.surveyData && response.status === 200) {
                dispatch(setResult(response.data.surveyData))
                logger.info('[PublicSurveySlice] Fetching survey.')
            }
        } catch (e) {
            logger.debug('[PublicSurveySlice] Cannot fetch survey data', e)
        }
    }
}

export function GPTRequest(state, surveyResult, questionKey) {
    let str = ''
    surveyResult.forEach(item => {
        str += item[questionKey] + ' '
    })

    const requestJson = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: str,
            },
        ],
    }
    return async dispatch => {
        return new Promise(resolve => {
            axios
                .post('https://api.openai.com/v1/chat/completions', {
                    requestJson,
                })
                .then(response => {
                    generateWordCloudChartDataGPT(response)
                    dispatch(setWordCloudData(state, resultArr))
                    resolve({ success: 'success' })
                })
                .catch(e => {
                    console.log(e)
                    resolve()
                })
        })
    }
}
