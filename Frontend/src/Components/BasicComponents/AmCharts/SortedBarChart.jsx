import React, { useRef, useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { uuid } from '../../../Services/Utils/Util'

export const SortedBarChart = ({ option, data, height = '500px' }) => {
    const chartRef = useRef(null)
    const divId = uuid()

    useLayoutEffect(() => {
        let root = am5.Root.new(divId)

        root.setThemes([am5themes_Animated.new(root)])

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: 'none',
                wheelY: 'none',
            })
        )

        chart.zoomOutButton.set('forceHidden', true)

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let yRenderer = am5xy.AxisRendererY.new(root, {
            minGridDistance: 30,
        })

        yRenderer.grid.template.set('location', 1)

        let yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0,
                categoryField: 'year',
                renderer: yRenderer,
                tooltip: am5.Tooltip.new(root, { themeTags: ['axis'] }),
            })
        )

        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0,
                min: 0,
                extraMax: 5,
                renderer: am5xy.AxisRendererX.new(root, {
                    strokeOpacity: 0.1,
                }),
            })
        )

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: 'Year',
                xAxis: xAxis,
                yAxis: yAxis,
                valueXField: 'value',
                categoryYField: 'year',
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: 'left',
                    labelText: '{valueX}',
                }),
            })
        )

        // Rounded corners for columns
        series.columns.template.setAll({
            cornerRadiusTR: 5,
            cornerRadiusBR: 5,
            strokeOpacity: 0,
        })

        // Make each column to be of a different color
        series.columns.template.adapters.add('fill', function (fill, target) {
            return chart.get('colors').getIndex(series.columns.indexOf(target))
        })

        series.columns.template.adapters.add(
            'stroke',
            function (stroke, target) {
                return chart
                    .get('colors')
                    .getIndex(series.columns.indexOf(target))
            }
        )

        yAxis.data.setAll(data)
        series.data.setAll(data)
        // sortCategoryAxis()

        // Get series item by category
        function getSeriesItem(category) {
            for (var i = 0; i < series.dataItems.length; i++) {
                let dataItem = series.dataItems[i]
                if (dataItem.get('categoryY') == category) {
                    return dataItem
                }
            }
        }

        chart.set(
            'cursor',
            am5xy.XYCursor.new(root, {
                behavior: 'none',
                xAxis: xAxis,
                yAxis: yAxis,
            })
        )

        // Axis sorting
        function sortCategoryAxis() {
            // Sort by value
            series.dataItems.sort(function (x, y) {
                return x.get('valueX') - y.get('valueX') // descending
                //return y.get("valueY") - x.get("valueX"); // ascending
            })

            // Go through each axis item
            am5.array.each(yAxis.dataItems, function (dataItem) {
                // get corresponding series item
                let seriesDataItem = getSeriesItem(dataItem.get('category'))

                if (seriesDataItem) {
                    // get index of series data item
                    let index = series.dataItems.indexOf(seriesDataItem)
                    // calculate delta position
                    let deltaPosition =
                        (index - dataItem.get('index', 0)) /
                        series.dataItems.length
                    // set index to be the same as series data item index
                    dataItem.set('index', index)
                    // set deltaPosition instanlty
                    dataItem.set('deltaPosition', -deltaPosition)
                    // animate delta position to 0
                    dataItem.animate({
                        key: 'deltaPosition',
                        to: 0,
                        duration: 1000,
                        easing: am5.ease.out(am5.ease.cubic),
                    })
                }
            })

            // Sort axis items by index.
            // This changes the order instantly, but as deltaPosition is set,
            // they keep in the same places and then animate to true positions.
            yAxis.dataItems.sort(function (x, y) {
                return x.get('index') - y.get('index')
            })
        }

        // update data with random values each 1.5 sec
        // setInterval(function () {
        //     updateData()
        // }, 1500)

        // function updateData () {
        //     am5.array.each(series.dataItems, function (dataItem) {
        //         let value =
        //             dataItem.get('valueX') +
        //             Math.round(Math.random() * 1000000000 - 500000000)
        //         if (value < 0) {
        //             value = 500000000
        //         }
        //         // both valueY and workingValueY should be changed, we only animate workingValueY
        //         dataItem.set('valueX', value)
        //         dataItem.animate({
        //             key: 'valueXWorking',
        //             to: value,
        //             duration: 600,
        //             easing: am5.ease.out(am5.ease.cubic),
        //         })
        //     })

        //     sortCategoryAxis()
        // }

        // Add cursor
        chart.set('cursor', am5xy.XYCursor.new(root, {}))

        chartRef.current = chart

        return () => {
            root.dispose()
        }
    }, [])

    return (
        <div className="mb-5">
            <div id={divId} style={{ width: '100%', height: height }}></div>
        </div>
    )
}
