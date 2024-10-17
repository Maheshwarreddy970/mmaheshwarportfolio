"use client"

import { cn } from '@/lib/utils';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { LuPlus } from 'react-icons/lu';

interface WorkExprienceCardProps {
    logoUrl: string;
    company: string;
    title: string;
    href?: string;
    period: string;
    description?: string[];
}

export default function WorkExprienceCard({
    logoUrl,
    company,
    title,
    period,
    description,
}: WorkExprienceCardProps) {

    const [isExpanded, setIsExpanded] = React.useState(false);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (

        <a onClick={handleClick} className=" flex w-full  group min-h-24 gap-5  last:border-b-0">
            <img src={logoUrl} alt='WorkLogo' className=' rounded-xl border dark:border-white/50  size-12 bg-muted-background dark:bg-foreground'></img>
            <div className=' w-full'>
                <div className=' flex w-full justify-between items-center'>
                    <h3 className=' font-semibold text-base'>{title}</h3>
                    <LuPlus
                        className={cn(
                            "size-5 translate-x-0 transform transition-all duration-300 ease-out  ",
                            isExpanded ? "rotate-45" : "rotate-0"
                        )}
                    />
                </div>
                <div className=" leading-5	 text-sm ">
                    <p>{period}</p>
                    <p>{company}</p>
                </div>
                <AnimatePresence initial={false}>
                    {
                        isExpanded &&
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,

                                height: isExpanded ? "auto" : 0,
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className=' text-sm my-3'
                        >{
                                description?.map((data, i) => (
                                    <li className='list-disc ' key={i}>
                                        {data}
                                    </li>
                                ))
                            }
                        </motion.ul>
                    }
                </AnimatePresence>
            </div>
        </a>
    )
}
