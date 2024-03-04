// import React from 'react';
// import S from '@sanity/desk-tool/structure-builder';

const WebsiteStructure = (S) => {
    return S.list()
        .title('Website Sections')
        .items([
            S.listItem()
                .title('Home')
                .child(
                    // Assuming 'homeSection' is your schema for the Home section
                    S.editor().schemaType('homePage').documentId('homePage')
                ),
            // S.listItem()
            //     .title('About Us')
            //     .child(
            //         // Assuming 'aboutSection' is your schema for the About Us section
            //         S.editor().schemaType('aboutSection').documentId('about')
            //     ),
            // S.listItem()
            //     .title('Services')
            //     .child(
            //         // Assuming 'servicesSection' is your schema for the Services section
            //         S.editor().schemaType('servicesSection').documentId('services')
            //     ),
            // Add more sections as needed
        ]);
};

export default WebsiteStructure;
