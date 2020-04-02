import React from 'react'
import style from './Charities.scss'

class Charities extends React.Component {
    render() {
        return (
            <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-6 p-5 m-0">
                            <section>
                                <h3 className={`${style.reuse} pb-4`}>The reuse marketplace helps charities save money and access good quality items for free that allows them to achieve their goals and make a difference in their local community.</h3>
                                <p className={style.workwith}>We work with a variety of companies across all sectors, which means there is a diverse range of items listed on the marketplace and often in bulk quantities. The benefits of using our marketplace is that you as a charity are given
                            the choice on which items you would like to request and in which quantity. This prevents charities from having items they don’t need or want or feel pressurized to take.</p>
                            </section>
                        </div>
                        <div className="col-6 p-5 m-0">
                            <section className="text-center">
                                <h1 className={style.mirror}>Mirrors Display Units Chairs Desks Crockery Bricks Toys Fittings & Fixtures Cabinets Shelving Mattresses Hospital Beds Medical Equipment Computers Carpets Tiles Doors Lighting</h1>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col pl-5 pb-3 m-0">
                            <section className="text-left">
                                <span className={style.whywelove}>Why we love Globechain</span>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-6 p-2 m-0">
                            <section className={style.quotebox}>
                                <span>“I always wanted to read books when I was growing up in the village but there were no books to read which is one of the reasons why Project Dream always wanted to build a library to support all schools in the region giving them
                                    access to learning materials for free. The donation of the kitchen units has made this dream a reality as we are in the process of building one which will benefit over 9000 children in 16 schools. Thanks to Globechain and B&Q
                            for this donation and looking forward to the opening of that library.”<br /><br /><strong>- Sidikie Kargbo, Project Dream</strong></span>
                            </section>
                        </div>
                        <div className="col-6 p-2 m-0">
                            <section className={style.quotebox}>
                                <span>“Due to the durability of the items they provide a good source of finance to support my organisation in Ghana, Africa. Our charity will use the funds to help young people to learn how to play musical instruments as well as sponsor
                            talented individuals to achievetheir dreams and careers.”<br /><br /><strong>- Eric Agyenim-Boateng from Christ Shelter Ministry International</strong></span>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-6 p-2 mb-5">
                            <section className={style.quotebox}>
                                <span>“We had damaged computers so these new ones just came at the right time. I also mentor other charities that run schools for poor children - so a few of the computers will be donated to their schools as well. Thank you very, very
                            much for this donation which will enlighten and broaden the minds of the children and empower them for the future. Thank you.”<br /><br /><strong>- Jackie from God’s Children Empowered</strong></span>
                            </section>
                        </div>
                        <div className="col-6 p-2 mb-5">
                            <section className={style.quotebox}>
                                <span>“As a charity it is extremely important that we deliver the highest quality service to our clients while also keep our expenses low. By using Globechain it has allowed us to source fixtures and furnishings that will add elegance
                            and style to our client journey with minimal cost to us.”<br /><br /><strong>- Victoria Mullin Gorelik from SMART WORKS</strong></span>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Charities
