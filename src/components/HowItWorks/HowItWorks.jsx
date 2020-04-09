import React from 'react'
import howItWorkContent from './HowItWorks.json'
import WorkSection from './WorkSection/WorkSection'
import FaqSection from './FaqSection/FaqSection'

class HowItWorks extends React.Component {
    render() {
        if (!howItWorkContent) return false
        const { works, faq } = howItWorkContent
        return (
            <section>
                <WorkSection works={works} />
                <FaqSection faq={faq} />
            </section >
        )
    }
}

export default HowItWorks
