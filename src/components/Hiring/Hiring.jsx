import React from 'react'
import style from './Hiring.scss'
import hiringContent from './Hiring.json'

class Hiring extends React.Component {
    render() {
        if (!hiringContent) return null
        const { title, card } = hiringContent
        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col-5">
                        <section className="p-5">
                            {title && <h2 className={style.hiri}>{title}</h2>}
                        </section>
                    </div>
                    <div className="col-7 p-4 m-0">
                        {card && card.length > 0 &&
                            card.map((job, index) => (
                                <div key={`cardUnique${index}`} id={`cardUnique${index}`} className="row m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <section className="text-left">
                                            {job.title && <span className={style.jobi}>{job.title}</span>}
                                        </section>
                                        <section>
                                            {job.subtitle && <p className={style.texto}>{job.subtitle}</p>}
                                        </section>
                                        <section className="text-right p-2">
                                            {job.button && <span className={style.buttuno}>{job.button}</span>}
                                        </section>
                                        <hr className="mt-4 mb-4" />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hiring
