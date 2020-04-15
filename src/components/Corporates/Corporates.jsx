import React from 'react'
import corpo from './Corporates.json'
import CorpoMarketSection from './CorpoMarketSection/CorpoMarketSection'
import CorpoSaveSection from './CorpoSaveSection/CorpoSaveSection'

class Corporates extends React.Component {
    render() {
        if (!corpo) return null
        const { marketplace, circles, global, why, trust } = corpo
        return (
            <section>
                <div className="container p-0">
                    <CorpoMarketSection  marketplace={marketplace} circles={circles} />
                    <hr className="mt-3 mb-3" />
                    <CorpoSaveSection global={global} why={why} trust={trust} />
                </div>
            </section>
        )
    }
}

export default Corporates
