"use client"

import { data } from '@/data/resume'
import React from 'react'
import ProjectDialog from './ui/projectdialog'

function Projects() {
  return (
    <section className=' flex flex-col gap-6'>
      {
        data.projects.map((project, i) => (
          <ProjectDialog key={i} project={project}></ProjectDialog>
        ))
      }
    </section>
  )
}


export default Projects