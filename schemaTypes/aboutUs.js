export default {
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContent', // Assuming you have defined a blockContent type for rich text
        },
        // Add more fields as needed
    ],
};
