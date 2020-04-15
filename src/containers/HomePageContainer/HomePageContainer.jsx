import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import HomePage from '../../components/HomePage/HomePage'
import CaseStudies from '../../components/CaseStudies/CaseStudies'
import Hiring from '../../components/Hiring/Hiring'
import NotHiring from '../../components/NotHiring/NotHiring'
import AboutUs from '../../components/AboutUs/AboutUs'
import Charities from '../../components/Charities/Charities'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Restaurants from '../../components/Restaurants/Restaurants'
import Circular from '../../components/Circular/Circular'
import InTheMedia from '../../components/InTheMedia/InTheMedia'
import Component404 from '../../components/404/Component404'
import PublicRoute from '../../components/RouterComponents/PublicRoute'
import Corporates from '../../components/Corporates/Corporates'

class HomePageContainer extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<PublicRoute
						restricted={false}
						component={HomePage}
						path="/"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={NotHiring}
						path="/nothiring"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Hiring}
						path="/hiring"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={CaseStudies}
						path="/casestudies"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={AboutUs}
						path="/aboutus"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Charities}
						path="/charities"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={HowItWorks}
						path="/howitworks"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Restaurants}
						path="/restaurants"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Circular}
						path="/circular"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={InTheMedia}
						path="/inthemedia"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Corporates}
						path='/corporates'
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Component404}
						path='/404'
						exact
					/>
					<Redirect from='*' to='/404' />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default HomePageContainer
