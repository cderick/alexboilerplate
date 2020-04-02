import React from 'react'
import style from './Restaurants.scss'

class Restaurants extends React.Component {
    render() {
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-5">
                            <section className="pt-5 pb-5">
                                <h2 className={style.reducing}>Reducing waste in the<br />Restaurant sector</h2>
                            </section>
                        </div>
                        <div className="col-7 p-4 m-0">
                            <div className="row m-0 p-0">
                                <div className="col p-0 m-0">
                                    <section className="text-left">
                                        <span className={style.probsol}>The problem</span>
                                    </section>
                                    <section>
                                        <p className={`${style.probtext} pt-3`}>We talk a lot about food waste in the restaurant sector, but as with many types of businesses, opportunities for reducing waste extend beyond the obvious.</p>
                                        <p className={`${style.probtext} pt-3`}>Because of the high standards consumers have come to expect from restaurants, refurbishments happen relatively frequently, often before fixtures and furniture have reached the end of their lifecycle. So what’s to be done
                                    with the older items when new ones are on their way? Often, they end up becoming waste by being broken down into small units.</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <section className={style.orangeback}>
                                <p className="h4"><strong>What can be listed</strong></p>
                                <p className="pt-4">What you list on Globechain is pretty limitless (with the exceptions you’ll find on our help centre). Some common items from restaurants are:</p>
                                <ul className={style.listetexto}>
                                    <li>Dining chairs </li>
                                    <li>Dining tables</li>
                                    <li>Office furniture</li>
                                    <li>Storage cabinets</li>
                                    <li>Decor</li>
                                    <li>Fridges and freezers</li>
                                    <li>Microwaves</li>
                                    <li>Cookers and ovens</li>
                                    <li>Light fixtures</li>
                                    <li>Computers and TV screens</li>
                                    <li>Building materials</li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-7 pl-4 pr-4 pt-0 pb-4 m-0">
                            <div className="row m-0 p-0">
                                <div className="col p-0 m-0">
                                    <span className={style.probtext}><strong>Some of the items that restaurants might incinerate or send to landfill are:</strong>
                                        <ul className={style.ultext}>
                                            <li> Dining furniture (tables and chairs)</li>
                                            <li>Appliances and electrical equipment</li>
                                            <li>Crockery, glassware and other tableware</li>
                                            <li>Serving and holding equipment</li>
                                            <li>Office furniture</li>
                                            <li>Plants and plots</li>
                                            <li>Decor</li>
                                        </ul>
                                    </span>
                                    <hr className="mb-5" />
                                </div>
                            </div>
                            <div className="row m-0 p-0">
                                <div className="col p-0 m-0">
                                    <section className="text-left">
                                        <span className={style.probsol}>The solution</span>
                                    </section>
                                    <section>
                                        <p className={`${style.probtext} pt-4`}>Many of these items are replaced simply for a renewed style, so the items tend to be in decent shape and are easily reusable by charities, small business (such as cafes) and individuals.<br /> Restaurant furniture and equipment
                                    listed on Globechain is often picked up by charities that focus on housing and homelessness, or are collected by charity shops that then re-sell the items to raise funds.<br /> When a company lists these surplus materials
                                                on Globechain within 24 hours the first requests are made and they get collected. We gather information on where the materials went, what social impact they had, what the weight of the product was and more. You are
                                                able to use this data towards your sustainability reports and earn BREEAM (UK) or LEED (Americas) points for your sustainable practices.
                                </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Restaurants
