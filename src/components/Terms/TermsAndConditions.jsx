import React, { Component } from 'react'
import style from './TermsAndConditions.scss'
import termsSection from './data'

class TermsAndConditions extends Component {
    render() {
        if (!termsSection) return null
        const { title, grayBox} = termsSection
        return (
            <section className="pb-5">
                 <div className="container p-0">
                <div className="row">
                    <div className="col">
                        <section className="pt-5">
                            {title && <h2 className="mb-5 text-muted">{title}</h2>}
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <section className={`p-5 m-0 ${style.contentGray}`}>
                            {grayBox && grayBox.length > 0 &&
                                grayBox.map((content) => (

                                    <p>
                                        {content.style === 'bold' ? 
                                            <strong>{content.text}</strong> 
                                                : <span classname="text-muted">{content.text}</span>
                                }</p>
                                    ))}
                        </section>
                    </div>
                </div>
            </div>
            </section>
           
        )
    }
}

export default TermsAndConditions