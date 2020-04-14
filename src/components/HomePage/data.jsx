const heroBanner = {
    contactUs: {
        title: 'Contact Us',
        subTitle: 'Have a question or need some help?',
        description: 'Please fill in the form below and we will be in touch!',
        forms: [
            {
                type: 'text',
                value: 'contactName',
                placeHolder: 'Name',
                required: true,
            },
            {
                type: 'text',
                value: 'contactCompany',
                placeHolder: 'Company',
            },
            {
                type: 'email',
                value: 'contactEmail',
                placeHolder: 'Email Address',
                required: true,
            },
            {
                type: 'text',
                value: 'contactPhoneNumber',
                placeHolder: 'Telephone Number',
            },
            {
                type: 'select',
                value: 'contactEnquiry',
                placeHolder: 'Enquiry',
                options: [
                    'Enquiry',
                    'Account queries',
                    'Careers',
                    'Complaints / reporting members',
                    'Feedback',
                    'I am interested in being an Ambassador',
                    'Partnership opportunities',
                    'Press / media enquiries',
                    'Something exciting',
                ],
            },
            {
                type: 'textarea',
                value: 'contactMessage',
                placeHolder: 'Type your message here',
            },
            {
                type: 'button',
                value: 'contactSendbutton',
                placeHolder: 'Send',
            },
        ],
    }
}

export default heroBanner