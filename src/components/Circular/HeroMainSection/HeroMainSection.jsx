import React from 'react'
import style from '../Circular.scss'

class HeroMainSection extends React.Component {
    render() {
        const { heroBanner, mainSection } = this.props
        if (!heroBanner || !mainSection) return null
        return (
            <section>
                <div className={`container-fluid ${style.galax} p-0`}>
                    <div className="row p-0 m-0 position-relative">
                        <div className="col">
                            {heroBanner.title && <h2 className={`pl-5 pt-3 pb-3 pr-5 ${style.circu} h1 bg-light`}>{heroBanner.title}</h2>}
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-10 p-5 m-0">
                            {mainSection.description && <p className={style.conduit}>{mainSection.description}</p>}
                            {mainSection.secondMesasge && <p>{mainSection.secondMesasge}</p>}
                        </div>
                        <div className="col-2 p-3 m-0">
                            {mainSection.image && <img src={require(`../../../static/images/${mainSection.image}`)} alt="smallpic" />}
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default HeroMainSection
