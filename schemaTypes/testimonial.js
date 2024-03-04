export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'clientCompany',
            title: 'Client Company',
            type: 'string',
        },
        {
            name: 'clientPosition',
            title: 'Client Position',
            type: 'string',
            description: 'The position of the client in their company.',
        },
        {
            name: 'service',
            title: 'Service',
            type: 'reference',
            to: [{ type: 'service' }],
            description: 'The service the client used.',
        },
        {
            name: 'project',
            title: 'Project',
            type: 'reference',
            to: [{ type: 'project' }],
            description: 'The specific project this testimonial is related to.',
        },
        {
            name: 'testimonialText',
            title: 'Testimonial Text',
            type: 'text',
            validation: Rule => Rule.required(),
            description: 'The client’s feedback.',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            description: 'When the testimonial was given.',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: Rule => Rule.min(1).max(5),
            description: 'A numerical rating out of 5 given by the client.',
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Whether this testimonial is featured on the homepage or prominent sections of the website.',
        },
    ],
}
