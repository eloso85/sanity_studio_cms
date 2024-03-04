
import WebsiteProjectEditor from "./src/components/WebsiteProjectEditor";

export const myStructure = (S) =>

    S.list()
        .title('Home')
        .items([
            S.listItem()
                .title('Clients')
                .child(
                    S.list()
                        .title('Clients')
                        .items([
                            S.listItem()
                                .title('All Clients')
                                .schemaType('client')
                                .child(S.documentTypeList('client').title('Clients')),
                            S.listItem()
                                .title('Potential Clients')
                                .child(
                                    S.documentList()
                                        .title('Potential')
                                        .filter('_type == "client" && status == "potential"')
                                ),
                            S.listItem()
                                .title('Active Clients')
                                .child(
                                    S.documentList()
                                        .title('Active')
                                        .filter('_type == "client" && status == "active"')
                                ),
                            S.listItem()
                                .title('Inactive Clients')
                                .child(
                                    S.documentList()
                                        .title('Inactive')
                                        .filter('_type == "client" && status == "inactive"')
                                ),
                            S.listItem()
                                .title('Canceled Clients')
                                .child(
                                    S.documentList()
                                        .title('Canceled')
                                        .filter('_type == "client" && status == "canceled"')
                                ),
                            S.listItem()
                                .title('Returning Clients')
                                .child(
                                    S.documentList()
                                        .title('Returning')
                                        .filter('_type == "client" && status == "returning"')
                                ),
                        ])
                ),

            S.listItem()
                .title('Projects')
                .schemaType('project') // Assuming 'project' is your project schema
                .child(
                    S.documentTypeList('project')
                        .title('Projects')
                        .child(projectId =>
                            // Assuming your project schema includes a reference to a websiteProject
                            S.editor()
                                .id(projectId)
                                .schemaType('project')
                                .views([
                                    S.view.form(),
                                    S.view.component(WebsiteProjectEditor).title('Website').options({ documentId: projectId }),
                                ])
                        )
                ),

            S.divider(),

            S.listItem()
                .title('Company Settings')
                .icon(() => '⚙️') // Optional: choose an icon that represents settings or organization
                .child(
                    S.list()
                        .title('Company Settings')
                        .items([
                            S.listItem()
                                .title('Team Members')
                                .schemaType('teamMember') // Assuming your Team Member schema's name is 'person'
                                .child(S.documentTypeList('teamMember').title('Team Members')),
                            S.listItem()
                                .title('Departments')
                                .schemaType('department')
                                .child(S.documentTypeList('department').title('Departments')),
                            S.listItem()
                                .title('Roles')
                                .schemaType('role')
                                .child(S.documentTypeList('role').title('Roles')),
                            // You can add more company-related schemas here
                        ])
                ),


            // Add other sections or single items here

        ]);
