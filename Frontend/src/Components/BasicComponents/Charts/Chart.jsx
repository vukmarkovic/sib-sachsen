import React, { useEffect, useState } from 'react'
import { Bar, Bubble, Doughnut, Line } from 'react-chartjs-2'
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LineElement,
    BarElement,
    LinearScale,
    PointElement
)

const defaultOptions = {
    animation: {
        duration: 0,
    },
}

export function Chart({
    type,
    data,
    labels,
    backgroundColor,
    borderColor,
    borderWidth,
    width,
    height,
    options,
    centerText,
    chartRef,
}) {
    const [graphData, setGraphData] = useState(null)

    useEffect(() => {
        createGraphData()
    }, [data, labels, backgroundColor, borderColor, borderWidth])

    function createGraphData() {
        setGraphData({
            labels,
            datasets: [
                {
                    data,
                    backgroundColor,
                    borderColor,
                    borderWidth,
                },
            ],
        })
    }

    function graphComponent() {
        if (!graphData) return null

        switch (type) {
            case 'doughnut':
                return (
                    <Doughnut
                        width={width}
                        height={height}
                        options={{ ...defaultOptions, ...options }}
                        data={graphData}
                    />
                )
            case 'line':
                return (
                    <Line
                        width={width}
                        height={height}
                        options={{ ...defaultOptions, ...options }}
                        data={graphData}
                    />
                )
            case 'bar':
                return (
                    <Bar
                        width={width}
                        height={height}
                        options={{ ...defaultOptions, ...options }}
                        data={graphData}
                        ref={chartRef}
                    />
                )
            case 'bubble':
                return (
                    <Bubble
                        width={width}
                        height={height}
                        options={{ ...defaultOptions, ...options }}
                        data={graphData}
                        ref={chartRef}
                    />
                )
            default:
                return (
                    <Doughnut
                        width={width}
                        height={height}
                        options={{ ...defaultOptions, ...options }}
                        data={graphData}
                    />
                )
        }
    }

    return (
        <>
            <div style={{ height: height, width: width, position: 'relative' }}>
                {centerText && (
                    <div
                        style={{
                            width: '100%',
                            height: '40px',
                            position: 'absolute',
                            top:
                                options?.plugins?.legend?.position === 'bottom'
                                    ? 'calc(50% - 10px)'
                                    : '50%',
                            left: 0,
                            marginTop: '-20px',
                            lineHeight: '19px',
                            textAlign: 'center',
                            zIndex: 999999999999999,
                        }}>
                        {centerText}
                    </div>
                )}
                {graphComponent()}
            </div>
        </>
    )
}
