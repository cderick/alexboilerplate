import React from 'react'
import corpo from './Corporates.json'
import CorpoMarketSection from './CorpoMarketSection/CorpoMarketSection'
import CorpoSaveSection from './CorpoSaveSection/CorpoSaveSection'

class Corporates extends React.Component {
    render() {
        if (!corpo) return null
        const { market, save } = corpo
        return (
            <section>
                <div className="container p-0">
                    <CorpoMarketSection  market={market} />
                    <hr className="mt-3 mb-3" />
                    <CorpoSaveSection save={save} />
                </div>
            </section>
        )
    }
}

export default Corporates
