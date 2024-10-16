import React from 'react'
import { SpinningTextCustomTransition } from './ui/SpnningText'
import { data } from "@/data/resume"

export default function About() {
  return (
    <section className='bento-border overflow-hidden'>
      <div className=' relative w-full h-full   p-6 text-white rounded-2xl dark:text-black dark:bg-sky-300  bg-gradient-to-br from-sky-500 via-cyan-300 to-indigo-600  '>
        <div className=' absolute top-6 right-6'>
          <SpinningTextCustomTransition></SpinningTextCustomTransition>
        </div>
        <div>
          <h1 className=' font-bold text-4xl mb-4'>About</h1>
          <p className=' text-left'>
            {
              data.description
            }
          </p>
        </div>
      </div>
    </section>
  )
}
