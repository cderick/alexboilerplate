import React from 'react'
import style from '../Circular.scss'

class CollectQuoteSection extends React.Component {
    render() {
        const { collected, quote } = this.props
        if (!collected) return null
        return (
            <section>
                <div className="container p-0">
                    <div className="row p-0 m-0 position-relative">
                        <div className={`col-6  p-5 mt-3 ${style.office}`}>
                            {collected.title && <h3 className={`pl-5 pt-3 pb-3 pr-5 ${style.offtext} bg-light`}>{collected.title}</h3>}
                        </div>
                        <div className="col-6 p-5">
                            {collected.listDescription && <p>{collected.listDescription}</p>}
                            {collected.list && collected.list.length > 0 &&
                                <ul>
                                    {collected.list.map((list, index) => (<li key={`list${list}${index}`}>{list}</li>))}
                                </ul>
                            }
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row p-5 m-5">
                        <div className="col-8 m-auto">
                            {quote.quoteText && <p className={`${style.commer} h4 p-3`}>{quote.quoteText}</p>}
                            {quote.quoteName && <p className="text-center"><strong>{quote.quoteName}</strong></p>}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CollectQuoteSection
