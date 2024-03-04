export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'serviceName',
            title: 'Service Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Web Development', value: 'webDevelopment' },
                    { title: 'Graphic Design', value: 'graphicDesign' },
                    { title: 'Marketing', value: 'marketing' },
                    { title: 'SEO', value: 'seo' },
                    // Add more categories as needed
                ],
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Set to 0 if pricing is variable or negotiated per project.',
        },
        {
            name: 'deliveryTime',
            title: 'Estimated Delivery Time',
            type: 'string',
            description: 'Example: 2 weeks, 1 month, etc.',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Key features or benefits of the service',
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
            description: 'Reference to projects that used this service',
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
            description: 'Client testimonials specific to this service',
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean',
            description: 'Is this service currently offered?',
        },
    ],
}
