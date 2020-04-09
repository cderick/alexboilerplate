import React from 'react'
import circularContent from './Circular.json'
import HeroMainSection from './HeroMainSection/HeroMainSection'
import ImpactSection from './ImpactSection/ImpactSection'
import CollectQuoteSection from './CollectQuoteSection/CollectQuoteSection'

class Circular extends React.Component {
    render() {
        if (!circularContent) return null
        const { heroBanner, mainSection, impact, collected, quote } = circularContent
        return (
            <section>
                <HeroMainSection heroBanner={heroBanner} mainSection={mainSection} />
                <ImpactSection impact={impact} />
                <CollectQuoteSection collected={collected} quote={quote} />
            </section >
        )
    }
}

export default Circular
