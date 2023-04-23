import Swal from 'sweetalert2'
import { v4 } from 'uuid'
import Dropdown from 'bootstrap/js/dist/dropdown.js'
import ApexCharts from 'apexcharts'
import client from '../../Api/HttpClient'

export function extractNestedField(object, fieldsString) {
    const fields = fieldsString.split('.')

    let currentObject = object
    for (let field of fields) {
        currentObject = currentObject[field]
    }

    return currentObject
}

export function uuid() {
    return v4()
}

export function isDevMode() {
    return process.env.NODE_ENV === 'development' || localStorage.isDevMode
}

// TODO @DevTeam is copyObject() really needed? (on all the places)
export function copyObject(object) {
    return JSON.parse(JSON.stringify(object))
}

export function mapWithKeys(object, callback) {
    return Object.fromEntries(
        Object.keys(object).map((key) => callback(key, object[key]))
    )
}

export function getContrastText(hexColor) {
    // Check if hex color is dark
    // https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
    const r = parseInt(hexColor.substr(1, 2), 16)
    const g = parseInt(hexColor.substr(3, 2), 16)
    const b = parseInt(hexColor.substr(5, 2), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? 'black' : 'white'
}

export function dispatchReactEvent(name, data) {
    const event = new CustomEvent(name, { detail: data })
    document.dispatchEvent(event)
}

export function addReactEventListener(name, callback) {
    document.addEventListener(name, callback)
}

export function removeReactEventListener(name, callback) {
    document.removeEventListener(name, callback)
}

// == LEGACY JAVASCRIPT ==

window.toggleExplanation = function (icon, id) {
    let element = document.getElementById(id)
    let display = element.style.display
    if (display === 'block') {
        element.style.display = 'none'
    } else {
        element.style.display = 'block'
    }
}

window.toggleDescription = window.toggleExplanation

window.Swal = Swal

function initSparkChart(chart) {
    // Options
    var options = {
        chart: {
            width: '100%',
            sparkline: {
                enabled: true,
            },
        },
        series: [],
        labels: [],
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: [],
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (e) {
                        return ''
                    },
                },
            },
            marker: {
                show: !1,
            },
        },
    }

    // Get data from data attributes
    var dataset = chart.dataset?.dataset,
        labels = chart.dataset?.labels,
        color = chart.dataset?.color,
        height = chart.dataset?.height,
        type = chart.dataset?.type

    // Inject synamic properties
    options.series = [
        {
            data: JSON.parse(dataset),
        },
    ]

    if (labels) {
        options.labels = [labels]
    }

    const colorMap = {
        primary: '#ff5c5c',
        info: '#00b8d9',
        success: '#00cc7e',
        danger: '#ed6964',
        warning: '#f6ae28',
        dark: '#273444',
    }

    options.colors = [colorMap[color] ? colorMap[color] : '#00cc7e']

    options.chart.height = height ? height : 35

    options.chart.type = type ? type : 'line'

    // Init chart
    var chart = new ApexCharts(chart, options)

    // Draw chart
    setTimeout(function () {
        chart.render()
    }, 300)
}

// add event handler for htmlReady (after htmlWrapper component is loaded)
addReactEventListener('htmlReady', function (event) {
    if (event.detail.target) {
        // Dropdowns
        event.detail.target
            .querySelectorAll('[data-toggle="dropdown"]')
            .forEach(function (element) {
                const dropdown = new Dropdown(element)
                element.addEventListener('click', function (event) {
                    event.preventDefault()
                    dropdown.toggle()
                })
            })

        // Spark charts
        event.detail.target
            .querySelectorAll('[data-toggle="spark-chart"]')
            .forEach(function (chart) {
                initSparkChart(chart)
            })
    }
})

window.reloadHtmlWrapper = function (target) {
    dispatchReactEvent('reloadHtml', { target: target })
}

window.legacyAjaxCall = async function (url) {
    const { data } = await client.httpClient.get(url)
    if (data['success.message']) {
        window.snackbar.success({ message: data['success.message'].title })
    } else if (data['error.message']) {
        window.snackbar.error({ message: data['error.message'] })
    }
}
