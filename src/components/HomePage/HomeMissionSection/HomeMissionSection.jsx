import React from 'react'
import style from '../HomePage.scss'
import logo from '../../../static/images/logowhite.png'

class HomeMissionSection extends React.Component {
    render() {
        const { heroBanner, howWeDoSection } = this.props
        if (!heroBanner || !howWeDoSection) return null
        return (
            <section>
                <div className={`container-fluid ${style.missionBack} pl-0 pr-0 pb-5`}>
                    <div className="container p-0">
                        <div className="row p-5 m-5">
                            <div className="col-8 m-auto">
                                {heroBanner.title && <h2 className="text-muted mb-3 text-center">{heroBanner.title}</h2>}
                                {heroBanner.subtitle && <h2 className="text-muted text-center pb-3"><strong>{heroBanner.subtitle}</strong></h2>}
                                {heroBanner.description && <h4 className="text-muted text-center pl-5 pr-5 pb-4">{heroBanner.description}</h4>}
                                <section className="w-100 text-center">
                                    <img src={logo} alt="whitelogo" />
                                </section>
                            </div>
                        </div>
                        {howWeDoSection && howWeDoSection.length > 0
                            && howWeDoSection.map((cv) => (
                                <div className="row pb-5">
                                    <div className="col">
                                        <section className={`${cv.class ? cv.class : ''} w-50`}>
                                            <p className={`mb-2 pb-0 ${cv.class ? 'text-right' : ''}`}><span className={`text-white d-inline-block ${cv.class ? `${style.backgroundRight} pl-5` : `${style.titleBackground} pr-5`} h3 pt-4 pb-4`}>{cv.title}</span></p>
                                            {cv.description && <p className="text-muted">{cv.shout ? <strong className={`h4 ${style.strongText}`}>{cv.shout} </strong> : ''}{cv.description}</p>}
                                        </section>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        )
    }
}

export default HomeMissionSection
