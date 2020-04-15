import React from 'react'
import style from '../Corporates.scss'
import oval from '../../../static/images/oval.png'
import companies from '../../../static/images/companies.svg'

class CorpoSaveSection extends React.Component {
    render() {
        const { global, why, trust } = this.props
        if (!global || !why || !trust) return null
        return (
            <section>
                <div className="container p-0">
                    <div className="row mt-5 mb-5 pb-4 pt-4">
                        <div className="col-10 m-auto">
                            <div className="row m-0 p-0">
                                <div className="col-4 text-center">
                                    <img className={style.glob} src={oval} alt="globe" />
                                </div>
                                <div className="col-8 pt-5 m-0">
                                    {global.description && <p className="font-weight-bold globtext">{global.description}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col m-0">
                            <section className="text-left pl-5 pb-3">
                                {why.title && <h4 className={style.whywelove}>{why.title}</h4>}
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0 mb-5">
                    <div className="row mb-5">
                        {why.card && why.card.length > 0 &&
                            why.card.map((saveCard, index) => (
                                <div key={`saveUnique ${index}`} className="col p-2 m-0">
                                    <section className={style.colorBox}>
                                        <p><strong className={style.strongTextBox}>{saveCard.name}</strong></p>
                                        <p className="text-muted">{saveCard.description}</p>
                                    </section>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="col pt-5">
                            <section className="text-center">
                                {trust.title && <h2 className="pb-3 text-dark">{trust.title}</h2>}
                                {trust.description && <p className="text-muted pl-5 pr-5 pb-5 h4">{trust.description}</p>}
                            </section>
                            <section className="pt-5 pb-5">
                                <img src={companies} alt="companies" />
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CorpoSaveSection
