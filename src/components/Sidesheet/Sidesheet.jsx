import React, { Component } from 'react'
import s from './Sidesheet.scss'

class Sidesheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSidesheet: false,
            notificationPill: true

        }
        this.toggleSidesheet = this.toggleSidesheet.bind(this)
        this.togglePills = this.togglePills.bind(this)
    }

    toggleSidesheet() {
        const { showSidesheet } = this.state
        this.setState({
            showSidesheet: !showSidesheet
        })
    }

    togglePills(param) {
        this.setState({
            notificationPill: param ? true : false
        })
    }

    render() {
        const { showSidesheet, notificationPill } = this.state
        return (
            <section className="w-100">
                <section className={`container-fluid position-relative ${s.minContainer} p-0`}>
                    <section className={showSidesheet ? s.overlay : ''}></section>
                    <div className="row bg-light m-0 p-0">
                        <div className="col text-right pl-0 pr-0">
                            <i onClick={this.toggleSidesheet} className={`fab text-primary mr-3 fa-2x p-4 fa-youtube ${s.cursorPointer}`}></i>
                        </div>
                    </div>
                    <section className="w-100">
                        {showSidesheet &&
                            <section className={s.sideCont}>
                                <section className="w-100 h-100 position-relative">
                                    <section className="w-100 text-center pt-3 bg-white pb-3">
                                        <span className={`${s.invisibleButton} ${s.userLogged}`}><i className={`fas fa-user mr-2 ${s.mainBlueColor}`} /> Welcome May</span>
                                        <span className={s.mainBlueColor}><i className="ml-5 mr-2 fas fa-box-open" /></span>
                                        <span onClick={this.toggleSidesheet} className={s.mainBlueColor}><i className="ml-4 fas fa-list-ul" /></span>
                                    </section>
                                    <section className="w-100 text-center pt-3 pb-3 bg-light">
                                        <span onClick={() => this.togglePills(true)} className={`${s.pillListings} ${notificationPill ? s.pillActive : ''}`}>Notifications</span>
                                        <span onClick={() => this.togglePills()} className={`${s.pillRequests} ${notificationPill ? '' : s.pillActive}`}><strong>Account</strong></span>
                                    </section>
                                    {!notificationPill &&
                                        <section className="text-left pb-4 pl-4 pr-4 pt-3">
                                            <p className={`${s.dashBackground} mb-0 pl-3 pt-2 pb-2`}>Dashboard</p>
                                            <p className={`${s.listingBack} mb-0 pl-3 pt-2 pb-2`}>My listings</p>
                                            <p className={`${s.listingBack} ${s.corners} mb-0 pl-3 pt-2 pb-2`}>My requests</p>
                                        </section>
                                    }
                                    {notificationPill &&
                                        <section className={`${s.notificatContainer} p-4`}>
                                            <section className="w-100 pb-4">
                                                <p className={`${s.nameBackground} mb-0 pl-3 pt-2 pb-2`}>Waitlist</p>
                                                <p className={`${s.descripBackground} mb-0 text-muted pt-2 pb-2 pl-3 pr-3`}><small><a className="text-muted" href="/">You've been added to a Waitlist for the product.name you request. We'll let you know if the items become available again.</a></small></p>
                                            </section>
                                            {/* {last one no pb-4} */}
                                            <section className="w-100">
                                                <p className={`${s.nameBackground} mb-0 pl-3 pt-2 pb-2`}>Feijao</p>
                                                <p className={`${s.descripBackground} mb-0 text-muted pt-2 pb-2 pl-3 pr-3`}><small><a className="text-muted" href="/">You've been added to a Waitlist for the product.name you request. We'll let you know if the items become available again.</a></small></p>
                                            </section>
                                        </section>
                                    }
                                    {!notificationPill &&
                                        <section className={`text-center ${s.sidePosition} pt-3 pb-3 bg-white`}>
                                            <section className="w-100 d-flex pb-3">
                                                <button className={`ml-4 mr-4 ${s.standardButton} w-100`}>View reports</button>
                                            </section>
                                            <section className="w-100 d-flex pb-3">
                                                <button className={`ml-4 mr-4 ${s.standardButton} w-100`}>Manage account</button>
                                            </section>
                                            {/* {last one no pb-3} */}
                                            <section className="w-100 d-flex">
                                                <button className={`ml-4 mr-4 ${s.standardButton} w-100 ${s.alternative}`}>Log out</button>
                                            </section>
                                        </section>
                                    }
                                </section>
                            </section>
                        }
                    </section>
                </section>
            </section>

        )
    }
}

export default Sidesheet