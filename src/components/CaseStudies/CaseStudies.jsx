import React from 'react'
import style from './CaseStudies.scss'
import conduit from '../../static/images/conduit.svg'
import nando from '../../static/images/nandos.svg'
import raddi from '../../static/images/raddison.svg'
import crown from '../../static/images/crown.svg'

class CaseStudies extends React.Component {
    render() {
        return (
            <section className="w-100">
                <div className="container p-0">
                    <div className="row">
                        <div className={`col ${style.collu} m-2 p-4`}>
                            <section className="text-left">
                                <img className={style.logopic} src={conduit} alt="logo1" />
                            </section>
                            <section className={`${style.textus} pt-3`}>
                                <p>Globechain was tasked to reuse the existing materials from the defit within the broader total impact objective. 100% of the items listed were collected, totalling over 70,000 kilos of items being diverted from landfill.</p>
                            </section>
                            <section className="text-right">
                                <span className={`${style.butta} m-0`}>Read more</span>
                            </section>
                        </div>
                        <div className={`col ${style.collu} m-2 p-4`}>
                            <section className="text-left">
                                <img className={style.logopic} src={nando} alt="logo2" />
                            </section>
                            <section className={`${style.textus} pt-3`}>
                                <p>By listing furniture and equipment they are no longer using, Nando's have been able to save charities over £37,000 and have made 82,300 kilos of items available for reuse.</p>
                            </section>
                            <section className="text-right">
                                <span className={style.butta}>Read more</span>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className={`col ${style.collu} m-2 p-4`}>
                            <section className="text-left">
                                <img className={style.logopic} src={raddi} alt="logo3" />
                            </section>
                            <section className={`${style.textus} pt-3`}>
                                <p>The Edwardian, Radisson Blu hotel in London chose to take a step towards sustainability by listing unneeded items for reuse. Many of their items went on to support housing and family services charities, schools and orphanages in
                                    Sierra Leone, as well as upcycling organisations.
                        </p>
                            </section>
                            <section className="text-right">
                                <span className={style.butta}>Read more</span>
                            </section>
                        </div>
                        <div className={`col ${style.collu} m-2 p-4`}>
                            <section className="text-left">
                                <img className={style.logopic} src={crown} alt="logo4" />
                            </section>
                            <section className={`${style.textus} pt-3`}>
                                <p>Being in the luxury hotel business means the highest standards must be kept. It also means that refurbishments and replacement of accessories and fixtures are a regular occurrence. Instead of the unneeded items becoming waste or
                            being recycled, the Westbury Mayfair chooses…</p>
                            </section>
                            <section className="text-right">
                                <span className={style.butta}>Read more</span>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CaseStudies
