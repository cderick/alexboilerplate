import React from 'react'
import style from '../Restaurants.scss'

class FirstSection extends React.Component {
    render() {
        const { firstSection } = this.props
        if (!firstSection) return null
        return (
            <div className="row">
                <div className="col-5">
                    <section className="pt-5 pb-5">
                        {firstSection.titleOne && <h2 className={style.reducing}>{firstSection.titleOne}</h2>}
                        {firstSection.titleTwo && <h2 className={style.reducing}>{firstSection.titleTwo}</h2>}
                    </section>
                </div>
                <div className="col-7 p-4 m-0">
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                {firstSection.card.title && <span className={style.probsol}>{firstSection.card.title}</span>}
                            </section>
                            <section>
                                {firstSection.card.subtitle && <p className={`${style.probtext} pt-3`}>{firstSection.card.subtitle}</p>}
                                {firstSection.card.description && <p className={`${style.probtext} pt-3`}>{firstSection.card.description}</p>}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstSection
