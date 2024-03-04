// src/components/ProjectTimelineWidget.jsx
import React, {useEffect, useState} from 'react'
import {sanityClient} from '../sanityClient'
import {DashboardWidgetContainer} from '@sanity/dashboard'
import {Card, Stack, Text} from '@sanity/ui'

const ProjectTimelineWidget = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
          _id,
          projectName,
          startDate,
          endDate,
        }`,
      )
      .then((data) => {
        setProjects(data)
      })
      .catch(console.error)
  }, [])

  return (
    <DashboardWidgetContainer header="Project Timelines">
      <Stack space={4}>
        {projects.map((project) => (
          <Card key={project._id} padding={4} shadow={1}>
            <Text style={{fontWeight: 'bold'}}>{project.projectName}</Text>
            <Text size={1}>Start: {project.startDate}</Text>
            <Text size={1}>End: {project.endDate}</Text>
          </Card>
        ))}
      </Stack>
    </DashboardWidgetContainer>
  )
}

export default ProjectTimelineWidget
