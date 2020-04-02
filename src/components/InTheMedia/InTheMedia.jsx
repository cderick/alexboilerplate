import React from 'react'
import style from './InTheMedia.scss'
import ccm from '../../static/images/ccm.svg'
import ceo from '../../static/images/ceo.svg'
import logo from '../../static/images/logo.svg'
import picone from '../../static/images/pic1.svg'
import pictwo from '../../static/images/pic2.svg'

class InTheMedia extends React.Component {
	render() {
		return (
			<section>
                <div className="container p-0">
            <div className="row">
                <div className="col-5">
                    <section className="p-5">
                        <h2 className={`${style.stay} pb-3`}>To stay up to date with the latest Globechain news follow us on our social media channels.</h2>
                        <p className="pb-3">We share how our marketplace is leading the way globally while having fun, working hard and making an impact.</p>
                        <p><i className="fab text-primary mr-2 fa-instagram"></i><i className="fab text-primary mr-2 fa-facebook-f"></i><i className="fab text-primary mr-2 fa-twitter"></i><i className="fab text-primary mr-2 fa-linkedin"></i><i className="fab text-primary mr-2 fa-soundcloud"></i></p>
                    </section>
                    <h2 className="p-5 m-0">Awards</h2>
                    <section className={`${style.awargray} ml-5 mb-3 mr-5`}>
                        <span className={style.yearback}>2020</span>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Top European Fintech startups to watch in 2020</p>
                    </section>
                    <section className={`${style.awargray} ml-5 mb-3 mr-5`}>
                        <span className={style.yearback}>2019</span>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">May Al-Karooni recognized as top 50 women leading in Real Estate</p>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Regional Social Entrepreneur award</p>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Hot Ten 2019</p>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Forbes Start Ups to Watch 2019</p>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Commercial Waste Reduction Initiative</p>
                    </section>
                    <section className={`${style.awargray} ml-5 mb-3 mr-5`}>
                        <span className={style.yearback}>2018-2016</span>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Winner Business Green Leaders Circular Economy of the Year</p>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Dell Circular Economy People’s Choice Award</p>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Winner Mexico Accelerator Programme</p>
                        <img src={logo} alt="logo1" />
                        <p className="pt-2">Winner Nordic Innovation Launch Awards</p>
                    </section>
                </div>
                <div className="col-7 p-4 m-0">
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                <span className={style.mediapieces}>Latest media pieces</span>
                                <p className="text-primary font-weight-bold pt-3  mb-0 pb-0">Disruptive CEO Nation</p>
                                <span className={style.smaltexto}>16 March, 2020</span>
                            </section>
                            <div className="row">
                                <div className="col-3 p-3 m-0">
                                    <img src={ceo} alt="ceo" />
                                </div>
                                <div className="col-9 pl-4 pt-3 m-0">
                                    <p className={style.othertext}>May Al-Karooni is the CEO & founder of Globechain, a reuse marketplace that connects corporates to charities, small businesses and people to redistribute unneeded items, generating social impact data.</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="col p-0 m-0">
                        <section className="text-left">
                            <p className="text-primary font-weight-bold pt-3 pb-0 mb-0">Top Trends In Sustainable Fashion Today</p>
                            <span className={style.smaltexto}>11 Febuary, 2020</span>
                        </section>
                        <div className="container">
                            <div className="row">
                                <div className="col p-0 m-0">
                                    <img className="img-fluid" src={picone} alt="picone" />
                                    <p className={`${style.othertext} pt-2`}>Sustainability in fashion is a hot topic, but many consumers still want fast fashion</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                <p className="text-primary font-weight-bold pt-3 mb-0 pb-0">Waste Not, Want Not</p>
                                <span className={style.smaltexto}>January, 2020</span>
                            </section>
                            <div className="row">
                                <div className="col-3 p-3 m-0">
                                    <img src={ccm} alt="ccim" />
                                </div>
                                <div className="col-9 pl-4 pt-3 m-0">
                                    <p className={style.othertext}>According to the Environmental Protection Agency, three million tons of usable office furniture end up in landfills every year. In this glut of others' trash, Globechain Founder May Al-Karooni saw a trove of hidden
                                        treasure. </p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                <p className="text-primary font-weight-bold pt-3 mb-0 pb-0">The companies delivering on sustainability</p>
                                <span className={style.smaltexto}>29 January, 2020</span>
                            </section>
                            <div className="container">
                                <div className="row">
                                    <div className="col p-0 m-0">
                                        <img className="img-fluid" src={pictwo} alt="pictwo" />
                                        <p className={`${style.othertext} pt-2`}>IBM’s Roberto Battistoni highlights the businesses championing sustainable consumerism and the role emerging technologies can play.</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                <p className="text-primary font-weight-bold pt-3 mb-0 pb-0">The Woman Laying Waste to Waste</p>
                                <span className={style.smaltexto}>January, 2020</span>
                            </section>
                            <div className="row">
                                <div className="col-3 p-3 m-0">
                                    <img src={ccm} alt="ccim" />
                                </div>
                                <div className="col-9 pl-4 pt-3 m-0">
                                    <p className={style.othertext}>May Al-Karooni is the founder of Globechain.com, a reuse marketplace that connects corporates to charities and small and midsized businesses to reuse and redistribute unneeded items, particularly construction and building
                                        fit-out materials, and generates social impact data for its members.</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
			</section >
		)
	}
}

export default InTheMedia
