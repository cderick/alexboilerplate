import React from 'react'
import style from '../InTheMedia.scss'

class ITMSecondSEction extends React.Component {
    render() {
        const { secondCollumn } = this.props
        if (!secondCollumn) return null
        return (
            <section>
                <div className="row m-0 p-0">
                    <div className="col p-0 m-0">
                        <section className="text-left">
                            {secondCollumn.button && <span className={style.mediapieces}>{secondCollumn.button}</span>}
                        </section>
                    </div>
                </div>
                {secondCollumn.medias && secondCollumn.medias.length > 0 &&
                    secondCollumn.medias.map((collMedia, collIndex) => (
                        <section key={`collUnique${collIndex}`}>
                            {collMedia.small &&
                                <div className="row m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <section className="text-left">
                                            {collMedia.small.title && <p className="text-primary font-weight-bold pt-3  mb-0 pb-0">{collMedia.small.title}</p>}
                                            {collMedia.small.date && <span className={style.smaltexto}>{collMedia.small.date}</span>}
                                        </section>
                                        <div className="row">
                                            <div className="col-3 p-3 m-0">
                                                {collMedia.small.image && <img src={require(`../../../static/images/${collMedia.small.image}`)} alt={collMedia.small.image} alt="ceo" />}
                                            </div>
                                            <div className="col-9 pl-4 pt-3 m-0">
                                                {collMedia.small.description && <p className={style.othertext}>{collMedia.small.description}</p>}
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            }
                            {collMedia.bigMedia &&
                                <div className="row m-0 p-0">
                                    <div className="col p-0 m-0">
                                        <section className="text-left">
                                            {collMedia.bigMedia.title && <p className="text-primary font-weight-bold pt-3 pb-0 mb-0">{collMedia.bigMedia.title}</p>}
                                            {collMedia.bigMedia.date && <span className={style.smaltexto}>{collMedia.bigMedia.date}</span>}
                                        </section>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col p-0 m-0">
                                                    {collMedia.bigMedia.image && <img className="img-fluid" src={require(`../../../static/images/${collMedia.bigMedia.image}`)} alt="picone" />}
                                                    {collMedia.bigMedia.description && <p className={`${style.othertext} pt-2`}>{collMedia.bigMedia.description}</p>}
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            }
                        </section>
                    ))}
            </section>
        )
    }
}

export default ITMSecondSEction
