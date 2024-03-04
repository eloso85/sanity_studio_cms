// schemas/department.js
export default {
    name: 'department',
    title: 'Department',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name of the department',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief description of the department and its responsibilities',
        },

    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'description',
        },
    },
}
