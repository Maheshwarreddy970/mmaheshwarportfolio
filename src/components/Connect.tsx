import { data } from '@/data/resume'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'

export default function Connect() {
  return (
    <section className=' grid  w-full grid-cols-2 gap-2'>
      {
        data.contact.social.map((info, i) => (
          <div key={i} className={cn(' rounded-2xl border shadow-md p-4 flex flex-col gap-4')}>
            <>
              {info.icon}
            </>
            <div>

              <h1>{info.name}</h1>
              <p className=' text-sm text-wrap '>{info.username}</p>
            </div>
            <div>
              <Link href={info.url} className='  w-full py-1.5 px-3 rounded-xl border flex justify-between items-center bg-black text-white '>
                {info.username[0] == '@' ? 'Follow' : 'Connect'}
                <FiArrowRightCircle />
              </Link>
            </div>
          </div>
        ))
      }
    </section>
  )
}
