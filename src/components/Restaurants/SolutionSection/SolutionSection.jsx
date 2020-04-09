import React from 'react'
import style from '../Restaurants.scss'

class SolutionSection extends React.Component {
    render() {
        const { itemList, solution } = this.props
        if (!itemList || !solution) return null
        return (
            <div className="col-7 pl-4 pr-4 pt-0 pb-4 m-0">
                <div className="row m-0 p-0">
                    <div className="col p-0 m-0">
                        {itemList.title && <span className={style.probtext}><strong>{itemList.title}</strong>
                            <ul className={style.ultext}>
                                {itemList.list && itemList.list.length > 0 &&
                                itemList.list.map((solutionList, solutionIndex) => (
                                <li key={`solutionUnique ${solutionIndex}`}>{solutionList}</li>
                                ))}
                            </ul>
                        </span>}
                        <hr className="mb-5" />
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col p-0 m-0">
                        <section className="text-left">
                            {solution.title && <span className={style.probsol}>{solution.title}</span>}
                        </section>
                        <section>
                            {solution.description &&<p className={`${style.probtext} pt-4`}>{solution.description}
                                </p>}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default SolutionSection
