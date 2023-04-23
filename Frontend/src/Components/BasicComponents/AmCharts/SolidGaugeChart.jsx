import React, { useRef, useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5radar from '@amcharts/amcharts5/radar'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { uuid } from '../../../Services/Utils/Util'

export const SolidGaugeChart = ({ option, data }) => {
    const chartRef = useRef(null)
    const divId = uuid()

    useLayoutEffect(() => {
        let root = am5.Root.new(divId)

        root.setThemes([am5themes_Animated.new(root)])

        let chart = root.container.children.push(
            am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                wheelX: 'panX',
                wheelY: 'zoomX',
                innerRadius: am5.percent(20),
                startAngle: -90,
                endAngle: 180,
            })
        )

        const chartData = [...data]

        chartData.forEach((item, index) => {
            item.columnSettings = {}
            item.columnSettings.fill = chart.get('colors').getIndex(index)
        })

        let cursor = chart.set(
            'cursor',
            am5radar.RadarCursor.new(root, {
                behavior: 'zoomX',
            })
        )

        cursor.lineY.set('visible', false)

        let xRenderer = am5radar.AxisRendererCircular.new(root, {
            //minGridDistance: 50
        })

        xRenderer.labels.template.setAll({
            radius: 10,
        })

        xRenderer.grid.template.setAll({
            forceHidden: true,
        })

        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: xRenderer,
                min: 0,
                max: 100,
                strictMinMax: true,
                numberFormat: "#'%'",
                tooltip: am5.Tooltip.new(root, {}),
            })
        )

        let yRenderer = am5radar.AxisRendererRadial.new(root, {
            minGridDistance: 20,
        })

        yRenderer.labels.template.setAll({
            centerX: am5.p100,
            fontWeight: '500',
            fontSize: 18,
            templateField: 'columnSettings',
        })

        yRenderer.grid.template.setAll({
            forceHidden: true,
        })

        let yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: 'category',
                renderer: yRenderer,
            })
        )

        yAxis.data.setAll(chartData)

        // Create series
        // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
        let series1 = chart.series.push(
            am5radar.RadarColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                clustered: false,
                valueXField: 'full',
                categoryYField: 'category',
                fill: root.interfaceColors.get('alternativeBackground'),
            })
        )

        series1.columns.template.setAll({
            width: am5.p100,
            fillOpacity: 0.08,
            strokeOpacity: 0,
            cornerRadius: 20,
        })

        series1.data.setAll(chartData)

        let series2 = chart.series.push(
            am5radar.RadarColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                clustered: false,
                valueXField: 'value',
                categoryYField: 'category',
            })
        )

        series2.columns.template.setAll({
            width: am5.p100,
            strokeOpacity: 0,
            tooltipText: '{category}: {valueX}%',
            cornerRadius: 20,
            templateField: 'columnSettings',
        })

        series2.data.setAll(chartData)

        // Animate chart and series in
        // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
        series1.appear(1000)
        series2.appear(1000)
        chart.appear(1000, 100)

        chartRef.current = chart

        return () => {
            root.dispose()
        }
    }, [])

    return (
        <div className="mb-5">
            <div id={divId} style={{ width: '100%', height: '500px' }}></div>
        </div>
    )
}
