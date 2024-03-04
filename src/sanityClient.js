import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_API_DATASET;


export const sanityClient = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: '2021-03-25',
    useCdn: false,
})