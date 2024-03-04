export default {
    name: 'company',
    title: 'Company',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Company Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },

        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'industry',
            title: 'Industry',
            type: 'string',

        },
        {
            name: 'size',
            title: 'Company Size',
            type: 'string',
            description: 'Number of employees',
            options: {
                list: [
                    { title: '1-20', value: '1-20' },
                    { title: '21-40', value: '21-40' },
                    { title: '41-60', value: '41-60' },
                    { title: '61-80', value: '61-80' },
                    { title: '81-100', value: '81-100' },
                    { title: '100+', value: '100+' },
                ],
            },

        },

        {
            name: 'companyAddress',
            title: 'Company Address',
            type: 'object',
            description: 'If the company is an LLC, please enter the address of the LLC',
            fieldsets: [
                {
                    name: 'cityState',
                    title: 'City,State and Zip',
                    options: { columns: 2 } // This will arrange the fields in this fieldset in 2 columns
                },
                // You can define more fieldsets here as needed
            ],
            fields: [
                { name: 'addressLineOne', title: 'Street Address', type: 'string' },
                { name: 'addressLineTwo', title: 'Apt, Suite, Etc (optional)', type: 'string' },
                {
                    name: 'city',
                    title: 'City',
                    type: 'string',
                    fieldset: 'cityState' // Assign to the 'cityState' fieldset
                },
                {
                    name: 'state',
                    title: 'State',
                    type: 'string',
                    fieldset: 'cityState',
                    options: {
                        list: [
                            { title: 'Alabama', value: 'AL' },
                            { title: 'Alaska', value: 'AK' },
                            { title: 'Arizona', value: 'AZ' },
                            { title: 'Arkansas', value: 'AR' },
                            { title: 'California', value: 'CA' },
                            { title: 'Colorado', value: 'CO' },
                            { title: 'Connecticut', value: 'CT' },
                            { title: 'Delaware', value: 'DE' },
                            { title: 'Florida', value: 'FL' },
                            { title: 'Georgia', value: 'GA' },
                            { title: 'Hawaii', value: 'HI' },
                            { title: 'Idaho', value: 'ID' },
                            { title: 'Illinois', value: 'IL' },
                            { title: 'Indiana', value: 'IN' },
                            { title: 'Iowa', value: 'IA' },
                            { title: 'Kansas', value: 'KS' },
                            { title: 'Kentucky', value: 'KY' },
                            { title: 'Louisiana', value: 'LA' },
                            { title: 'Maine', value: 'ME' },
                            { title: 'Maryland', value: 'MD' },
                            { title: 'Massachusetts', value: 'MA' },
                            { title: 'Michigan', value: 'MI' },
                            { title: 'Minnesota', value: 'MN' },
                            { title: 'Mississippi', value: 'MS' },
                            { title: 'Missouri', value: 'MO' },
                            { title: 'Montana', value: 'MT' },
                            { title: 'Nebraska', value: 'NE' },
                            { title: 'Nevada', value: 'NV' },
                            { title: 'New Hampshire', value: 'NH' },
                            { title: 'New Jersey', value: 'NJ' },
                            { title: 'New Mexico', value: 'NM' },
                            { title: 'New York', value: 'NY' },
                            { title: 'North Carolina', value: 'NC' },
                            { title: 'North Dakota', value: 'ND' },
                            { title: 'Ohio', value: 'OH' },
                            { title: 'Oklahoma', value: 'OK' },
                            { title: 'Oregon', value: 'OR' },
                            { title: 'Pennsylvania', value: 'PA' },
                            { title: 'Rhode Island', value: 'RI' },
                            { title: 'South Carolina', value: 'SC' },
                            { title: 'South Dakota', value: 'SD' },
                            { title: 'Tennessee', value: 'TN' },
                            { title: 'Texas', value: 'TX' },
                            { title: 'Utah', value: 'UT' },
                            { title: 'Vermont', value: 'VT' },
                            { title: 'Virginia', value: 'VA' },
                            { title: 'Washington', value: 'WA' },
                            { title: 'West Virginia', value: 'WV' },
                            { title: 'Wisconsin', value: 'WI' },
                            { title: 'Wyoming', value: 'WY' },
                        ],

                    }
                },
                {
                    name: 'country',
                    title: 'Country',
                    type: 'string', // If you want 'Country' to be part of the fieldset, assign it as well

                },
                {
                    name: 'zipCode',
                    title: 'ZIP Code',
                    type: 'string',
                    fieldset: 'cityState' // Assign to the 'cityState' fieldset for consistency
                },
            ],
        },

        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
        },
        {
            name: 'services',
            title: 'Services Offered',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
        },
        {
            name: 'clients',
            title: 'Clients',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'client' }] }],
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'email',
        },
        {
            name: 'socialMedia',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                        },
                    ],
                },
            ],
        },
        // Additional fields as necessary
    ],
}
