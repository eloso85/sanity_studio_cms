export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'projectName',
            title: 'Project Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options:
            {
                list: [
                    { title: 'Website', value: 'website' },
                    { title: 'SEO', value: 'seo' },
                    { title: 'Graphics', value: 'graphics' },
                    { title: 'Other', value: 'other' },


                ]
            }
        },
        {
            name: 'websiteProject',
            title: 'Website Project',
            type: 'reference',
            to: [{ type: 'websiteProject' }],
        },
        {
            name: 'client',
            title: 'Client',
            type: 'reference',
            to: [{ type: 'client' }],
            description: 'The client for whom the project is being developed',
        },
        {
            name: 'service',
            title: 'Service',
            type: 'reference',
            to: [{ type: 'service' }],
            description: 'The primary service being provided for this project',
        },
        {
            name: 'projectStatus',
            title: 'Project Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Planning', value: 'planning' },
                    { title: 'In Progress', value: 'inProgress' },
                    { title: 'Review', value: 'review' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'On Hold', value: 'onHold' },
                    // Additional statuses as needed
                ],
            },
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'budget',
            title: 'Budget',
            type: 'number',
            description: 'The agreed budget for the project',
        },
        {
            name: 'deliverables',
            title: 'Deliverables',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'A list of items to be delivered upon project completion',
        },
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
            description: 'Team members assigned to work on the project',
        },
        {
            name: 'progressUpdates',
            title: 'Progress Updates',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'date',
                            title: 'Date',
                            type: 'date',
                            options: {
                                dateFormat: 'YYYY-MM-DD',
                            },
                        },
                        {
                            name: 'update',
                            title: 'Update',
                            type: 'text',
                            description: 'Description of progress or milestones reached',
                        },
                    ],
                },
            ],
            description: 'Regular updates on the project’s progress',
        },
        {
            name: 'testimonial',
            title: 'Client Testimonial',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
            description: 'Feedback received from the client regarding the project',
        },
        {
            name: 'projectOutcome',
            title: 'Project Outcome',
            type: 'text',
            description: 'A summary of the project results and client satisfaction',
        },
    ],
}
