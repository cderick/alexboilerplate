import React from 'react'
import ReactDOM from 'react-dom'
import HomePageContainer from './containers/HomePageContainer'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './stylesheets/globalStyles.scss'

ReactDOM.render(
	<HomePageContainer />,
	document.getElementById('root'),
)