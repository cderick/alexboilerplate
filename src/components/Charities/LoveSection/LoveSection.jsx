import React from 'react'
import style from '../Charities.scss'

class LoveSection extends React.Component {
    render() {
        const { love } = this.props
        if (!love) return null
        const { title, card } = love
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col pl-5 pb-3 m-0">
                            <section className="text-left">
                                {love.title && <span className={style.whywelove}>{love.title}</span>}
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row mb-5">
                        {card && card.length > 0 &&
                            card.map((loveGlob, index) => (
                                <div key={`loveUnique${index}`} className="col-6 p-2 m-0">
                                    <section className={style.quotebox}>
                                        {loveGlob.description && <p>{loveGlob.description}</p>}
                                        {loveGlob.name && <p><strong>{loveGlob.name}</strong></p>}
                                    </section>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

        )
    }
}

export default LoveSection
