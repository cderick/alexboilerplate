import React from 'react'
import style from '../AboutUs.scss'

class CountriesSection extends React.Component {
    render() {
        const { content } = this.props
        if (!content) return null
        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col text-center">
                        {content.image && <img className={style.glob} src={require(`../../../static/images/${content.image}`)} alt="globe" />}
                    </div>
                    <div className="col pt-5 m-0">
                        {content.places && <p className={`font-weight-bold ${style.globtext}`}>{content.places}</p>}
                    </div>
                    <div className={`col ${style.yeloback} p-2`}>
                        {content.award && <p className={style.award}>{content.award}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default CountriesSection
