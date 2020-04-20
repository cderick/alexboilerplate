import React, { Component } from 'react'
import data from './Reports.json'
import RepDataSection from './RepDataSection/RepDataSection'
import LocationDataSection from './LocationDataSection/LocationDataSection'
import FullOption from './RepDataSection/FullOption/FullOption'
import { Chart } from "react-google-charts"


class Reports extends Component {
    render() {
        if (!data) return null
        const { reportData, locationData, expandButton, charts, barCharts } = data
        console.log(barCharts)
        return (
            <div className="container p-0">
                <RepDataSection reportData={reportData} />
                <LocationDataSection locationData={locationData} expandButton={expandButton} />
                <div className="row p-0 m-0">
                    {barCharts && barCharts.length > 0 &&
                        barCharts.map((CharBar, charBarIdx) => (
                            <div key={`charBarUnique${charBarIdx}`} className="col-6 mt-5">
                                <section className="p-4">
                                    {CharBar.title && <h3 className="text-muted text-center">{CharBar.title}</h3>}
                                    <Chart
                                        chartType="BarChart"
                                        data={[
                                            ['Element', 'Density', { role: 'style' }, { sourceColumn: 0, role: 'annotation', type: 'string', calc: 'stringify' }],
                                            ...CharBar.mainChart
                                        ]}
                                        options={{ bar: { groupWidth: '95%' }, height: 500, legend: { position: 'none' } }}
                                    />
                                </section>
                            </div>
                        ))}
                </div>
                <div className="row p-0 m-0">
                    {charts && charts.length > 0 &&
                        charts.map((charData, charIdx) => (
                            <div key={`charUnique${charIdx}`} className="col-6">
                                <section className="p-5">
                                    {charData.title && <h3 className="text-muted text-center">{charData.title}</h3>}
                                    {charData.pieData && <FullOption data={charData.pieData} />}
                                </section>
                            </div>
                        ))}
                </div>
            </div>

        )
    }
}

export default Reports