export default {
    name: 'homePage',
    title: 'HomePage',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the homepage, usually not displayed on the page itself but used for administrative purposes.',
        },
        {
            name: 'heroSection',
            title: 'Hero Section',
            type: 'object',
            fields: [
                {
                    name: 'headline',
                    title: 'Headline',
                    type: 'string',
                    description: 'Main headline displayed prominently in the hero section.',
                },
                {
                    name: 'subheadline',
                    title: 'Subheadline',
                    type: 'text',
                    description: 'A supporting subheadline or introductory text.',
                },
                {
                    name: 'backgroundImage',
                    title: 'Background Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    description: 'The background image for the hero section.',
                },
                {
                    name: 'primaryCTA',
                    title: 'Primary Call to Action',
                    type: 'string',
                    description: 'The main call to action text.',
                },
                {
                    name: 'primaryCTALink',
                    title: 'Primary CTA Link',
                    type: 'url',
                    description: 'The URL or route the primary CTA directs to.',
                },
                // Optionally add secondary CTA if needed
            ],
        },
        {
            name: 'featureHighlights',
            title: 'Feature Highlights',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        // Include link or action if needed
                    ],
                },
            ],
            description: 'A list of features or services highlighted on the homepage.',
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'quote',
                            title: 'Quote',
                            type: 'text',
                        },
                        {
                            name: 'author',
                            title: 'Author',
                            type: 'string',
                        },
                        {
                            name: 'position',
                            title: 'Position',
                            type: 'string',
                            description: 'Position of the author or their relation to your service.',
                        },
                        {
                            name: 'photo',
                            title: 'Photo',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                    ],
                },
            ],
            description: 'Client or customer testimonials.',
        },
        // Add other sections as needed: aboutUs, latestNews, contactUs, etc.
    ],
};
