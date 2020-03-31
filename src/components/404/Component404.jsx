import React, { Component } from 'react'
import s from './Component404.scss'

class Component404 extends Component {
    render() {
        return (
            <section className={`container ${s.containerMin} p-0`}>
                <div className="row">
                    <div className="col">
                        <h2 className="pb-4 mb-0 text-muted">Sorry, we couldn't find the page you're looking for! <i className="far ml-4 text-danger fa-hand-paper" /></h2>
                        <p className="pb-5">Try searching for new products above, or return to our Homepage.</p>
                        <button onClick={() => window.location.href = '/'} className={s.standardButton}>Homepage</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Component404