import React from 'react'
import { SpinningTextCustomTransition } from './ui/SpnningText'
import { data } from "@/data/resume"
import WorkExprienceCard from './ui/WorkExprience_Card'
import EducationCard from './ui/Educationcard'

export default function Exprience() {
  return (
    <section className='p-6 bento-border   overflow-hidden'>
      <h1 className='  font-semibold mb-6 mt-2 text-3xl '>Exprience</h1>
      <div className=''>
        {
          data.work.map((work) => (
            <WorkExprienceCard key={work.company}
              logoUrl={work.logoUrl}
              location={work.location}
              company={work.company}
              title={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            ></WorkExprienceCard>
          ))
        }
      </div>
      <h1 className='  font-semibold mb-6 text-3xl'>Education</h1>
      {
        data.education.map((data) => (
          <EducationCard
            school={data.school}
            fieldofstudy={data.degree}
            logoUrl={data.logoUrl}
            href={data.href}
            period={`${data.start} - ${data.end ?? "Present"}`}
          ></EducationCard>
        ))
      }
    </section>
  )
}
