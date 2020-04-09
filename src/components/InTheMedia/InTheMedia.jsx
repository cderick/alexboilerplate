import React from 'react'
import mediaContent from './InTheMedia.json'
import FirstSection from './FirstSection/FirstSection'
import AwardSection from './AwardSection/AwardSection'
import ITMSecondSEction from './ITMSecondSEction/ITMSecondSEction'


class InTheMedia extends React.Component {
    render() {
        if(!mediaContent) return false
        const { sectionOne, awards, secondCollumn} = mediaContent
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-5">
                            <FirstSection sectionOne={sectionOne}/>
                            <AwardSection awards={awards} />
                        </div>
                        <div className="col-7 p-4 m-0">
                           <ITMSecondSEction secondCollumn={secondCollumn}/>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default InTheMedia
