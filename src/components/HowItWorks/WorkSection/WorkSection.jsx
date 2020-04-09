import React from 'react'
import style from '../HowItWorks.scss'

class WorkSection extends React.Component {
    render() {
        const { works } = this.props
        if (!works) return null
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col">
                            <section className="pt-4 pb-5">
                                {works.title && <h2 className={style.using}>{works.title}</h2>}
                            </section>
                        </div>
                    </div>
                    <div className="container p-0">
                        <div className="row">
                            {works.card && works.card.length > 0 &&
                                works.card.map((worksGlob, worksIndex) => (
                                    <div  key={`worksUnique ${worksIndex}`} className="col m-0">
                                        <section className={`${style.threebox} p-4`}>
                                            {worksGlob.title && <h2 className={`h1 ${style.listh}`}>{worksGlob.title}</h2>}
                                            {worksGlob.icons && worksGlob.icons.length > 0 &&
                                                worksGlob.icons.map((iconsGlob, iconsIndex) => (
                                                    <div key={`iconsUnique ${iconsIndex}`} className="row p-3 m-0">
                                                        <div className="col-3 p-0 m-0">
                                                            {iconsGlob.ico && <i className={iconsGlob.ico}></i>}
                                                        </div>
                                                        <div className="col-9 p-0 m-0">
                                                            {iconsGlob.description && <p className={`${style.listtext} pb-4`}>{iconsGlob.description}</p>}
                                                        </div>
                                                    </div>
                                                ))}
                                        </section>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default WorkSection
