export default {
    name: 'websiteProject',
    title: 'Website Project',
    type: 'document',
    fields: [
        {
            name: 'projectName',
            title: 'Project Name',
            type: 'string',
        },
        {
            name: 'homePage',
            title: 'Home Page',
            type: 'reference',
            to: [{ type: 'homePage' }],
        },
        {
            name: 'aboutUs',
            title: 'About Us',
            type: 'reference',
            to: [{ type: 'aboutUs' }],
        },
        // {
        //     name: 'services',
        //     title: 'Services',
        //     type: 'reference',
        //     to: [{ type: 'services' }],
        // },
        // Add references to other sections as needed
    ],
};
