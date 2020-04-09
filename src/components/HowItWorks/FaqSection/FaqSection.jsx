import React from 'react'
import style from '../HowItWorks.scss'

class FaqSection extends React.Component {
    render() {
        const { faq } = this.props
        if (!faq) return null
        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col">
                        <section className="pt-5 pb-5">
                            {faq.title && <h2 className={style.faqus}>{faq.title}</h2>}
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <section className={`p-5 m-0 ${style.freeto}`}>
                            {faq.faqQues && faq.faqQues.length > 0 &&
                                faq.faqQues.map((faqQuestions, faqIndex) => (
                                    <section key={`faqUnique ${faqIndex}`}>
                                        {faqQuestions.question && <p><strong>{faqQuestions.question}</strong></p>}
                                        {faqQuestions.answer && <p>{faqQuestions.answer}</p>}
                                    </section>
                                ))}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default FaqSection
