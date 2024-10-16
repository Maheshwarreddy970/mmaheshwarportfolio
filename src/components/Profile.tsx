import Image from 'next/image'
import React from 'react'
import { data } from "@/data/resume"

export default function Profile() {
  return (
    <section className=' relative  pb-20 bento-border overflow-hidden'>
      <Image 
       style={{
        maskImage: `linear-gradient(to top, transparent, black 20%)`,
      }}
      src={data.avatarUrl} alt='profile' height={200} width={200} className=' h-96 -mt-3 object-cover w-full'></Image>
      <h1 className='absolute bottom-5  w-full text-center text-3xl font-semibold '>{data.name}</h1>
    </section>
  )
}
