import React from 'react'
import style from './AboutUs.scss'
import oval from '../../static/images/oval.png'

class AboutUs extends React.Component {
    render() {
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-5">
                            <section className="p-5">
                                <h2 className={style.about}>Globechain is a reuse marketplace that connects companies with charities, small businesses and individuals to redistribute unneeded items generating social impact data. </h2>
                            </section>
                        </div>
                        <div className="col-7 p-4 m-0">
                            <div className="row m-0 p-0">
                                <div className="col p-0 m-0">
                                    <section className="text-left">
                                        <span className={style.whyuse}>Why use globechain</span>
                                    </section>
                                    <section>
                                        <p className={`${style.textos} pt-4`}>We currently have <strong>over 10,000 members</strong> and items listed on our marketplace are typically reserved for collection between 12 - 24 hours. It is quick, cost effective and simple solution.</p>
                                    </section>
                                    <hr className="mt-4 mb-4" />
                                </div>
                            </div>
                            <div className="row m-0 p-0">
                                <div className="col p-0 m-0">
                                    <section>
                                        <p className={`${style.textos} font-weight-bold`}>We work across all sectors including retail, hotels, restaurants, construction, medical and commercial.</p>
                                        <p className={style.textos}>We believe anything that can be reused can be listed and have a successful proven track record of finding homes for all the items on our marketplace.</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3 mb-3" />
                    <div className="container p-0">
                        <div className="row">
                            <div className="col text-center">
                                <img className={style.glob} src={oval} alt="globe" />
                            </div>
                            <div className="col pt-5 m-0">
                                <p className={`font-weight-bold ${style.globtext}`}>Globechain is based in
                            <span className={style.citicolor}>UK, Spain, UAE</span> and
                            <span className={style.citicolor}>New York</span> with the ability to providing a global internal sharing platform.</p>
                            </div>
                            <div className={`col ${style.yeloback} p-2`}>
                                <p className={style.award}>As an award-winning leader in the circular economy, our marketplace is our way of being Commercial with a Conscience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default AboutUs
