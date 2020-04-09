import React from 'react'
import './HomePage.css'

class HomePage extends React.Component {
	render() {
		return (
			<section>
				<div className="container-fluid missionBack p-0">
					<div className="row p-5 m-5">
						<div className="col-8 m-auto">
							<p className="mission">Our mission at Globechain</p>
							<p className="mission pb-3"><strong>Is to divert 100 million tonnes of waste from landfill by 2025 and contribute to a better world.</strong></p>
							<p className="tonnesText">So far we have diverted 6.1 million tonnes and saved charities over £2 million while helping numerous communities across the world.</p>
						</div>
					</div>
				</div>
			</section >
		)
	}
}

export default HomePage
