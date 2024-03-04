// /studio/components/WebsiteProjectEditor.js

import React, {useEffect, useState} from 'react'
// import {useDocument} from '@sanity/react-hooks'
import {sanityClient} from '../sanityClient'

const WebsiteProjectEditor = ({documentId}) => {
  const [websiteProject, setWebsiteProject] = useState(null)

  useEffect(() => {
    // Fetch the project document to get the reference ID of the website project
    const fetchData = async () => {
      const query = '*[_type == "project" && _id == $documentId][0]{websiteProject->{title, _id}}'
      const params = {documentId}
      const project = await sanityClient.fetch(query, params)

      if (project && project.websiteProject) {
        // If there's a referenced website project, set it to state
        setWebsiteProject(project.websiteProject)
      }
    }

    fetchData()
  }, [documentId])

  if (!websiteProject) {
    return <div>Loading or no website project linked...</div>
  }

  return (
    <div>
      <h2>Website Project: {websiteProject.title}</h2>
      <p>Edit sections from the Website Project document directly.</p>
      {/* Here you could add further logic to edit sections or navigate to them */}
    </div>
  )
}

export default WebsiteProjectEditor
