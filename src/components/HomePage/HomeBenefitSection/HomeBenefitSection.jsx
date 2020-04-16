import React from 'react'
import style from '../HomePage.scss'



class HomeBenefitSection extends React.Component {
    render() {
        const { listingSection, sectorSection, benefitSection } = this.props
        if (!listingSection || !sectorSection || !benefitSection) return null
        return (
            <section>
                <div className="row">
                    {listingSection && listingSection.length > 0 &&
                        listingSection.map((lis, index) => (
                            <div key={`lisUnique ${index}`} className="col m-0">
                                <section className="bg-white p-4">
                                    <section className={style.boxTitleColor}>
                                        <h4 className="mb-0 pb-0">{lis.title}</h4>
                                    </section>
                                    <section className={style.wrapBox}>
                                        <p className="pb-0 mb-0"><strong>{lis.subtitle}</strong></p>
                                    </section>
                                    <section className={style.wrapBox}>
                                        <p className="text-muted pb-0 mb-0">{lis.description}</p>
                                    </section>
                                    <section className="w-100 text-center">
                                        <span className={style.butts}>{lis.blueButton}</span>
                                    </section>
                                </section>
                            </div>
                        ))}
                </div>
                <div className='container p-0'>
                    <div className='row p-0 m-0 position-relative'>
                        <div className="col-6 p-0 m-0">
                            <h4 className="text-muted pt-5 pb-3">{sectorSection.title}</h4>
                            <p className="text-muted">{sectorSection.subtitle}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row p-0 m-0">
                                {sectorSection.circles && sectorSection.circles.length > 0 &&
                                    sectorSection.circles.map((secto, index) => (
                                        <div key={`sectoUnique ${index}`} className="col-4 p-4 m-0 w-100">
                                            <section className={`${style.roundBlue} ${style.construction}`}>
                                                <p className="mb-0 pb-0"><strong>{secto.type}</strong></p>
                                            </section>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="col-6 p-5">
                            <h4 className="text-muted pt-5 pb-3">{benefitSection.title}</h4>
                            <ul className={style.myUl}>
                                {benefitSection.list.map((beneList, index) => (<li key={`list${beneList}${index}`}><span className="text-muted">{beneList}</span></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default HomeBenefitSection
