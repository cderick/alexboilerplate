import React from 'react'
import style from './HomePage.scss'
import logo from '../../static/images/logowhite.png'
import heroBanner from './data'
import ContactUsSection from './ContactUsSection/ContactUsSection'


class HomePage extends React.Component {
	render() {
		console.log(heroBanner)
		return (
			<section>
				<div className={`container-fluid ${style.missionBack} pl-0 pr-0 pb-5`}>
					<div className="container p-0">
						<div className="row p-5 m-5">
							<div className="col-8 m-auto">
								<h2 className="text-muted mb-3 text-center">Our mission at Globechain</h2>
								<h2 className="text-muted text-center pb-3"><strong>Is to divert 100 million tonnes of waste from landfill by 2025 and contribute to a better world.</strong></h2>
								<h4 className="text-muted text-center pl-5 pr-5 pb-4">So far we have diverted <strong>6.1 million tonnes</strong> and saved charities <strong>over £2 million</strong> while helping numerous communities across the world.</h4>
								<section className="w-100 text-center">
									<img src={logo} alt="whitelogo" />
								</section>
							</div>
						</div>
						<div className="row pb-5">
							<div className="col">
								<section className="w-50">
									<p className="mb-2 pb-0"><span className={`text-white d-inline-block ${style.titleBackground} h3 pt-4 pb-4 pr-5`}>How do we do this?</span></p>
									<p className="text-muted">Our marketplace allows anyone to list items that they no longer need to be reused by someone else. Our members get to request and collect the items for FREE! </p>
								</section>
							</div>
						</div>
						<div className="row pb-5">
							<div className="col">
								<section className="float-right w-50">
									<p className="mb-2 pb-0 text-right"><span className={`text-white d-inline-block ${style.backgroundRight} h3 pt-4 pb-4 pl-5`}>Who is our marketplace for?</span></p>
									<p className="text-muted"><strong className={`h4 ${style.strongText}`}>Everyone!</strong> Charities, corporates, local communities, small businesses, shops, construction sites, hospitals and even friends and family.</p>
								</section>
							</div>
						</div>
						<div className="row pb-5">
							<div className="col">
								<section className="w-50">
									<p className="mb-2 pb-0"><span className={`text-white d-inline-block ${style.titleBackground} h3 pt-4 pb-4 pr-5`}>What does it cost?</span></p>
									<p className="text-muted">It is free for anyone to register and request items. We charge to list items and we have the following options listed below.</p>
								</section>
							</div>
						</div>
						<div className="row">
							<div className="col m-0">
								<section className="bg-white p-4">
									<section className={style.boxTitleColor}>
										<h4 className="mb-0 pb-0">Pay as you go</h4>
									</section>
									<section className={style.wrapBox}>
										<p className="pb-0 mb-0"><strong>For one off and ad hoc listings</strong></p>
									</section>
									<section className={style.wrapBox}>
										<p className="text-muted pb-0 mb-0">£10 per listing of up to 100 of the same item (eg. £10 to list 100 chairs)</p>
									</section>
									<section className="w-100 text-center">
										<span className={style.butts}>Sign up</span>
									</section>
								</section>
							</div>
							<div className="col m-0">
								<section className="bg-white p-4">
									<section className={style.boxTitleColor}>
										<h4 className="mb-0 pb-0">Annual membership</h4>
									</section>
									<section className={style.wrapBox}>
										<p className="pb-0 mb-0"><strong>For multiple and unlimited listings</strong></p>
									</section>
									<section className={style.wrapBox}>
										<p className="text-muted pb-0 mb-0">Bespoke quote based on requirements</p>
									</section>
									<section className="w-100 text-center">
										<span className={style.butts}>Let's talk</span>
									</section>
								</section>
							</div>
							<div className="col m-0">
								<section className="bg-white p-4">
									<section className={style.boxTitleColor}>
										<h4 className="mb-0 pb-0">Internal Reuse</h4>
									</section>
									<section className={style.wrapBox}>
										<p className="pb-0 mb-0"><strong>A global solution for companies to share internally</strong></p>
									</section>
									<section className={style.wrapBox}>
										<p className="text-muted pb-0 mb-0">Bespoke quote based on requirements</p>
									</section>
									<section className="w-100 text-center">
										<span className={style.butts}>Let's talk</span>
									</section>
								</section>
							</div>
						</div>
					</div>
				</div>
				<div className='container p-0'>
					<div className='row p-0 m-0 position-relative'>
						<div className="col-6 p-0 m-0">
							<h4 className="text-muted pt-5 pb-3">Sectors</h4>
							<p className="text-muted">We work with anyone from small business, large corporates to global enterprises</p>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<div className="row p-0 m-0">
								<div className="col-4 p-4 m-0 w-100">
									<section className={`${style.roundBlue} ${style.construction}`}>
										<p className="mb-0 pb-0"><strong>Construction</strong></p>
									</section>
								</div>
								<div className="col-4 p-4 m-0 w-100">
									<section className={`${style.roundBlue} ${style.hotels}`}>
										<p className="mb-0 pb-0"><strong>Hotels</strong></p>
									</section>
								</div>
								<div className="col-4 p-4 m-0 w-100">
									<section className={`${style.roundBlue} ${style.offices}`}>
										<p className="mb-0 pb-0"><strong>Offices</strong></p>
									</section>
								</div>
								<div className="col-4 p-4 m-0 w-100">
									<section className={`${style.roundBlue} ${style.medical}`}>
										<p className="mb-0 pb-0"><strong>Medical</strong></p>
									</section>
								</div>
								<div className="col-4 p-4 m-0 w-100">
									<section className={`${style.roundBlue} ${style.restaurants}`}>
										<p className="mb-0 pb-0"><strong>Restaurants</strong></p>
									</section>
								</div>
								<div className="col-4 p-4 m-0 w-100">
									<section className={`${style.roundBlue} ${style.retail}`}>
										<p className="mb-0 pb-0"><strong>Retail</strong></p>
									</section>
								</div>
							</div>
						</div>
						<div className="col-6 p-5">
							<h4 className="text-muted pt-5 pb-3">Benefits</h4>
							<ul className={style.myUl}>
								<li><span className="text-muted">Save money by minimizing waste disposal costs</span></li>
								<li><span className="text-muted">Make a social impact</span></li>
								<li><span className="text-muted">Optimise stock usage and inventory</span></li>
								<li><span className="text-muted">Downloadable data reports</span></li>
								<li><span className="text-muted">ESG data (Economic, Social, Governance data)</span></li>
								<li><span className="text-muted">Dedicated support</span></li>
								<li><span className="text-muted">Multiple accounts under one company</span></li>
							</ul>
						</div>
					</div>
				</div>
				<ContactUsSection contactUs={heroBanner.contactUs} />
			</section>

		)
	}
}

export default HomePage
