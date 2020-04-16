import React, { Component } from 'react'
import style from './ActivateCompany.scss'
import messages from './data.json'

class ActivateCompany extends Component {
    render() {
        if(!messages) return null
        const { title, subtitle } = messages
        return (
            <section className={`container ${style.containerMin} p-0`}>
                <div className="row pt-5">
                    <div className="col">
                       {title && <h2 className="pb-4 mb-0">{title}</h2>} 
                        {subtitle && <p className="pb-5">{subtitle}</p>}
                    </div>
                </div>
            </section>
        )
    }
}

export default ActivateCompany