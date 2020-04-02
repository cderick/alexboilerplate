import React from 'react'
import style from './NotHiring.scss'

class NotHiring extends React.Component {
    render() {
        const mainObject = {
            title: `We aren’t currently hiring`,
            subTitle: `Follow our social media channels to find out when a new position opens.`,
            button: `Contact us`
        }

        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col-5">
                        <section className="p-4">
                            <h2 className={style.nothiri}>{mainObject.title}</h2>
                        </section>
                    </div>
                    <div className="col-7 p-4 m-0">
                        <div className="row m-0 p-0">
                            <div className="col p-0 m-0">
                                <section>
                                    <p className={style.notexti}>{mainObject.subTitle}</p>
                                </section>
                                <section className="text-right p-2">
                                    <span className={style.butts}>{mainObject.button}</span>
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
