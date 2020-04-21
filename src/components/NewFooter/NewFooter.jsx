import React from 'react'
import dataFooter from './footer_schema.json'
import s from './NewFooter.scss'

class NewFooter extends React.Component {
    constructor(props) {
        super(props)
        this.bindAction = this.bindAction.bind(this)
    }

    bindAction(id) {
        if (window.location.pathname === '/') {
            const scroolId = document.querySelector(id)
            if (scroolId) {
                window.scrollTo({
                    top: scroolId.offsetTop,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        } else {
            window.location.href = `/${id}`
        }
    }

    render() {
        if (!dataFooter && !dataFooter.Footer) return null
        const { leftBlocks, rightBlocks } = dataFooter.Footer
        return (
            <section className={`${s.customBg} text-light`}>
                <div className="container p-0">
                    <div className="row position-relative pt-5 pb-5">
                        <div className="col-6">
                            <div className="row p-0 m-0">
                                {leftBlocks && leftBlocks.length > 0 &&
                                    leftBlocks.map((lBl, indlbl) => (
                                        <div key={`unikLeftblock${indlbl}`} className="col">
                                            <ul className={`${s.linkList} mb-0`}>
                                                {lBl.cta && lBl.cta.length > 0 &&
                                                    lBl.cta.map((link, indLink) => (
                                                        <li key={`uniqueIdlink${indLink}`}>
                                                            {link.url === '#contactus' || link.url === '#pricing' ?
                                                                <span onClick={() => this.bindAction(link.url)} >{link.name}</span> : <a href={link.url}>{link.name}</a>
                                                            }
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row p-0 m-0">
                                {rightBlocks && rightBlocks.length > 0 &&
                                    rightBlocks.map((rBl, indrbl) => (
                                        <div key={`unikLeftblock${indrbl}`} className="col pr-3">
                                            {rBl.type === 'imageLink' ?
                                                <a href={rBl.url} target="_blank">
                                                    <img src={rBl.imageUrl} width="120" alt="" />
                                                </a>
                                                : rBl.type === 'socialNetwork' ?
                                                    <section>
                                                        <p>{rBl.title}</p>
                                                        <p className="w-100">
                                                            {rBl.cta && rBl.cta.length > 0 &&
                                                                rBl.cta.map((socialLink, indLink) => (
                                                                    <a key={`socialIdlink${indLink}`} target="_blank" href={socialLink.url}><i className={`${s.socialLinks} ${socialLink.icon}`}></i></a>
                                                                ))}
                                                        </p>
                                                    </section>
                                                    :
                                                    <p>{rBl.title}</p>
                                            }
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default NewFooter
