import React, { Component } from 'react'
import style from './PrivacyPolicy.scss'
import privacyContent from './PrivacyPolicy.json'

class PrivacyPolicy extends Component {
    render() {
        if (!privacyContent) return null
        const { title, box, button } = privacyContent
        return (
            <section className="pb-5">
                 <div className="container p-0">
                <div className="row">
                    <div className="col">
                        <section className="pt-5">
                            {privacyContent.title && <h2 className="mb-5 text-muted">{privacyContent.title}</h2>}
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <section className={`p-5 m-0 ${style.contGray}`}>
                            {box && box.length > 0 &&
                                box.map((content) => (
                                    <p>
                                        {content.style === 'bold' ?
                                            <strong>{content.text}</strong>
                                            : content.style === 'italic' ?
                                                <em>{content.text}</em>
                                                : <span classname="text-muted">{content.text}</span>}</p>
                                ))}
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-right">
                        <section className="pt-5 pb-3">
                            {button && <button onClick={() => window.location.href = '/'} className={style.standardButton}>{button}</button>}
                        </section>
                    </div>
                </div>
            </div>
            </section>
           
        )
    }
}

export default PrivacyPolicy