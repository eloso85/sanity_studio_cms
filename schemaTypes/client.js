export default {
    name: 'client',
    title: 'Client',
    type: 'document',
    fieldsets: [
        {
            name: 'name', // Unique identifier for the fieldset
            title: 'Name', // Visible title
            options: { columns: 2 }, // Arrange fields in 2 columns
        },
        // You can define more fieldsets here as needed
    ],
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: Rule => Rule.required(),
            fieldset: 'name', // Assign this field to the 'name' fieldset
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: Rule => Rule.required(),
            fieldset: 'name', // Assign this field to the 'name' fieldset
        },

        {
            name: 'companyName',
            title: 'Company Name',
            type: 'reference',
            to: [{ type: 'company' }],
            description: 'The Company the client owns',
        },

        {
            name: 'status',
            title: 'Client Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Potential', value: 'potential' },
                    { title: 'Active', value: 'active' },
                    { title: 'Inactive', value: 'inactive' },
                    { title: 'Canceled', value: 'canceled' },
                    { title: 'Returning', value: 'returning' },
                ], // Add or remove statuses as needed
            },
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
                {
                    name: 'address',
                    title: 'Address',
                    type: 'string',
                },
            ],
        },
        {
            name: 'companyDetails',
            title: 'Company Details',
            type: 'object',
            fields: [
                {
                    name: 'companyName',
                    title: 'Company Name',
                    type: 'string',
                },
                {
                    name: 'website',
                    title: 'Website',
                    type: 'url',
                },
                {
                    name: 'industry',
                    title: 'Industry',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Technology', value: 'technology' },
                            { title: 'Finance', value: 'finance' },
                            { title: 'Education', value: 'education' },
                            // Additional industries
                        ],
                    },
                },
                {
                    name: 'size',
                    title: 'Company Size',
                    type: 'number',
                    description: 'Number of employees',
                },
            ],
        },
        {
            name: 'serviceInterest',
            title: 'Service Interest',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
            description: 'Services the client is interested in',
        },
        {
            name: 'projectBriefs',
            title: 'Project Briefs',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
            description: 'References to project documents for this client',
        },
        {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
            description: 'Client feedback on completed projects',
        },
        {
            name: 'accountManager',
            title: 'Account Manager',
            type: 'reference',
            to: [{ type: 'teamMember' }],
            description: 'Team member responsible for managing this client',
        },
        {
            name: 'communicationPreferences',
            title: 'Communication Preferences',
            type: 'object',
            fields: [
                {
                    name: 'preferredMethod',
                    title: 'Preferred Method',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Email', value: 'email' },
                            { title: 'Phone', value: 'phone' },
                            { title: 'Video Call', value: 'videoCall' },
                            { title: 'In Person', value: 'inPerson' },
                            // Additional methods
                        ],
                    },
                },
                {
                    name: 'bestTimeToReach',
                    title: 'Best Time to Reach',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Morning', value: 'morning' },
                            { title: 'Afternoon', value: 'afternoon' },
                            { title: 'Evening', value: 'evening' },
                            // Additional times
                        ],
                    },
                },
            ],
        },
        {
            name: 'notes',
            title: 'Notes',
            type: 'text',
            description: 'Any additional notes or important information about the client',
        },
        // {
        //     name: 'status',
        //     title: 'Status',
        //     type: 'string',
        //     options: {
        //         list: [
        //             { title: 'Prospective', value: 'prospective' },
        //             { title: 'Active', value: 'active' },
        //             { title: 'Inactive', value: 'inactive' },
        //             // Additional statuses
        //         ],
        //     },
        // },
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
        },
        prepare({ firstName, lastName }) {
            return {
                title: `${firstName} ${lastName}`,
                subtitle: 'Custom subtitle here', // Optional: add any subtitle you might need
            }
        }
    }

}
