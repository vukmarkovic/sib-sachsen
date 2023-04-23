import React, { useRef, useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5wc from '@amcharts/amcharts5/wc'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { uuid } from '../../../Services/Utils/Util'

export const WordCloudChart = ({ option, data }) => {
    const chartRef = useRef(null)
    const divId = uuid()

    useLayoutEffect(() => {
        let root = am5.Root.new(divId)

        root.setThemes([am5themes_Animated.new(root)])

        // Add series
        // https://www.amcharts.com/docs/v5/charts/word-cloud/
        let series = root.container.children.push(
            am5wc.WordCloud.new(root, {
                categoryField: 'tag',
                valueField: 'weight',
                fillField: 'color',
                maxFontSize: am5.percent(30),
            })
        )

        // Configure labels
        series.labels.template.setAll({
            fontFamily: 'Courier New',
        })

        // Data from:
        // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
        series.data.setAll(data)
    }, [])

    return (
        <div className="mb-5">
            <div id={divId} style={{ width: '100%', height: '500px' }}></div>
        </div>
    )
}
