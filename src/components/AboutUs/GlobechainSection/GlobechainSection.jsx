import React from 'react'
import style from '../AboutUs.scss'
import aboutContent from '../AboutUs.json'

class GlobechainSection extends React.Component {
    render() {
        const { content } = this.props
        if (!content) return null
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-5">
                            <section className="p-5">
                                {content.title && <h2 className={style.about}>{content.title}</h2>}
                            </section>
                        </div>
                        <div className="col-7 p-4 m-0">
                            <div className="row m-0 p-0">
                                <div className="col p-0 m-0">
                                    {content.cardButon && <section className="text-left">
                                        {content.cardButon.title && <p className="pb-0 mb-0"><span className={style.whyuse}>{content.cardButon.title}</span></p>}
                                        {content.cardButon.description && <p className={`${style.textos} pt-4`}>{content.cardButon.description}</p>}
                                    </section>}
                                </div>
                            </div>
                            <hr className="mt-4 mb-4" />
                            <div className="row m-0 p-0">
                                <div className="col p-0 m-0">
                                    {content.cardNormal && <section>
                                        {content.cardNormal.title && <p className={`${style.textos} font-weight-bold`}>{content.cardNormal.title}</p>}
                                        {content.cardNormal.description && <p className={style.textos}>{content.cardNormal.description}</p>}
                                    </section>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default GlobechainSection
