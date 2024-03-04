export default {
    name: 'role',
    title: 'Role',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The name of the role',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief description of the role and its responsibilities',
        },
        {
            name: 'skillsRequired',
            title: 'Skills Required',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List the skills and expertise required for this role',
            options: {
                layout: 'tags',
            },
        },
        // New image field for role icon or picture
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true, // Enables hotspot functionality for image cropping
            },
            description: 'Upload an icon or picture that represents this role.',
        },
        // Additional fields as previously defined...
    ],
    initialValue: {
        title: 'New Role', // Default value to encourage specification
    },
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
            media: 'icon', // Use the 'icon' image as the preview media in the Sanity Studio
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            return {
                title,
                subtitle: subtitle ? subtitle : 'No description available',
                media,
            };
        },
    },
}
