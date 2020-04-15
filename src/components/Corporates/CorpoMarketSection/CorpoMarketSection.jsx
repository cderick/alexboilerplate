import React from 'react'
import style from '../Corporates.scss'

class CorpoMarketSection extends React.Component {
    render() {
        const { market } = this.props
        if (!market) return null
        const { marketplace, circles } = market
        return (
            <section>
                <div className="row">
                    <div className="col-6 p-5 m-0">
                        <section>
                            {marketplace.title && <h3 className={`${style.reuse} pb-4`}>{marketplace.title}</h3>}
                            {marketplace.description && <p className="text-muted">{marketplace.description}</p>}
                        </section>
                    </div>
                    <div className="col-6 p-5 m-0">
                        <div className="row p-0 m-0">
                            {circles && circles.length > 0 &&
                                circles.map((markCirc, index) => (
                                    <div key={`circUnique ${index}`} className="col-4 pb-4 m-0 w-100">
                                        <section className={`${style.roundBlue} ${style[markCirc.stylename]}`}>
                                            <p className="mb-0 pb-0"><strong>Construction</strong></p>
                                        </section>
                                    </div>
                                ))}

                            <div className="col-4 pb-4 m-0 w-100">
                                <section className={`${style.roundBlue} ${style.hotels}`}>
                                    <p className="mb-0 pb-0"><strong>Hotels</strong></p>
                                </section>
                            </div>
                            <div className="col-4 pb-4 m-0 w-100">
                                <section className={`${style.roundBlue} ${style.offices}`}>
                                    <p className="mb-0 pb-0"><strong>Offices</strong></p>
                                </section>
                            </div>
                            <div className="col-4 pb-4 m-0 w-100">
                                <section className={`${style.roundBlue} ${style.medical}`}>
                                    <p className="mb-0 pb-0"><strong>Medical</strong></p>
                                </section>
                            </div>
                            <div className="col-4 pb-4 m-0 w-100">
                                <section className={`${style.roundBlue} ${style.restaurants}`}>
                                    <p className="mb-0 pb-0"><strong>Restaurants</strong></p>
                                </section>
                            </div>
                            <div className="col-4 pb-4 m-0 w-100">
                                <section className={`${style.roundBlue} ${style.retail}`}>
                                    <p className="mb-0 pb-0"><strong>Retail</strong></p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CorpoMarketSection
