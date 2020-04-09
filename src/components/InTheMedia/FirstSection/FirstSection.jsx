import React from 'react'
import style from '../InTheMedia.scss'

class FirstSection extends React.Component {
    render() {
        const { sectionOne } = this.props
        if (!sectionOne) return null
        return (
            <section className="p-5">
                {sectionOne.title && <h2 className={`${style.stay} pb-3`}>{sectionOne.title}</h2>}
                {sectionOne.subtitle && <p className="pb-3">{sectionOne.subtitle}</p>}
                <p>
                {sectionOne.icons && sectionOne.icons.length > 0 &&
                sectionOne.icons.map((icon, iconIndex) => (
                    <i key={`iconUnique ${iconIndex}`} className={icon}></i>
                ))}
                </p>
            </section>
        )
    }
}

export default FirstSection
