import { data } from '@/data/resume'
import React from 'react'

export default function Skills() {
  return (
    <section className=' bento-border p-6'>
      <div className=' flex gap-2 flex-wrap'>
      {
        data.skills.map((skill, i) => (
          <span key={i} className=' px-3 py-1 dark:bg-black hover:-translate-y-0.5 dark:border-white/40 border shadow rounded-xl'>
            {skill}
          </span>
        ))
      }
      </div>
    </section>
  )
}
