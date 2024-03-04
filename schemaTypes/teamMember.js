export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        {
            name: 'Fname',
            title: 'First Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'Lname',
            title: 'Last Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'status',
            title: 'Employment Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Active', value: 'active' },
                    { title: 'Inactive', value: 'inactive' },

                ], // Add or remove statuses as needed
            },
        },
        {
            name: 'department',
            title: 'Department',
            type: 'reference',
            to: [{ type: 'department' }],
            description: 'The department this team member belongs to',
        },
        {
            name: 'roles',
            title: 'Roles',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'role' }]
                }
            ],
            description: 'What is this team members role in the company',
        },
        {
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            fields: [
                {
                    name: 'email',
                    title: 'Email',
                    type: 'email',
                    validation: Rule => Rule.required(),
                },
                {
                    name: 'phone',
                    title: 'Phone Number',
                    type: 'string',
                },
                // Replace the simple 'address' string field with a detailed object
                {
                    name: 'address',
                    title: 'Address',
                    type: 'object',
                    fields: [
                        {
                            name: 'streetName',
                            title: 'Street Name',
                            type: 'string',
                        },
                        {
                            name: 'city',
                            title: 'City',
                            type: 'string',
                        },
                        {
                            name: 'state',
                            title: 'State',
                            type: 'string',
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
                            },
                        },
                        // Optionally add a Zip Code field
                        {
                            name: 'zipCode',
                            title: 'Zip Code',
                            type: 'string',
                        },
                        // Consider adding a country selector if your contacts are international
                        {
                            name: 'country',
                            title: 'Country',
                            type: 'string',
                        },
                    ],
                },
            ],
        },

        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
            description: 'A short bio about the team member, their expertise, and experience',
        },

        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
            description: 'Projects the team member has worked on',
        },
        {
            name: 'availability',
            title: 'Availability',
            type: 'string',
            options: {
                list: [
                    { title: 'Available', value: 'available' },
                    { title: 'Busy', value: 'busy' },
                    { title: 'On Leave', value: 'onLeave' },
                    // Additional statuses as needed
                ],
            },
        },
    ],
}
