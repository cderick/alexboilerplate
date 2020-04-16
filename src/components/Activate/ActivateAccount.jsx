import React, { Component } from 'react'
import style from './ActivateAccount.scss'
import messages from './dataActivate.json'

class ActivateAccount extends Component {
    render() {
        if(!messages) return null
        const { title, subtitle } = messages
        return (
            <section className={`container ${style.containerMin} p-0`}>
                <div className="row pt-5">
                    <div className="col">
                       {title && <h2 className="pb-4 mb-0 text-muted">{title}<i class="fas ml-3 fa-check-circle text-success"></i></h2>} 
                        {subtitle && <p className="pb-5">{subtitle}</p>}
                    </div>
                </div>
            </section>
        )
    }
}

export default ActivateAccount