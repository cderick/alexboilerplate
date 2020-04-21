import React from 'react'
import itemSvg from '../../static/images/allitems.svg'
import logo from '../../static/images/globchainlogo.svg'
import s from './DownPage.scss'
import downData from "./DownPage.json"

class DownPage extends React.Component {
	render() {
		if (!downData) return null
		const { title, subtitle } = downData
		return (
			<section id="homePage" className="w-100">
				<div className="container-fluid">
					<div className="row">
						<div className="col-2 m-auto text-center">
							<img className="img-fluid pt-4 pb-4" src={logo} alt={logo} />
						</div>
					</div>
				</div>
				<div className={`container-fluid position-relative ${s.containerBackground}`}>
					<div className="row">
						<div className="col-8 m-5 p-5">
							<section className={`${s.titleFont} p-4 m-5`}>
								{title && <h2 className="text-left pb-3">{title}</h2>}
								{subtitle && <p className="h4 text-muted text-left pt-5">{subtitle}</p>}
							</section>
						</div>
					</div>
					<section className={`w-50 ${s.itemBox}`}>
						<section className="pl-5 pr-5 text-right">
							<img className="img-fluid" src={itemSvg} alt={itemSvg} />
						</section>
					</section>
				</div>
			</section>
		)
	}
}

export default DownPage
