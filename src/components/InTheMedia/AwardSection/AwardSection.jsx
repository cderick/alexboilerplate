import React from 'react'
import style from '../InTheMedia.scss'

class AwardSection extends React.Component {
    render() {
        const { awards } = this.props
        if (!awards) return null

        return (
            <section>
                {awards.title && <h2 className="p-5 m-0">{awards.title}</h2>}
                {awards.cards && awards.cards.length > 0 &&
                    awards.cards.map((card, awardIndex) => (
                        <section key={`awardUnique${awardIndex}`} className={`${style.awargray} ml-5 mb-3 mr-5`}>
                            {card.year && <span className={style.yearback}>{card.year}</span>}
                            {card.award && card.award.length > 0 &&
                                card.award.map((prize, prizIndex) => (
                                    <section key={`prizUnique${prizIndex}`}>
                                        {prize.image && <img src={require(`../../../static/images/${prize.image}`)} alt={prize.image} />}
                                        {prize.description && <p className="pt-2">{prize.description}</p>}
                                    </section>
                                ))}
                        </section>
                    ))}
            </section>
        )
    }
}

export default AwardSection
