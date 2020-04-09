import React from 'react'
import FirstSection from './FirstSection/FirstSection'
import OrangeBox from './OrangeBox/OrangeBox'
import SolutionSection from './SolutionSection/SolutionSection'
import restContent from './Restaurants.json'

class Restaurants extends React.Component {
    render() {
        if (!restContent) return null
        const { firstSection, orageBox, itemList, solution} = restContent
        return (
            <section>
                <div className="container p-0">
                    <FirstSection firstSection={firstSection} />
                    <div className="row">
                        <OrangeBox orageBox={orageBox}/>
                        <SolutionSection itemList={itemList} solution={solution} />
                    </div>
                </div>
            </section >
        )
    }
}

export default Restaurants
