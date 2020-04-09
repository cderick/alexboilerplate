import React from 'react'
import style from './NotHiring.scss'
import mainObject from './data.json'

class NotHiring extends React.Component {
    render() {
        if (!mainObject) return null
        const { title, subtitle, button } = mainObject

        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col-5">
                        <section className="p-4">
                            {title && <h2 className={style.nothiri}>{title}</h2>}
                        </section>
                    </div>
                    <div className="col-7 p-4 m-0">
                        <div className="row m-0 p-0">
                            <div className="col p-0 m-0">
                                <section>
                                    {subtitle && <p className={style.notexti}>{subtitle}</p>}
                                </section>
                                <section className="text-right p-2">
                                    {button && <span className={style.butts}>{button}</span>}
                                </section>
                                <hr className="mt-4 mb-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotHiring
