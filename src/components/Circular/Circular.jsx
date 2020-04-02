import React from 'react'
import style from './Circular.scss'
import galaxy from '../../static/images/galaxy.jpg'
import small from '../../static/images/small.png'
import office from '../../static/images/office.jpg'

class Circular extends React.Component {
    render() {
        return (
            <section>
                <div className={`container-fluid ${style.galax} p-0`}>
                    <div className="row p-0 m-0 position-relative">
                        <div className="col">
                            <h2 className={`pl-5 pt-3 pb-3 pr-5 ${style.circu} h1 bg-light`}>Circular Refurbishment</h2>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-10 p-5 m-0">
                            <p className={style.conduit}>The Conduit (in partnership with ISG), was converting a hotel into a private members club and wanted to reuse and repurpose as much as possible. Globechain was tasked to reuse the existing materials from the defit within the broader
                        total impact objective. The ethos of the club is to serve as a meeting place for a community of people passionate about driving sustainability and social change.</p>
                            <p>View <strong className="text-primary">ISG's sustainability report</strong>to learn more. Globechain is featured on page 59 of the report.</p>
                        </div>
                        <div className="col-2 p-3 m-0">
                            <img src={small} alt="smallpic" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-4 m-0">
                            <span className={style.impa}>Impact Made</span>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className={`row ${style.grey} mb-5`}>
                        <div className="col p-4 m-0">
                            <section className={`pl-4 pr-4 pt-5 pb-5 text-center ${style.kolo}`}>
                                <span><strong className="h4">3,000</strong><br />Items listed</span>
                            </section>
                        </div>
                        <div className="col p-4 m-0">
                            <section className={`pl-4 pr-4 pt-5 pb-5 text-center ${style.kolo}`}>
                                <span><strong className="h4">3,000</strong><br />Items listed</span>
                            </section>
                        </div>
                        <div className="col p-4 m-0">
                            <section className={`pl-4 pr-4 pt-5 pb-5 text-center ${style.kolo}`}>
                                <span><strong className="h4">3,000</strong><br />Items listed</span>
                            </section>
                        </div>
                        <div className="col p-4 m-0">
                            <section className={`pl-4 pr-4 pt-5 pb-5 text-center ${style.kolo}`}>
                                <span><strong className="h4">3,000</strong><br />Items listed</span>
                            </section>
                        </div>
                        <div className="col p-4 m-0">
                            <section className={`pl-4 pr-4 pt-5 pb-5 text-center ${style.kolo}`}>
                                <span><strong className="h4">3,000</strong><br />Items listed</span>
                            </section>
                        </div>
                        <div className="col p-4 m-0">
                            <section className={`pl-4 pr-4 pt-5 pb-5 text-center ${style.kolo}`}>
                                <span><strong className="h4">3,000</strong><br />Items listed</span>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row p-0 m-0 position-relative">
                        <div className={`col-6  p-5 mt-3 ${style.office}`}>
                            <h3 className={`pl-5 pt-3 pb-3 pr-5 ${style.offtext} bg-light`}>Items Collected</h3>
                        </div>
                        <div className="col-6 p-5">
                            <p>The building was 36,000sq ft and was undergoing a full refurbishment. We were able to list for reuse:</p>
                            <ul>
                                <li>Carpet</li>
                                <li>Ceiling tiles</li>
                                <li>Fire doors</li>
                                <li>Pedestals and office desks</li>
                                <li>Wooden flooring</li>
                                <li>Pillars</li>
                                <li>Marble</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row p-5 m-5">
                        <div className="col-8 m-auto">
                            <p className={`${style.commer} h4 p-3`}>"If a commercial space is looking to get rid of office furniture, rather than put it in a skip, you can take photos, list them, and people can come and collect them for free. People took lighting fixtures, electrical sockets - 34,000
                        kilos of materials went to trade schools and charities."</p>
                            <p className="text-center"><strong>Rowan Finnegan, Co-founder, The Conduit</strong></p>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Circular
