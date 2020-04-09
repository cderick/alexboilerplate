import React from 'react'
import style from '../Restaurants.scss'

class OrangeBox extends React.Component {
    render() {
        const { orageBox } = this.props
        if (!orageBox) return null
        return (
            <div className="col-5">
                <section className={style.orangeback}>
                    {orageBox.title && <p className="h4"><strong>{orageBox.title}</strong></p>}
                    {orageBox.description && <p className="pt-4">{orageBox.description}</p>}
                    <ul className={style.listetexto}>
                        {orageBox.list && orageBox.list.length > 0 &&
                            orageBox.list.map((canListed, listIndex) => (
                            <li key={`listUnique ${listIndex}`}>{canListed}</li>
                            ))}
                    </ul>
                </section>
            </div>
        )
    }
}

export default OrangeBox
