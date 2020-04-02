import React from 'react'
import style from './Hiring.scss'

class Hiring extends React.Component {
	render() {
		return (
			<div className="container p-0">
            <div className="row">
                <div className="col-5">
                    <section className="p-5">
                        <h2 className={style.hiri}>We are hiring</h2>
                    </section>
                </div>
                <div className="col-7 p-4 m-0">
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                <span className={style.jobi}>Job title</span>
                            </section>
                            <section>
                                <p className={style.texto}>Brief overview of position and then have ability to click read more and it will open on its own page which will have all details and email link to contact us form</p>
                            </section>
                            <section className="text-right p-2">
                                <span className={style.buttuno}>Find out more</span>
                            </section>
                            <hr className="mt-4 mb-4"/>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                <span className={style.jobi}>Job title</span>
                            </section>
                            <section>
                                <p className={style.texto}>Brief overview of position and then have ability to click read more and it will open on its own page which will have all details and email link to contact us form</p>
                            </section>
                            <section className="text-right p-2">
                                <span className={style.buttuno}>Find out more</span>
                            </section>
                            <hr className="mt-4 mb-4"/>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col p-0 m-0">
                            <section className="text-left">
                                <span className={style.jobi}>Job title</span>
                            </section>
                            <section>
                                <p className={style.texto}>Brief overview of position and then have ability to click read more and it will open on its own page which will have all details and email link to contact us form</p>
                            </section>
                            <section className="text-right p-2">
                                <span className={style.buttuno}>Find out more</span>
                            </section>
                            <hr className="mt-4 mb-4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		)
	}
}

export default Hiring
