"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Cursor } from './coursor';
import { PiPlusCircleDuotone } from 'react-icons/pi';

export default function ProjectDialog({
  project,
}: {
  project: {
    title: string;
    href: string;
    active: boolean;
    description: string;
    links: {
      type: string;
      href: string;
      icon: React.JSX.Element;
    }[];
    image: string;
    video: string;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="w-full bento-border overflow-hidden">
        <div ref={targetRef} className="block  w-full">
          {project.video && (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-72 w-full object-cover object-top"
            />
          )}
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="h-72 w-full object-cover object-top"
            />
          )}
        </div>
          <Cursor
            attachToParent
            variants={{
              initial: { scale: 0.3, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.3, opacity: 0 },
            }}
            springConfig={{
              bounce: 0.001,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.15,
            }}
            onPositionChange={handlePositionChange}
          >
            <motion.div
              animate={{
                width: isHovering ? 180 : 16,
                height: isHovering ? 32 : 16,
              }}
              className='flex items-center justify-center rounded-[24px] bg-black/60 backdrop-blur-xl shadow-lg dark:shadow-black/20 border border-black'
            >
              <AnimatePresence>
                {isHovering ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className='inline-flex w-full items-center justify-center'
                  >
                    <div className='inline-flex items-center text-sm text-white'>
                      Click To View Details <PiPlusCircleDuotone className='ml-1 h-4 w-4' />
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </Cursor>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} className="fixed h-full z-50  w-full inset-0 flex items-center justify-center backdrop-blur-xl">
            <div
              className="bento-border cursor-default z-50  relative flex flex-col gap-3 p-6 max-w-xl w-full m-2">
              <button onClick={() => setIsOpen(false)} className=' top-5 right-5 absolute' >
                <RxCross2 className=' size-6' />
              </button>
              <h1 className=' text-3xl font-semibold text-left'>{project.title}</h1>
              <p className=' text-left'>{project.description}</p>
              <div className=' flex gap-3'>
                {
                  project.links.map((link, i) => (
                    <a key={i} href={link.href} target='_blank' className=' flex gap-2 items-center border rounded-xl shadow-md bg-black dark:bg-white text-white dark:text-black px-3 p-1 hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl' >
                      {link.type}
                      {link.icon}
                    </a>
                  ))
                }
              </div>
              <div className="block cursor-pointer w-full">
                {project.video && (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-72 rounded-lg w-full object-cover object-top"
                  />
                )}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-72 rounded-lg w-full object-cover object-top"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence >
    </>
  );
}
