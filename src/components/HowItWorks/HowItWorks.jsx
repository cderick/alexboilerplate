import React from 'react'
import style from './HowItWorks.scss'

class HowItWorks extends React.Component {
    render() {
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col">
                            <section className="pt-4 pb-5">
                                <h2 className={style.using}>Using Globechain is Quick, Easy and Simple</h2>
                            </section>
                        </div>
                    </div>
                    <div className="container p-0">
                        <div className="row">
                            <div className="col m-0">
                                <section className={`${style.threebox} p-4`}>
                                    <h2 className={`h1 ${style.listh}`}>List</h2>
                                    <div className="row p-3 m-0">
                                        <div className="col-3 p-0 m-0">
                                            <i className="text-primary fa-2x fas fa-desktop"></i>
                                        </div>
                                        <div className="col-9 p-0 m-0">
                                            <p className={`${style.listtext} pb-4`}>Items are listed on the Globechain marketplace</p>
                                        </div>
                                    </div>
                                    <div className="row p-3 m-0">
                                        <div className="col-3 p-0 m-0">
                                            <i className="text-primary fa-2x far fa-envelope"></i>
                                        </div>
                                        <div className="col-9 p-0 m-0">
                                            <p className={style.listtext}>Alert emails are sent to all members who have registered and signed up to receive alerts</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col m-0">
                                <section className={`${style.threebox} p-4`}>
                                    <h2 className={`h1 ${style.listh}`}>Request</h2>
                                    <div className="row p-3 m-0">
                                        <div className="col-3 p-0 m-0">
                                            <i className="text-primary fa-2x fas fa-stopwatch"></i>
                                        </div>
                                        <div className="col-9 p-0 m-0">
                                            <p className={`${style.listtext} pb-4`}>Items are usually requested within 12-24 hours</p>
                                        </div>
                                    </div>
                                    <div className="row p-3 m-0">
                                        <div className="col-3 p-0 m-0">
                                            <i className="text-primary fa-2x far fa-comment-dots"></i>
                                        </div>
                                        <div className="col-9 p-0 m-0">
                                            <p className={style.listtext}>The listing member chooses who the items go to. The members chat and agree on a collection date and time</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col m-0">
                                <section className={`${style.threebox} p-4`}>
                                    <h2 className={`h1 ${style.listh}`}>Collect</h2>
                                    <div className="row p-3 m-0">
                                        <div className="col-3 p-0 m-0">
                                            <i className="text-primary fa-2x fas fa-shuttle-van"></i>
                                        </div>
                                        <div className="col-9 p-0 m-0">
                                            <p className={`${style.listtext} pb-4`}>Items are collected by requesting member</p>
                                        </div>
                                    </div>
                                    <div className="row p-3 m-0">
                                        <div className="col-3 p-0 m-0">
                                            <i className="text-primary fa-2x far fa-comment-alt"></i>
                                        </div>
                                        <div className="col-9 p-0 m-0">
                                            <p className={style.listtext}>Members fill out a feedback form. The information is used to create case studies and collect ESG data</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col">
                            <section className="pt-5 pb-5">
                                <h2 className={style.faqus}>FAQ's</h2>
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-11 m-auto p-3">
                            <section className={`p-5 m-0 ${style.freeto}`}>
                                <p><strong>Is it free to register?</strong><br />Yes! It is completely free to register on the marketplace and anyone can open an account.</p>

                                <p><strong>Do you have to pay for the item you request?</strong><br /> No. As a member you can request and receive the item for free, you are responsible for the collection and costs that are related to that. In some countries we offer
                            logistics via our courier partners at a special discount due to being Globechain members. This will be offered on the page of the item you are requesting.</p>

                                <p><strong>How does pricing for listing an item work?</strong><br /> If you are a charity, small business and/or an individual you can sign-up to be a PAYG (pay as you go) member. All companies and corporates sign-up for the annual
                            corporate membership.</p>

                                <p><strong>How does Pay As You Go work?</strong><br />PAYG is for members who will be listing a few items on an ad-hoc basis and is priced at £10 excl Vat for up to 100 of the same item.</p>

                                <p><strong>How does Corporate membership work?</strong><br /> A bespoke annual fee is charged which allows unlimited number of listings and unlimited number of items for a year.</p>

                                <p><strong>What data and information is in the report?</strong><br /> The report includes feedback and social, environmental and economic data.</p>

                                <p><strong>How do I setup an alert?</strong><br /> Upon registration, you can sign up for alerts for all new listed items by clicking the alerts checkbox. You can also edit and sign up for alerts in the Dashboard and Listing pages
                            by clicking or </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default HowItWorks
