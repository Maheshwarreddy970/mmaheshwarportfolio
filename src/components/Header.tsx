import { Rubik } from 'next/font/google'
import React from 'react'
import ThemeToggle from './ui/ThemeToggle'


const rubik = Rubik({ subsets: ["latin"], weight: '700' })

export default function Header() {
  return (
    <section className={`pt-11 max-w-7xl mx-auto px-3 ${rubik.className} flex flex-row justify-between`} >
      <h1 className=' font-bold text-3xl text-nowrap  md:text-5xl'>My Bio Cards</h1>
      <ThemeToggle></ThemeToggle>
    </section>
  )
}
