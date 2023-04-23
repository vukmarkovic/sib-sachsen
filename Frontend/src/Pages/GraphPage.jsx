/*global span*/

import React, { useEffect, useState } from 'react'
import * as am5 from '@amcharts/amcharts5'
import { XYChart } from '../Components/BasicComponents/AmCharts/XYChart'
import { SolidGaugeChart } from '../Components/BasicComponents/AmCharts/SolidGaugeChart'
import { SnackedBarChart } from '../Components/BasicComponents/AmCharts/SnackedBarChart'
import { InfographicChart } from '../Components/BasicComponents/AmCharts/InfographicChart'
import { LiveSortingRadarColumnsChart } from '../Components/BasicComponents/AmCharts/LiveSortingRadarColumnsChart'
import { WordCloudChart } from '../Components/BasicComponents/AmCharts/WordCloudChart'
import { CarbonZeroProgressChart } from '../Components/BasicComponents/AmCharts/CarbonZeroProgressChart'
import { SortedBarChart } from '../Components/BasicComponents/AmCharts/SortedBarChart'
import { usePublicSurvey } from '../Hooks/Redux/PublicSurvey'
import { Box, List, Paper, Tab, Tabs, Typography } from '@mui/material'

export const GraphPage = () => {
    const [currentSurveyState, setSurveyResult, loadSurveyData] =
        usePublicSurvey()

    const [question2, setQuestion2] = useState()
    const [question3, setQuestion3] = useState()
    const [question4, setQuestion4] = useState()
    const [question5, setQuestion5] = useState()
    const [question6b, setQuestion6b] = useState()
    const [question8, setQuestion8] = useState()
    const [question10, setQuestion10] = useState()
    const [question16, setQuestion16] = useState()
    const [question17, setQuestion17] = useState()
    const [question35, setQuestion35] = useState()
    const [question35a, setQuestion35a] = useState()
    const [question35b, setQuestion35b] = useState()
    const [question36, setQuestion36] = useState()
    const [question37, setQuestion37] = useState()
    const [question38, setQuestion38] = useState()
    const [question39, setQuestion39] = useState()
    const [question40, setQuestion40] = useState()

    const [vergutung, setVergutung] = useState()
    const [karrieremöglichkeiten, setKarrieremöglichkeiten] = useState()
    const [sicherheit, setSicherheit] = useState()
    const [führungsverhalten, setFührungsverhalten] = useState()
    const [arbeitsbedingungen, setArbeitsbedingungen] = useState()

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        loadSurveyData()
    }, [])

    useEffect(() => {
        // Allgemein
        setQuestion2(currentSurveyState.graphData?.question2)
        setQuestion3(currentSurveyState.graphData?.question3)
        setQuestion4(currentSurveyState.graphData?.question4)
        setQuestion5(currentSurveyState.graphData?.question5)

        // Vergütung
        setVergutung(currentSurveyState.groupGraphData?.vergutung)
        setQuestion6b(currentSurveyState.graphData?.question6b)
        setQuestion8(currentSurveyState.graphData?.question8)
        setQuestion10(currentSurveyState.graphData?.question10)

        // Karrieremöglichkeiten
        setKarrieremöglichkeiten(
            currentSurveyState.groupGraphData?.karrieremöglichkeiten
        )
        setQuestion16(currentSurveyState.graphData?.question16)
        setQuestion17(currentSurveyState.graphData?.question17)

        // Sicherheit
        setSicherheit(currentSurveyState.groupGraphData?.sicherheit)

        // Führungsverhalten
        setFührungsverhalten(
            currentSurveyState.groupGraphData?.führungsverhalten
        )

        // Arbeitsbedingungen
        setArbeitsbedingungen(
            currentSurveyState.groupGraphData?.arbeitsbedingungen
        )
        setQuestion35(currentSurveyState.graphData?.question35)
        setQuestion35a(currentSurveyState.graphData?.question35a)
        setQuestion35b(currentSurveyState.graphData?.question35b)
        setQuestion36(currentSurveyState.graphData?.question36)
        setQuestion37(currentSurveyState.graphData?.question37)

        // Abschluss
        setQuestion38(currentSurveyState.graphData?.question38)
        setQuestion39(currentSurveyState.graphData?.question39)
        setQuestion40(currentSurveyState.graphData?.question40)
    }, [currentSurveyState])

    const infoGraphicChartData = [
        {
            category: 'Marketing',
            male: -36,
            maleMax: -100,
            female: 64,
            femaleMax: 100,
        },
        {
            category: 'Research',
            male: -58,
            maleMax: -100,
            female: 42,
            femaleMax: 100,
        },
        {
            category: 'Engineering',
            male: -59,
            maleMax: -100,
            female: 41,
            femaleMax: 100,
        },
        {
            category: 'Sales',
            male: -41,
            maleMax: -100,
            female: 59,
            femaleMax: 100,
        },
        {
            category: 'Support',
            male: -50,
            maleMax: -100,
            female: 50,
            femaleMax: 100,
        },
        {
            category: 'Other',
            male: -36,
            maleMax: -100,
            female: 64,
            femaleMax: 100,
        },
    ]

    const liveSortingRadarColumnsChartData = [
        {
            country: 'USA',
            value: 2025,
        },
        {
            country: 'China',
            value: 1882,
        },
        {
            country: 'Japan',
            value: 1809,
        },
        {
            country: 'Germany',
            value: 1322,
        },
        {
            country: 'UK',
            value: 1122,
        },
        {
            country: 'France',
            value: 1114,
        },
        {
            country: 'India',
            value: 984,
        },
        {
            country: 'Spain',
            value: 711,
        },
        {
            country: 'Netherlands',
            value: 665,
        },
        {
            country: 'Russia',
            value: 580,
        },
        {
            country: 'South Korea',
            value: 443,
        },
        {
            country: 'Canada',
            value: 441,
        },
    ]

    // const snackedBarChartData = [
    //     {
    //         year: '2021',
    //         level_1: 2.5,
    //         level_2: 2.5,
    //         level_3: 2.1,
    //         level_4: 1,
    //         level_5: 2,
    //     },
    //     {
    //         year: '2022',
    //         level_1: 2.6,
    //         level_2: 2.7,
    //         level_3: 2.2,
    //         level_4: 0.5,
    //         level_5: 0.4,
    //     },
    //     {
    //         year: '2023',
    //         level_1: 2.8,
    //         level_2: 2.9,
    //         level_3: 2.4,
    //         level_4: 0.3,
    //         level_5: 0.9,
    //     },
    // ]

    const solidGaugeChartData = [
        {
            category: 'Research',
            value: 80,
            full: 100,
        },
        {
            category: 'Marketing',
            value: 35,
            full: 100,
        },
        {
            category: 'Distribution',
            value: 92,
            full: 100,
        },
        {
            category: 'Human Resources',
            value: 68,
            full: 100,
        },
    ]

    const xyChartData = [
        {
            category: 'Research',
            value1: 1000,
            value2: 588,
        },
        {
            category: 'Marketing',
            value1: 1200,
            value2: 1800,
        },
        {
            category: 'Sales',
            value1: 850,
            value2: 1230,
        },
    ]

    function AllgemeinPanel() {
        return (
            <>
                <h1>Allgemein</h1>

                {question2 && (
                    <>
                        <h2>Wie lange waren Sie im SIB tätig?</h2>
                        <SortedBarChart data={question2} height={300} />
                    </>
                )}

                {question3 && (
                    <>
                        <h2>Aus welchem Grund haben Sie die SIB verlassen?</h2>
                        <SortedBarChart data={question3} />
                    </>
                )}

                {question4 && (
                    <>
                        <h2>Bitte erläutern Sie kurz ihren Grund:</h2>
                        <WordCloudChart data={question4} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_4 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>{item.data?.question_4}</p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}

                {question5 && (
                    <>
                        <h2>
                            Was hätte der Staatsbetrieb SIB tun können, um Sie
                            länger zu halten?
                        </h2>
                        <WordCloudChart data={question5} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_5 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>{item.data?.question_5}</p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}

                {question38 && (
                    <>
                        <h2>
                            Was hätte gegeben sein müssen, dass Sie beim SIB
                            geblieben wären?
                        </h2>
                        <WordCloudChart data={question38} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 20 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_38 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>
                                            {item.data?.question_38}
                                        </p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}

                {question39 && (
                    <>
                        <h2>
                            Wie wahrscheinlich ist es, dass Sie den SIB als
                            Arbeitgeber bzw. Einsatzbehörde weiterempfehlen?
                        </h2>
                        <CarbonZeroProgressChart
                            avgData={question39}
                            height={200}
                        />
                    </>
                )}

                {question40 && (
                    <>
                        <h2>
                            Wenn Sie uns abschließend noch etwas mitteilen
                            möchten, können Sie uns hier eine Mitteilung
                            hinterlassen.
                        </h2>
                        <WordCloudChart data={question40} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_40 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>{item.data.question_40}</p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}
            </>
        )
    }

    function VergutungPanel() {
        return (
            <>
                {vergutung && (
                    <>
                        <h1>Vergütung</h1>
                        <SnackedBarChart
                            isNegative={true}
                            data={vergutung}
                            height={300}
                        />
                    </>
                )}

                {question8 && (
                    <>
                        <h2>
                            Wie viel Prozent verdienen Sie in Ihrem neuen
                            Unterhemen mehr?
                        </h2>
                        <SortedBarChart data={question8} height={300} />
                    </>
                )}

                {question6b && question6b[0] && question6b[0].tag !== 'undefined' && (
                    <>
                        <h2>
                            Was hätte Sie motiviert trotz Renteintritt länger
                            beim SIB zu bleiben?
                        </h2>
                        <WordCloudChart data={question6b} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_6b !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>
                                            {item.data?.question_6b}
                                        </p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}
                {/* depending on question3 result */}
                {question10 && (
                    <>
                        <h2>
                            Welche Mitarbeiter-Zusatzleistungen machen für Sie
                            einen Arbeitgeber wie den Freistaat Sachsen bzw. den
                            SIB attraktiv?
                        </h2>
                        <WordCloudChart data={question10} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_10 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>
                                            {item.data?.question_10}
                                        </p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}
            </>
        )
    }

    function KarrieremöglichkeitenPanel() {
        return (
            <>
                {karrieremöglichkeiten && (
                    <>
                        <h1>Karrieremöglichkeiten</h1>
                        <SnackedBarChart data={karrieremöglichkeiten} />
                    </>
                )}

                {question16 && question17 && (
                    <>
                        <SnackedBarChart
                            isNegative={true}
                            data={[...question16, ...question17]}
                            height={200}
                        />
                    </>
                )}
            </>
        )
    }

    function SicherheitPanel() {
        return (
            <>
                {sicherheit && (
                    <>
                        <h1>Sicherheit</h1>
                        <SnackedBarChart data={sicherheit} />
                    </>
                )}
            </>
        )
    }

    function FührungsverhaltenPanel() {
        return (
            <>
                {führungsverhalten && (
                    <>
                        <h1>Führungsverhalten</h1>
                        <SnackedBarChart data={führungsverhalten} />
                    </>
                )}
            </>
        )
    }

    function ArbeitsbedingungenPanel() {
        return (
            <>
                {arbeitsbedingungen && (
                    <>
                        <h1>Arbeitsbedingungen</h1>
                        <SnackedBarChart data={arbeitsbedingungen} />
                    </>
                )}

                {question35 && question35a && question35b && question36 && (
                    <>
                        <SnackedBarChart
                            isNegative={true}
                            data={[
                                ...question35,
                                ...question35a,
                                ...question35b,
                                ...question36,
                            ]}
                            height={400}
                        />
                    </>
                )}

                {question37 && (
                    <>
                        <h2>Was hat Ihnen gefehlt?</h2>
                        <WordCloudChart data={question37} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_37 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>
                                            {item.data?.question_37}
                                        </p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}
            </>
        )
    }

    function group7() {
        return (
            <>
                <h1>Abschluss</h1>

                {question38 && (
                    <>
                        <h2>
                            Was hätte gegeben sein müssen, dass Sie beim SIB
                            geblieben wären?
                        </h2>
                        <WordCloudChart data={question38} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_38 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>
                                            {item.data?.question_38}
                                        </p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}

                {question39 && (
                    <>
                        <h2>
                            Wie wahrscheinlich ist es, dass Sie den SIB als
                            Arbeitgeber bzw. Einsatzbehörde weiterempfehlen?
                        </h2>
                        <CarbonZeroProgressChart
                            avgData={question39}
                            height={200}
                        />
                    </>
                )}

                {question40 && (
                    <>
                        <h2>
                            Wenn Sie uns abschließend noch etwas mitteilen
                            möchten, können Sie uns hier eine Mitteilung
                            hinterlassen.
                        </h2>
                        <WordCloudChart data={question40} />
                        <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                            <List style={{ padding: 15 }}>
                                {currentSurveyState.result
                                    .filter(
                                        v => v.data?.question_40 !== undefined
                                    )
                                    .map((item, key) => (
                                        <p key={key}>
                                            {item.data?.question_40}
                                        </p>
                                    ))}
                            </List>
                        </Paper>
                        <br />
                        <br />
                    </>
                )}
            </>
        )
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography component={'span'}>{children}</Typography>
                    </Box>
                )}
            </div>
        )
    }

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Allgemein" />
                    <Tab label="Vergütung" />
                    <Tab label="Karrieremöglichkeiten" />
                    <Tab label="Sicherheit" />
                    <Tab label="Führungsverhalten" />
                    <Tab label="Arbeitsbedingungen" />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                {AllgemeinPanel()}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {VergutungPanel()}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {KarrieremöglichkeitenPanel()}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {SicherheitPanel()}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {FührungsverhaltenPanel()}
            </TabPanel>
            <TabPanel value={value} index={5}>
                {ArbeitsbedingungenPanel()}
            </TabPanel>

            {/* <LiveSortingRadarColumnsChart
                data={liveSortingRadarColumnsChartData}
            /> */}
            {/* <XYChart data={xyChartData} />
            <SolidGaugeChart data={solidGaugeChartData} />

            <InfographicChart data={infoGraphicChartData} />
            <SnackedBarChart isNegative={false} data={snackedBarChartData} />
            <LiveSortingRadarColumnsChart
                data={liveSortingRadarColumnsChartData}
            /> */}
        </>
    )
}
