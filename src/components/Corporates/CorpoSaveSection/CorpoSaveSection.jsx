import React from 'react'
import style from '../Corporates.scss'
import oval from '../../../static/images/oval.png'
import companies from '../../../static/images/companies.svg'

class CorpoSaveSection extends React.Component {
    render() {
        return (
            <section>
                <div className="container p-5 m-5">
                    <div className="row p-5">
                        <div className="col-4 text-center">
                            <img className={style.glob} src={oval} alt="globe" />
                        </div>
                        <div className="col-8 pt-5 m-0">
                            <p className="font-weight-bold globtext">Globechain offers global internal reuse for corporates to share and reuse items internally instead of buying new items. Through internal reuse companies save money, reduces waste, logistics and optimizes stock and items for a longer period.</p>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col pl-5 pb-3 m-0">
                            <section className="text-left">
                                <h4 className={style.whywelove}>Why we love Globechain</h4>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0 mb-5">
                    <div className="row mb-5">
                        <div className="col p-2 m-0">
                            <section className={style.colorBox}>
                                <p><strong className={style.strongTextBox}>Save money</strong></p>
                                <p className="text-muted">Reduce waste costs</p>
                            </section>
                        </div>
                        <div className="col p-2 m-0">
                            <section className={style.colorBox}>
                                <p><strong className={style.strongTextBox}>Quick Reservation</strong></p>
                                <p className="text-muted">24 hours or less is our standard request time</p>
                            </section>
                        </div>
                        <div className="col p-2 m-0">
                            <section className={style.colorBox}>
                                <p><strong className={style.strongTextBox}>ESG Data</strong></p>
                                <p className="text-muted">Social impact data on the distribution of unneeded items for your reports</p>
                            </section>
                        </div>
                        <div className="col p-2 m-0">
                            <section className={style.colorBox}>
                                <p><strong className={style.strongTextBox}>Scalability</strong></p>
                                <p className="text-muted">We have a global solution and a growing network of members</p>
                            </section>
                        </div>
                        <div className="col p-2 m-0">
                            <section className={style.colorBox}>
                                <p><strong className={style.strongTextBox}>Brand image</strong></p>
                                <p className="text-muted">Reuse and making a social impact, adds credibility to your brand image</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-5">
                    <div className="row pt-5">
                        <div className="col pt-5">
                            <section className="text-center">
                                <h2 className="pb-3 text-dark">Trusted by Industry Leaders</h2>
                                <p className="text-muted pl-5 pr-5 pb-5 h4">Some of the companies that share our vision of being commercial with a conscience.</p>
                            </section>
                            <section className="pt-5 pb-5">
                                <img src={companies} alt="companies" />
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CorpoSaveSection
