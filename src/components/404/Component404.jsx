import React, { Component } from 'react'
import s from './Component404.scss'
import messages from './data.json'

class Component404 extends Component {
    render() {
        if(!messages) return null
        const { title, subtitle, button } = messages
        return (
            <section className={`container ${s.containerMin} p-0`}>
                <div className="row">
                    <div className="col">
                       {title && <h2 className="pb-4 mb-0 text-muted">{title} <i className="far ml-4 text-danger fa-hand-paper" /></h2>} 
                        {subtitle && <p className="pb-5">{subtitle}</p>}
                        {button && <button onClick={() => window.location.href = '/'} className={s.standardButton}>{button}</button>}
                    </div>
                </div>
            </section>
        )
    }
}

export default Component404