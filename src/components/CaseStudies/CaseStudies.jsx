import React from 'react'
import style from './CaseStudies.scss'
import cases from './CaseStudies.json'

class CaseStudies extends React.Component {
    render() {
        if (!cases) return null
        const { card } = cases
        return (
            <section className="w-100">
                <div className="container p-0">
                    <div className="row">
                        {card && card.length > 0 &&
                            card.map((study, numb) => (
                                <div key={`studyUniquekey${numb}`} className="col-6">
                                    <section className={`${style.collu} w-100 m-2 p-4`}>
                                        <section className="text-left">
                                            <img className={style.logopic} src={require(`../../static/images/${study.logo}`)} alt={study.logo} />
                                        </section>
                                        <section className={`${style.textus} pt-3`}>
                                            {study.description && <p>{study.description}</p>}
                                        </section>
                                        <section className="text-right">
                                            {study.button && <span className={style.butta}>{study.button}</span>}
                                        </section>
                                    </section>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        )
    }
}

export default CaseStudies
