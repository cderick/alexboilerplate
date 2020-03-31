import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import HomePage from '../../components/HomePage'
import Component404 from '../../components/404'
import PublicRoute from '../../components/RouterComponents/PublicRoute'

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
