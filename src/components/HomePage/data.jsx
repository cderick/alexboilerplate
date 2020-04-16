const homePageSection = {
    heroBanner: {
        title: 'Our mission at Globechain',
        subtitle: 'Is to divert 100 million tonnes of waste from landfill by 2025 and contribute to a better world.',
        description: 'So far we have diverted 6.1 million tonnes and saved charities over £2 million while helping numerous communities across the world.',
        logoImage: `logowhite.png`
    },
    howWeDoSection: [
        {
            title: 'How do we do this?',
            titleType: 'button',
            description: 'Our marketplace allows anyone to list items that they no longer need to be reused by someone else. Our members get to request and collect the items for FREE!'
        },
        {
            class: 'float-right',
            title: 'Who is our marketplace for?',
            titleType: 'button',
            description: 'Charities, corporates, local communities, small businesses, shops, construction sites, hospitals and even friends and family.',
            shout: 'Everyone!'
        },
        {
            title: 'What does it cost?',
            titleType: 'button',
            description: 'It is free for anyone to register and request items. We charge to list items and we have the following options listed below.'
        }
    ],
    listingSection: [
        {
            title: 'Pay as you go',
            subtitle: 'For one off and ad hoc listings',
            description: '£10 per listing of up to 100 of the same item (eg. £10 to list 100 chairs)',
            blueButton: 'Sign up'

        },
        {
            title: 'Annual membership',
            subtitle: 'For multiple and unlimited listings',
            description: 'Bespoke quote based on requirements',
            blueButton: `Let's talk`

        },
        {
            title: 'Internal Reuse',
            subtitle: 'A global solution for companies to share internally',
            description: 'Bespoke quote based on requirements',
            blueButton: `Let's talk`

        }
    ],
    sectorSection: {
        title: 'Sectors',
        subtitle: 'We work with anyone from small business, large corporates to global enterprises',
        circles: [{
            type: 'Construction',
            stylename: 'construction'
        },
        {
            type: 'Hotels',
            stylename: 'hotels'
        },
        {
            type: 'Offices',
            stylename: 'offices'
        },
        {
            type: 'Medical',
            stylename: 'medical'
        },
        {
            type: 'Restaurants',
            stylename: 'restaurants'
        },
        {
            type: 'Retail',
            stylename: 'retail'
        }
    ],
    },
    benefitSection: {
        title: 'Benefits',
        list: [
            'Save money by minimizing waste disposal costs',
            'Make a social impact',
            'Optimise stock usage and inventory',
            'Downloadable data reports',
            'ESG data (Economic, Social, Governance data)',
            'Dedicated support',
            'Multiple accounts under one company'
        ]
    },
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

export default homePageSection