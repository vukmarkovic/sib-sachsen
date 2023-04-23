import { jsonData } from '../../public_survey_feed/questions'
import { fakeGPTResponse } from '../../public_survey_feed/fakeGPTResponse'
import { getCountForEveryWords } from './StrUtil'

export function generateSortedBarChartData(surveyResult, questionKey) {
    let questionData = {}

    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i]['key'] == questionKey) {
            questionData = jsonData[i]
            break
        }
    }

    const optionsData = []

    questionData.choices.forEach(item => {
        optionsData[item.value] = {
            count: 0,
            name: item.text.de,
        }
    })

    surveyResult.forEach(item => {
        if (optionsData[item[questionKey]]) {
            optionsData[item[questionKey]].count++
        } else {
            // debugger
        }
    })

    let graphSeedData = []
    for (const [key, value] of Object.entries(optionsData)) {
        graphSeedData.push({ year: value.name, value: value.count })
    }

    return graphSeedData
}

export function generateWordCloudChartData(surveyResult, questionKey) {
    let str = ''
    surveyResult.forEach(item => {
        str += item[questionKey] + ' '
    })

    const result = getCountForEveryWords(str.slice(0, -1))

    let graphSeedData = []
    for (const [key, value] of Object.entries(result)) {
        // TODO @Stefan use ratingColor (positive, neutral, negative) instead of randomColor
        const randomColor =
            '#' + Math.floor(Math.random() * 16777215).toString(16)
        graphSeedData.push({ tag: key, weight: value, color: randomColor })
    }

    return graphSeedData
}

export function generateWordCloudChartDataGPT(segSentenses) {
    // const inpData = segSentenses
    const inpData = fakeGPTResponse
    let resData = []

    inpData.choices.forEach(item => {
        let content = item.message?.content.replace(/(\r\n|\n|\r)/gm, '')
        let parsedJson = JSON.parse(content)
        resData.push(parsedJson)
    })
}

export function generateSnackedBarChartNegativeData(
    surveyResult,
    questionKeys
) {
    let questionArray = []

    questionKeys.forEach(questionKey => {
        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i]['key'] == questionKey) {
                questionArray.push(jsonData[i])
                break
            }
        }
    })

    const resultArray = []
    questionArray.forEach(questionData => {
        const category = questionData.question.de
        let jaCount = 0
        let neinCount = 0
        surveyResult.forEach(item => {
            if (item[questionData['key']] == 1) jaCount++
            else neinCount--
        })

        resultArray.push({ category: category, ja: jaCount, nein: neinCount })
    })

    return resultArray
}

export function generateCarbonZeroProgressChartData(surveyResult, questionKey) {
    let questionData = {}

    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i]['key'] == questionKey) {
            questionData = jsonData[i]
            break
        }
    }

    const optionsData = []

    questionData.choices.forEach(item => {
        optionsData[item.value] = {
            count: 0,
            name: item.text.de,
        }
    })

    surveyResult.forEach(item => {
        optionsData[item[questionKey]]['count']++
    })

    let sum = 0
    let countSum = 0
    for (const [key, value] of Object.entries(optionsData)) {
        sum += key * value.count
        countSum += value.count
    }

    return (sum / countSum).toFixed(1)
}

export function generateSnackedBarChartData(surveyResult, questionKeys) {
    let questionArray = []

    questionKeys.forEach(questionKey => {
        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i]['key'] == questionKey) {
                questionArray.push(jsonData[i])
                break
            }
        }
    })

    const resultArray = []
    questionArray.forEach(questionData => {
        const countObj = {
            question_key: questionData['key'],
            question: questionData['question']['de'],
            level_1: 0,
            level_2: 0,
            level_3: 0,
            level_4: 0,
            level_5: 0,
            // level_6: 0,
        }

        surveyResult.forEach(item => {
            // if(item[questionData['key']] == 1) jaCount++
            // else neinCount--
            if (item[questionData['key']] == 1) countObj['level_1']++
            else if (item[questionData['key']] == 2) countObj['level_2']++
            else if (item[questionData['key']] == 3) countObj['level_3']++
            else if (item[questionData['key']] == 4) countObj['level_4']++
            else if (item[questionData['key']] == 5) countObj['level_5']++
            // else if (item[questionData['key']] == 6) countObj['level_6']++
        })

        const totalCount =
            countObj['level_1'] +
            countObj['level_2'] +
            countObj['level_3'] +
            countObj['level_4'] +
            countObj['level_5']
        // countObj['level_6']
        // console.log('totalcount', totalCount)
        // countObj['level_1'] =
        //     (countObj['level_1'] / totalCount).toFixed(3) * 100
        // countObj['level_2'] =
        //     (countObj['level_2'] / totalCount).toFixed(3) * 100
        // countObj['level_3'] =
        //     (countObj['level_3'] / totalCount).toFixed(3) * 100
        // countObj['level_4'] =
        //     (countObj['level_4'] / totalCount).toFixed(3) * 100
        // countObj['level_5'] =
        //     (countObj['level_5'] / totalCount).toFixed(3) * 100
        // countObj['level_6'] =
        //     (countObj['level_6'] / totalCount).toFixed(3) * 100
        countObj['totalCount'] = totalCount

        resultArray.push(countObj)
    })

    return resultArray
}
