import React from 'react'
import GlobechainSection from './GlobechainSection/GlobechainSection'
import CountriesSection from './CountriesSection/CountriesSection'
import aboutContent from './AboutUs.json'

class AboutUs extends React.Component {
    render() {
        if(!aboutContent) return false
        const { globechain, countries } = aboutContent
        return (
            <section>
                <div className="container p-0">
                    {globechain && <GlobechainSection content={globechain} />}
                    <hr className="mt-3 mb-3" />
                    {countries && <CountriesSection content={countries} />}
                </div>
            </section >
        )
    }
}

export default AboutUs
