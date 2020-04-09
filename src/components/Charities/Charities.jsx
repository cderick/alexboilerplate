import React from 'react'
import style from './Charities.scss'
import charity from './Charities.json'
import ReuseSection from './ReuseSection/ReuseSection'
import LoveSection from './LoveSection/LoveSection'

class Charities extends React.Component {
    render() {
        if (!charity) return null
        const { reuse, love } = charity
        return (
            <section>
                <ReuseSection reuse={reuse} />
                <LoveSection love={love} />
            </section>
        )
    }
}

export default Charities
