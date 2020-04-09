import React from 'react'
import style from '../Circular.scss'

class ImpactSection extends React.Component {
    render() {
        const { impact } = this.props
        if (!impact) return null
        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col p-4 m-0">
                        {impact.title && <span className={style.impa}>{impact.title}</span>}
                    </div>
                </div>
                <div className={`row ${style.grey} mb-5`}>
                    {impact.circles && impact.circles.length > 0 &&
                        impact.circles.map((ImpactCirc, ImpactIndex) => (
                            <div key={`impactUnique ${ImpactIndex}`} className="col p-4 m-0">
                                <section className={`text-center ${style.kolo}`}>
                                    <section className="text-center w-100">
                                        {ImpactCirc.number && <p className="mb-0"><strong className="h4">{ImpactCirc.number}</strong></p>}
                                        {ImpactCirc.items && <p className="mb-0">{ImpactCirc.items}</p>}
                                    </section>
                                </section>
                            </div>
                        ))}
                </div>
            </div>
        )
    }
}

export default ImpactSection
