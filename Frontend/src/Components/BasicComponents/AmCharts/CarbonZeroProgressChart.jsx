import React, { useRef, useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { uuid } from '../../../Services/Utils/Util'

export const CarbonZeroProgressChart = ({ option, avgData, height = 500 }) => {
    const chartRef = useRef(null)
    const divId = uuid()
    avgData = parseFloat(avgData)

    useLayoutEffect(() => {
        let root = am5.Root.new(divId)

        root.setThemes([am5themes_Animated.new(root)])
        const data = [
            {
                category: '0',
                value: 100,
                // currentBullet: true,
                columnSettings: {
                    fill: am5.color(0xcf2e2e),
                },
            },
            {
                category: '1',
                value: 100,
                // currentBullet: true,
                columnSettings: {
                    fill: am5.color(0xcf2e2e),
                },
            },
            {
                category: '2',
                value: 100,
                columnSettings: {
                    fill: am5.color(0xcf2e2e),
                },
            },
            {
                category: '3',
                value: 100,
                columnSettings: {
                    fill: am5.color(0xcf2e2e),
                },
            },
            {
                category: '4',
                value: 100,
                columnSettings: {
                    fill: am5.color(0xcf2e2e),
                },
            },
            {
                category: '5',
                value: 100,
                columnSettings: {
                    fill: am5.color(0xfcc034),
                },
            },
            {
                category: '6',
                value: 100,
                columnSettings: {
                    fill: am5.color(0xfcc034),
                },
            },
            {
                category: '7',
                value: 100,
                columnSettings: {
                    fill: am5.color(0xfcc034),
                },
            },
            {
                category: '8',
                value: 100,
                columnSettings: {
                    fill: am5.color(0x6bc352),
                },
            },
            {
                category: '9',
                value: 100,
                columnSettings: {
                    fill: am5.color(0x6bc352),
                },
            },
            {
                category: '10',
                value: 100,
                columnSettings: {
                    fill: am5.color(0x6bc352),
                },
            },
        ]
        
        data[Math.floor(avgData)].currentBullet = true

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: 'none',
                wheelY: 'none',
                layout: root.verticalLayout,
                paddingRight: 30,
            })
        )

        let legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50,
            })
        )

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: 'category',
                renderer: am5xy.AxisRendererX.new(root, {}),
                tooltip: am5.Tooltip.new(root, {}),
            })
        )

        let xRenderer = xAxis.get('renderer')

        xRenderer.grid.template.set('forceHidden', true)
        xRenderer.labels.template.set('forceHidden', true)

        xAxis.data.setAll(data)

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,
                max: 400,
                strictMinMax: true,
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        )

        let yRenderer = yAxis.get('renderer')

        yRenderer.grid.template.set('forceHidden', true)
        yRenderer.labels.template.set('forceHidden', true)

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

        let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'value',
                categoryXField: 'category',
                maskBullets: false,
            })
        )

        series.columns.template.setAll({
            //tooltipText: "{categoryX}: {valueY}",
            width: am5.p100,
            tooltipY: 0,
            strokeOpacity: 1,
            strokeWidth: 2,
            stroke: am5.color(0xffffff),
            templateField: 'columnSettings',
        })

        series.bullets.push(function (root, target, dataItem) {
            if (dataItem.dataContext.currentBullet) {
                let container = am5.Container.new(root, {})

                let pin = container.children.push(
                    am5.Graphics.new(root, {
                        fill: dataItem.dataContext.columnSettings.fill,
                        dy: -5,
                        centerY: am5.p100,
                        centerX: am5.p50,
                        svgPath:
                            'M66.9 41.8c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4 0 11.3 20.4 32.4 20.4 32.4s20.4-21.1 20.4-32.4zM37 41.4c0-5.2 4.3-9.5 9.5-9.5s9.5 4.2 9.5 9.5c0 5.2-4.2 9.5-9.5 9.5-5.2 0-9.5-4.3-9.5-9.5z',
                    })
                )

                let label = container.children.push(
                    am5.Label.new(root, {
                        text: avgData,
                        dy: -38,
                        centerY: am5.p50,
                        centerX: am5.p50,
                        populateText: true,
                        paddingTop: 5,
                        paddingRight: 5,
                        paddingBottom: 5,
                        paddingLeft: 5,
                        background: am5.RoundedRectangle.new(root, {
                            fill: am5.color(0xffffff),
                            cornerRadiusTL: 20,
                            cornerRadiusTR: 20,
                            cornerRadiusBR: 20,
                            cornerRadiusBL: 20,
                        }),
                    })
                )

                return am5.Bullet.new(root, {
                    locationY: 1,
                    sprite: container,
                })
            } else if (dataItem.dataContext.targetBullet) {
                // let container = am5.Container.new(root, {
                //     dx: 15,
                // })
                // let circle = container.children.push(
                //     am5.Circle.new(root, {
                //         radius: 34,
                //         fill: am5.color(0x11326d),
                //     })
                // )
                // let label = container.children.push(
                //     am5.Label.new(root, {
                //         text: 'GOAL\n[bold]ZERO[/]',
                //         textAlign: 'center',
                //         //fontSize: "10",
                //         fill: am5.color(0xffffff),
                //         centerY: am5.p50,
                //         centerX: am5.p50,
                //         populateText: true,
                //     })
                // )
                // return am5.Bullet.new(root, {
                //     locationY: 0.5,
                //     locationX: 0.35,
                //     sprite: container,
                // })
            }
            return false
        })

        series.data.setAll(data)

        // Add labels
        function addAxisLabel(category, text) {
            let rangeDataItem = xAxis.makeDataItem({
                category: category,
            })

            let range = xAxis.createAxisRange(rangeDataItem)

            range.get('label').setAll({
                //fill: am5.color(0xffffff),
                text: text,
                forceHidden: false,
            })

            range.get('grid').setAll({
                //stroke: color,
                strokeOpacity: 1,
                location: 1,
            })
        }
        addAxisLabel('0', '0')
        addAxisLabel('1', '1')
        addAxisLabel('2', '2')
        addAxisLabel('3', '3')
        addAxisLabel('4', '4')
        addAxisLabel('5', '5')
        addAxisLabel('6', '6')
        addAxisLabel('7', '7')
        addAxisLabel('8', '8')
        addAxisLabel('9', '9')
        addAxisLabel('10', '10')

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
