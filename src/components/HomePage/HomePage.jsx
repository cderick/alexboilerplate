import React from 'react'
import style from './HomePage.scss'
import homePageSection from './data'
import ContactUsSection from './ContactUsSection/ContactUsSection'
import HomeMissionSection from './HomeMissionSection/HomeMissionSection'
import HomeBenefitSection from './HomeBenefitSection/HomeBenefitSection'


class HomePage extends React.Component {
	render() {
		const { heroBanner, howWeDoSection, listingSection, sectorSection, benefitSection, contactUs } = homePageSection
		if(!homePageSection) return null
		return (
			<section>
				<div className={`container-fluid ${style.missionBack} pl-0 pr-0 pb-5`}>
					<div className="container p-0">
						<HomeMissionSection />
						<HomeBenefitSection/>
					</div>
				</div>
				<ContactUsSection contactUs={contactUs} />
			</section>

		)
	}
}

export default HomePage
