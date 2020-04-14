import React from 'react'
import s from './ContactUsSection.scss'

class ContactUsSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactName: '',
            contactCompany: '',
            contactEmail: '',
            contactPhoneNumber: '',
            contactEnquiry: '',
            contactMessage: ''
        }
        this.handleForms = this.handleForms.bind(this)
    }

    handleForms(e) {
        if (e) {
            const id = e.target.id
            const value = e.target.value
            this.setState({
                [id]: value
            })
        }
    }

    render() {
        const { contactUs } = this.props
        if (!contactUs) return null
        return (
            <div id="contactus" className={`container-fluid pb-4 ${s.myWrapper}`}>
                <div className="container p-0">
                    <div className="row pt-5 pb-5">
                        <div className="col text-center">
                            <h1 className={`${s.mypooppingBold}`}>{contactUs.title}</h1>
                            <h5 className={`${s.mypooppingLight}`}>{contactUs.subTitle}</h5>
                        </div>
                    </div>
                    <div className="row pt-4 pb-5">
                        <div className="col-10 m-auto">
                            <div className="row p-0 m-0">
                                <div className="col">
                                    <section className="pl-5 pr-5">
                                        <p className={`${s.mypooppingLight}`}>{contactUs.description}</p>
                                    </section>
                                </div>
                            </div>
                            <div className="row p-0 m-0">
                                {contactUs.forms && contactUs.forms.length > 0 &&
                                    contactUs.forms.map((form, indImg) => (
                                        <div key={`uniqIdBrowswe${indImg}`} className={form.type === 'text' || form.type === 'email' ? 'col-6' : 'col-12'}>
                                            <div className={`form-group`}>
                                                {form.type === 'text' || form.type === 'email' ?
                                                    <input
                                                        value={this.state[form.value] || ''}
                                                        onChange={(e) => this.handleForms(e)}
                                                        type="text"
                                                        className={`${s.formContacUs} form-control`}
                                                        id={form.value}
                                                        placeholder={form.placeHolder}
                                                    />
                                                    : form.type === 'select' ?
                                                        <select value={this.state[form.value] || ''} id={form.value} onChange={this.handleForms} className={`${s.formContacUs} text-muted ${s[`${form.type}Contact`]} form-control`}>
                                                            {form.options && form.options.length > 0 &&
                                                                form.options.map((slcOption, indOption) => (
                                                                    <option key={`${slcOption.text}${indOption}`} value={slcOption}>{slcOption}</option>
                                                                ))}
                                                        </select>
                                                        : form.type === 'textarea' ?
                                                            <textarea
                                                                value={this.state[form.value] || ''}
                                                                onChange={(e) => this.handleForms(e)}
                                                                rows="6"
                                                                className={`${s.textarea} form-control`}
                                                                id={form.value}
                                                                placeholder={form.placeHolder}
                                                            />
                                                            :
                                                            <button className={`float-right mt-3 pr-5 pl-5 btn ${s.mybutton}`}>{form.placeHolder}</button>
                                                }
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUsSection
