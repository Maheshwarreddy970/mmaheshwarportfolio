import Image from 'next/image'
import React, { SVGProps } from 'react'
import { data } from "@/data/resume"
import { MdEmail } from 'react-icons/md'
import { FaFileAlt } from 'react-icons/fa'
import { Cursor } from './ui/coursor'

export default function Profile() {
  return (
    <section className=' relative  pb-28 bento-border overflow-hidden'>
      <div>

        <Image
          style={{
            maskImage: `linear-gradient(to top, transparent, black 20%)`,
          }}
          src={data.avatarUrl} alt='profile' height={200} width={200} className=' h-96 -mt-3 object-cover w-full'></Image>
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        className='left-12 top-4'
      >
        <div>
          <MouseIcon className='h-6 w-6' />
          <div className='ml-4 mt-1 rounded-lg  shadow-md bg-green-500 px-2 py-0.5 text-neutral-50'>
            Building Native App
          </div>
        </div>
      </Cursor>
      </div>
      <div className='absolute w-full flex px-5  gap-2 bottom-5'>
        <h1 className='  w-full   text-3xl font-semibold '>{data.name}</h1>

        <div className=' flex gap-3 '>
          <a
            className="group flex justify-center p-1.5 rounded-md drop-shadow-xl bg-black dark:text-black dark:bg-white text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 "
            href={`mailto:${data.contact.email}`}
          >
            <MdEmail className=' size-6 ' />
            <span
              className="absolute opacity-0 group-hover:opacity-100 text-black dark:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
            >
              Email
            </span>
          </a>
          <a
            className="group flex justify-center p-1.5 rounded-md drop-shadow-xl bg-black dark:text-black dark:bg-white text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 "
            download={true} href={data.resume}
          >
            <FaFileAlt className=' size-6' />
            <span
              className="absolute opacity-0 group-hover:opacity-100 text-black dark:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
            >
              Resume
            </span>
          </a>
        </div>
      </div>
      
    </section>
  )
}

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={31}
      fill='none'
      {...props}
    >
      <g clipPath='url(#a)'>
        <path
          fill={'#22c55e'}
          fillRule='evenodd'
          stroke={'#fff'}
          strokeLinecap='square'
          strokeWidth={2}
          d='M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill={'#22c55e'} d='M0 0h26v31H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};
