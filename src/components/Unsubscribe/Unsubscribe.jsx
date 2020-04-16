import React, { Component } from 'react'
import style from './Unsubscribe.scss'
import messages from './Unsubscribe.json'

class Unsubscribe extends Component {
    render() {
        if (!messages) return null
        const { title, email, inputPlaceholder, buttonOne, buttonTwo } = messages
        return (
            <section className={`container ${style.containerMin} p-0`}>
                <div className="row pt-5">
                    <div className="col">
                        {title && <h3 className="pb-5 mb-0 text-muted">{title}</h3>}
                        <div className="row p-0 m-0 ">
                            <div className="col-4 m-0 p-0">
                                {email && <p className="pb-5 pt-3">{email}</p>}
                            </div>
                            <div className="col-6 m-0 p-0">
                                <input type="text" placeholder={inputPlaceholder} className={style.emailInput} />
                            </div>
                        </div>
                        <div className="row p-0 m-0 ">
                            <div className="col-10 text-right m-0 p-0">
                            {buttonOne && <button className={style.standardButton}>{buttonOne}</button>}
                            {buttonTwo && <button className={`ml-4 ${style.standardButton} ${style.alternative}`}>{buttonTwo}</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Unsubscribe