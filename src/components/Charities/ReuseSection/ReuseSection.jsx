import React from 'react'
import style from '../Charities.scss'

class ReuseSection extends React.Component {
    render() {
        const { reuse } = this.props
        if (!reuse) return null
        const { firstCollumn, secondCollumn } = reuse
        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col-6 p-5 m-0">
                        <section>
                            <h3 className={`${style.reuse} pb-4`}>{firstCollumn.title}</h3>
                            <p className={style.workwith}>{firstCollumn.description}</p>
                        </section>
                    </div>
                    <div className="col-6 p-5 m-0">
                        <section className="text-center">
                            <h2 className={`${style.mirror} h1`}>{secondCollumn.title}</h2>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReuseSection
