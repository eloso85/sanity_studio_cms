import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { myStructure } from './deskStructure';


import CatWidget from './src/components/CatWidget';
import ProjectTimelineWidget from './src/components/ProjectTimelineWidget';
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";

//import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_API_DATASET;

export default defineConfig({
  name: 'default',
  title: 'wdd_home',

  projectId: projectId,
  dataset: dataset,

  plugins: [
    structureTool({
      structure: myStructure
    }),
    visionTool(),
    dashboardTool({
      widgets: [
        {
          name: 'cat-widget',
          component: CatWidget,
        },
        {
          name: 'project-timelines',
          component: ProjectTimelineWidget,
        },
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
      ]
    })
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
