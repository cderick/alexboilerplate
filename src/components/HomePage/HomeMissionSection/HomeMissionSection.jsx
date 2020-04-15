import React from 'react'
import style from '../HomePage.scss'
import logo from '../../../static/images/logowhite.png'
import homePageSection from './data'

class HomeMissionSection extends React.Component {
    render() {
        const { heroBanner, howWeDoSection, listingSection, sectorSection, benefitSection, contactUs } = homePageSection
        if (!homePageSection) return null
        return (
            <section>
                <div className={`container-fluid ${style.missionBack} pl-0 pr-0 pb-5`}>
                    <div className="container p-0">
                        <div className="row p-5 m-5">
                            <div className="col-8 m-auto">
                                <h2 className="text-muted mb-3 text-center">Our mission at Globechain</h2>
                                <h2 className="text-muted text-center pb-3"><strong>Is to divert 100 million tonnes of waste from landfill by 2025 and contribute to a better world.</strong></h2>
                                <h4 className="text-muted text-center pl-5 pr-5 pb-4">So far we have diverted <strong>6.1 million tonnes</strong> and saved charities <strong>over £2 million</strong> while helping numerous communities across the world.</h4>
                                <section className="w-100 text-center">
                                    <img src={logo} alt="whitelogo" />
                                </section>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <section className="w-50">
                                    <p className="mb-2 pb-0"><span className={`text-white d-inline-block ${style.titleBackground} h3 pt-4 pb-4 pr-5`}>How do we do this?</span></p>
                                    <p className="text-muted">Our marketplace allows anyone to list items that they no longer need to be reused by someone else. Our members get to request and collect the items for FREE! </p>
                                </section>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <section className={`float-right w-50`}>
                                    <p className="mb-2 pb-0 text-right"><span className={`text-white d-inline-block ${style.backgroundRight} h3 pt-4 pb-4 pl-5`}>Who is our marketplace for?</span></p>
                                    <p className="text-muted"><strong className={`h4 ${style.strongText}`}>Everyone!</strong> Charities, corporates, local communities, small businesses, shops, construction sites, hospitals and even friends and family.</p>
                                </section>
                            </div>

                            <div className="col">
                                <section className={`${cv.class ? cv.class : ''} w-50`}>
                                    <p className="mb-2 pb-0 text-right"><span className={`text-white d-inline-block ${style.backgroundRight} h3 pt-4 pb-4 pl-5`}>Who is our marketplace for?</span></p>
                                    {cv.description && <p className="text-muted">{cv.shout ? <strong className={`h4 ${style.strongText}`}>{cv.shout} </strong> : ''}{cv.description}</p>}
                                </section>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <section className="w-50">
                                    <p className="mb-2 pb-0"><span className={`text-white d-inline-block ${style.titleBackground} h3 pt-4 pb-4 pr-5`}>What does it cost?</span></p>
                                    <p className="text-muted">It is free for anyone to register and request items. We charge to list items and we have the following options listed below.</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default HomeMissionSection
