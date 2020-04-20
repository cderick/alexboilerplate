import React, { Component } from 'react'
import style from './LocationDataSection.scss'

class LocationDataSection extends Component {
    render() {
        const { locationData, expandButton } = this.props
        if (!locationData && !expandButton) return null
        return (
            <section>
                {locationData &&
                    <section>
                        <div className="row">
                            <div className="col">
                                <section className="pt-3 pb-2">
                                    {locationData.title && <h3 className="text-muted">{locationData.title}</h3>}
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <section className="pb-2">
                                    {locationData.labels.location && <p><strong>{locationData.labels.location}</strong></p>}
                                </section>
                            </div>
                            <div className="col-2">
                                <section className="text-center pb-2">
                                    {locationData.labels.itenName && <p><strong>{locationData.labels.itenName}</strong></p>}
                                </section>
                            </div>
                            <div className="col-2">
                                <section className="text-center pb-2">
                                    {locationData.labels.weigth && <p><strong>{locationData.labels.weigth}</strong></p>}
                                </section>
                            </div>
                            <div className="col-2">
                                <section className="text-right pb-2">
                                    {locationData.labels.savings && <p><strong>{locationData.labels.savings}</strong></p>}
                                </section>
                            </div>
                        </div>
                        <section>
                            {locationData.mainData && locationData.mainData.length > 0 &&
                                locationData.mainData.map((locList, locIdx) => (
                                    <div key={`locUnique ${locIdx}`} className="row">
                                        <div className="col-6">
                                            <section>
                                                {locList.location && <p>{locList.location}</p>}
                                            </section>
                                        </div>
                                        <div className="col-2">
                                            <section className="text-center">
                                                {locList.itenName && <p>{locList.itenName}</p>}
                                            </section>
                                        </div>
                                        <div className="col-2">
                                            <section className="text-center">
                                                {locList.weigth && <p>{locList.weigth}</p>}
                                            </section>
                                        </div>
                                        <div className="col-2">
                                            <section className="text-right">
                                                {locList.savings && <p>{locList.savings}</p>}
                                            </section>
                                        </div>
                                    </div>
                                ))}
                        </section>
                    </section>
                }
                {expandButton && expandButton.label &&
                    <div className="row p-0 m-0">
                        <div className="col p-0 m-0">
                            <section className="text-center pb-3">
                                <button className={style.alternative}>{expandButton.label}<i className="fas pl-4 fa-chevron-down"></i></button>
                            </section>
                        </div>
                    </div>
                }
            </section>
        )
    }
}

export default LocationDataSection