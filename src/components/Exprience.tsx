import React from 'react'
import { data } from "@/data/resume"
import WorkExprienceCard from './ui/WorkExprience_Card'
import EducationCard from './ui/Educationcard'

export default function Exprience() {
  return (
    <section className='p-6 bento-border   overflow-hidden'>
      <div className=' flex justify-end pr-5'>
        <div className=' relative rounded-full shadow-md border border-green-500 bg-green-200 px-3 py-1 '>
          <span className=' text-lg font-semibold text-green-500'>
            Open to Work
          </span>
          <div className=' absolute top-0 right-0'>
            <span className="relative flex h-3 w-3 shadow-md">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        </div>
      </div>
      <h1 className='  font-semibold mb-4 mt-2 text-3xl '>Exprience</h1>
      <div className=''>
        {
          data.work.map((work) => (
            <WorkExprienceCard key={work.company}
              logoUrl={work.logoUrl}
              company={work.company}
              title={work.title}
              href={work.href}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            ></WorkExprienceCard>
          ))
        }
      </div>
      <h1 className='  font-semibold mb-3 text-3xl'>Education</h1>
      {
        data.education.map((data,i) => (
          <EducationCard
key={i}
            school={data.school}
            fieldofstudy={data.degree}
            logoUrl={data.logoUrl}
            href={data.href}
            period={`${data.start} - ${data.end ?? "Present"}`}
          ></EducationCard>
        ))
      }
      <h1 className='  font-semibold mb-3 text-3xl '>Course</h1>
      <div className=''>
        {
          data.courses.map((data, i) => (
            <EducationCard
            key={i}
              school={data.title}
              fieldofstudy={data.fieldofstudy}
              logoUrl={data.image}
              href={data.links}
              description={data.description}
              period={`${data.start} - ${data.end ?? "Present"}`}
            ></EducationCard>
          ))
        }
      </div>
    </section>
  )
}
