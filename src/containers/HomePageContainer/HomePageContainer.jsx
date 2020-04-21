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
import ActivateCompany from '../../components/ActivateCompany/ActivateCompany'
import ActivateAccount from '../../components/Activate/ActivateAccount'
import Unsubscribe from '../../components/Unsubscribe/Unsubscribe'
import PrivacyPolicy from '../../components/Privacy/PrivacyPolicy'
import TermsAndConditions from '../../components/Terms/TermsAndConditions'
import Reports from '../../components/Reports/Reports'
import DownPage from '../../components/DownPage/DownPage'
import NewFooter from '../../components/NewFooter/NewFooter'

class HomePageContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			pathName: false
		}
	}

	componentWillMount(){
		this.setState({
			pathName: window.location.pathname.includes('downpage')
		})
	}


	render() {
		const { pathName } = this.state
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
					<PublicRoute
						restricted={false}
						component={ActivateCompany}
						path='/activatecompany'
						exact
					/>
					<PublicRoute
						restricted={false}
						component={ActivateAccount}
						path='/activateaccount'
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Unsubscribe}
						path='/unsubscribe'
						exact
					/>
					<PublicRoute
						restricted={false}
						component={PrivacyPolicy}
						path='/privacypolicy'
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Reports}
						path='/reports'
						exact
					/>
					<PublicRoute
						restricted={false}
						component={DownPage}
						path='/downpage'
						exact
					/>
					<PublicRoute
						restricted={false}
						component={TermsAndConditions}
						path='/termsandconditions'
						exact
					/>
					<Redirect from='*' to='/404' />
				</Switch>
				{!pathName && <NewFooter />}
			</BrowserRouter>
		)
	}
}

export default HomePageContainer
