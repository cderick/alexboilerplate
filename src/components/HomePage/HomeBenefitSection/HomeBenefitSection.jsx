import React from 'react'
import style from '../HomePage.scss'
import homePageSection from './data'



class HomeBenefitSection extends React.Component {
    render() {
        const { heroBanner, howWeDoSection, listingSection, sectorSection, benefitSection, contactUs } = homePageSection
        if (!homePageSection) return null
        return (
            <section>
                <div className="row">
                    <div className="col m-0">
                        <section className="bg-white p-4">
                            <section className={style.boxTitleColor}>
                                <h4 className="mb-0 pb-0">Pay as you go</h4>
                            </section>
                            <section className={style.wrapBox}>
                                <p className="pb-0 mb-0"><strong>For one off and ad hoc listings</strong></p>
                            </section>
                            <section className={style.wrapBox}>
                                <p className="text-muted pb-0 mb-0">£10 per listing of up to 100 of the same item (eg. £10 to list 100 chairs)</p>
                            </section>
                            <section className="w-100 text-center">
                                <span className={style.butts}>Sign up</span>
                            </section>
                        </section>
                    </div>
                    <div className="col m-0">
                        <section className="bg-white p-4">
                            <section className={style.boxTitleColor}>
                                <h4 className="mb-0 pb-0">Annual membership</h4>
                            </section>
                            <section className={style.wrapBox}>
                                <p className="pb-0 mb-0"><strong>For multiple and unlimited listings</strong></p>
                            </section>
                            <section className={style.wrapBox}>
                                <p className="text-muted pb-0 mb-0">Bespoke quote based on requirements</p>
                            </section>
                            <section className="w-100 text-center">
                                <span className={style.butts}>Let's talk</span>
                            </section>
                        </section>
                    </div>
                    <div className="col m-0">
                        <section className="bg-white p-4">
                            <section className={style.boxTitleColor}>
                                <h4 className="mb-0 pb-0">Internal Reuse</h4>
                            </section>
                            <section className={style.wrapBox}>
                                <p className="pb-0 mb-0"><strong>A global solution for companies to share internally</strong></p>
                            </section>
                            <section className={style.wrapBox}>
                                <p className="text-muted pb-0 mb-0">Bespoke quote based on requirements</p>
                            </section>
                            <section className="w-100 text-center">
                                <span className={style.butts}>Let's talk</span>
                            </section>
                        </section>
                    </div>
                </div>
                <div className='container p-0'>
                    <div className='row p-0 m-0 position-relative'>
                        <div className="col-6 p-0 m-0">
                            <h4 className="text-muted pt-5 pb-3">Sectors</h4>
                            <p className="text-muted">We work with anyone from small business, large corporates to global enterprises</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row p-0 m-0">
                                <div className="col-4 p-4 m-0 w-100">
                                    <section className={`${style.roundBlue} ${style.construction}`}>
                                        <p className="mb-0 pb-0"><strong>Construction</strong></p>
                                    </section>
                                </div>
                                <div className="col-4 p-4 m-0 w-100">
                                    <section className={`${style.roundBlue} ${style.hotels}`}>
                                        <p className="mb-0 pb-0"><strong>Hotels</strong></p>
                                    </section>
                                </div>
                                <div className="col-4 p-4 m-0 w-100">
                                    <section className={`${style.roundBlue} ${style.offices}`}>
                                        <p className="mb-0 pb-0"><strong>Offices</strong></p>
                                    </section>
                                </div>
                                <div className="col-4 p-4 m-0 w-100">
                                    <section className={`${style.roundBlue} ${style.medical}`}>
                                        <p className="mb-0 pb-0"><strong>Medical</strong></p>
                                    </section>
                                </div>
                                <div className="col-4 p-4 m-0 w-100">
                                    <section className={`${style.roundBlue} ${style.restaurants}`}>
                                        <p className="mb-0 pb-0"><strong>Restaurants</strong></p>
                                    </section>
                                </div>
                                <div className="col-4 p-4 m-0 w-100">
                                    <section className={`${style.roundBlue} ${style.retail}`}>
                                        <p className="mb-0 pb-0"><strong>Retail</strong></p>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-5">
                            <h4 className="text-muted pt-5 pb-3">Benefits</h4>
                            <ul className={style.myUl}>
                                <li><span className="text-muted">Save money by minimizing waste disposal costs</span></li>
                                <li><span className="text-muted">Make a social impact</span></li>
                                <li><span className="text-muted">Optimise stock usage and inventory</span></li>
                                <li><span className="text-muted">Downloadable data reports</span></li>
                                <li><span className="text-muted">ESG data (Economic, Social, Governance data)</span></li>
                                <li><span className="text-muted">Dedicated support</span></li>
                                <li><span className="text-muted">Multiple accounts under one company</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default HomeBenefitSection
