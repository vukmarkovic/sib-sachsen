import React, { useRef, useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { uuid } from '../../../Services/Utils/Util'

export const SnackedBarChart = ({ option, data, isNegative, height = 500 }) => {
    const chartRef = useRef(null)
    const divId = uuid()

    useLayoutEffect(() => {
        let root

        if (isNegative) {
            root = am5.Root.new(divId)
            root.setThemes([am5themes_Animated.new(root)])

            let chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: 'panX',
                    wheelY: 'zoomX',
                    layout: root.verticalLayout,
                    arrangeTooltips: false,
                })
            )

            // Use only absolute numbers
            chart.getNumberFormatter().set('numberFormat', '#.#s')

            // Add legend
            // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
            let legend = chart.children.push(
                am5.Legend.new(root, {
                    centerX: am5.p50,
                    x: am5.p50,
                })
            )

            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            let yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: 'category',
                    renderer: am5xy.AxisRendererY.new(root, {
                        inversed: true,
                        cellStartLocation: 0.1,
                        cellEndLocation: 0.9,
                    }),
                })
            )

            yAxis.data.setAll(data)

            let xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererX.new(root, {
                        strokeOpacity: 0.1,
                    }),
                })
            )

            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            function createSeries(
                field,
                labelCenterX,
                pointerOrientation,
                rangeValue,
                labelText
            ) {
                let series = chart.series.push(
                    am5xy.ColumnSeries.new(root, {
                        xAxis: xAxis,
                        yAxis: yAxis,
                        valueXField: field,
                        categoryYField: 'category',
                        sequencedInterpolation: true,
                        clustered: false,
                        tooltip: am5.Tooltip.new(root, {
                            pointerOrientation: pointerOrientation,
                            labelText: labelText + ': {valueX}',
                        }),
                    })
                )

                series.columns.template.setAll({
                    height: am5.p100,
                    strokeOpacity: 0,
                    fillOpacity: 0.8,
                })

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationX: 1,
                        locationY: 0.5,
                        sprite: am5.Label.new(root, {
                            centerY: am5.p50,
                            text: '{valueX}',
                            populateText: true,
                            centerX: labelCenterX,
                        }),
                    })
                })

                series.data.setAll(data)
                series.appear()

                let rangeDataItem = xAxis.makeDataItem({
                    value: rangeValue,
                })
                xAxis.createAxisRange(rangeDataItem)
                rangeDataItem.get('grid').setAll({
                    strokeOpacity: 1,
                    stroke: series.get('stroke'),
                })

                let label = rangeDataItem.get('label')
                label.setAll({
                    text: field.toUpperCase(),
                    fontSize: '1.1em',
                    fill: series.get('stroke'),
                    paddingTop: 10,
                    isMeasured: false,
                    centerX: labelCenterX,
                })
                label.adapters.add('dy', function () {
                    return -chart.plotContainer.height()
                })

                return series
            }

            createSeries('nein', am5.p100, 'right', -1, 'Nein')
            createSeries('ja', 0, 'left', 1, 'Ja')

            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
            let cursor = chart.set(
                'cursor',
                am5xy.XYCursor.new(root, {
                    behavior: 'zoomY',
                })
            )
            cursor.lineY.set('forceHidden', true)
            cursor.lineX.set('forceHidden', true)

            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            chart.appear(1000, 100)
            chartRef.current = chart
        } else {
            root = am5.Root.new(divId)
            let myTheme = am5.Theme.new(root)

            myTheme.rule('Grid', ['base']).setAll({
                strokeOpacity: 0.1,
            })

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root), myTheme])

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            // TODO @Stefan Not all rows are visible !!!
            let chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: false, // 'panY',
                    wheelY: false, // 'zoomY',
                    zoomX: false,
                    zoomY: false,
                    layout: root.verticalLayout,
                })
            )

            // Add scrollbar
            // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
            // chart.set(
            //     'scrollbarY',
            //     am5.Scrollbar.new(root, {
            //         orientation: 'vertical',
            //     })
            // )

            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            let yRenderer = am5xy.AxisRendererY.new(root, {})
            let yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: 'question',
                    renderer: yRenderer,
                    tooltip: am5.Tooltip.new(root, {}),
                })
            )

            yRenderer.grid.template.setAll({
                location: 1,
            })

            yAxis.data.setAll(data?.slice(0).reverse())
            let xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    min: 0,
                    max: Math.max(...data.map(item => item.totalCount)),
                    renderer: am5xy.AxisRendererX.new(root, {
                        strokeOpacity: 0.1,
                    }),
                })
            )

            // Add legend
            // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
            let legend = chart.children.push(
                am5.Legend.new(root, {
                    centerX: am5.p50,
                    x: am5.p50,
                })
            )

            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            function makeSeries(name, fieldName) {
                let series = chart.series.push(
                    am5xy.ColumnSeries.new(root, {
                        name: name,
                        stacked: true,
                        xAxis: xAxis,
                        yAxis: yAxis,
                        baseAxis: yAxis,
                        valueXField: fieldName,
                        categoryYField: 'question',
                    })
                )

                series.columns.template.setAll({
                    tooltipText: '{name} ({valueX})',
                    tooltipY: am5.percent(90),
                })
                series.data.setAll(data)

                // Make stuff animate on load
                // https://www.amcharts.com/docs/v5/concepts/animations/
                series.appear()

                // series.bullets.push(function () {
                //     return am5.Bullet.new(root, {
                //         sprite: am5.Label.new(root, {
                //             text: '', //{valueX}',
                //             fill: root.interfaceColors.get('alternativeText'),
                //             centerY: am5.p50,
                //             centerX: am5.p50,
                //             populateText: false,
                //         }),
                //     })
                // })

                legend.data.push(series)
            }

            makeSeries('Stimme überhaupt nicht zu', 'level_1')
            makeSeries('Stimme eher nicht zu', 'level_2')
            makeSeries('Teils, teils', 'level_3')
            makeSeries('Stimme eher zu', 'level_4')
            makeSeries('Stimme voll und ganz zu', 'level_5')
            // makeSeries('Keine Antwort', 'level_6')

            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            chart.appear(1000, 100)
            chartRef.current = chart
        }

        return () => {
            root.dispose()
        }
    }, [])

    return (
        <div className="mb-5">
            {isNegative && (
                <div id={divId} style={{ width: '100%', height: height }}></div>
            )}
            {!isNegative && (
                <div id={divId} style={{ width: '100%', height: height }}></div>
            )}
        </div>
    )
}
