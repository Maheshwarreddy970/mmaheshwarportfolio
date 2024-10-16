
import React from 'react'
import { GoLinkExternal } from 'react-icons/go';

interface EducationCardProps {
    logoUrl: string;
    school: string;
    fieldofstudy?: string;
    href?: string;
    period: string;
    description?: string;
}



export default function EducationCard({
    logoUrl,
    school,
    fieldofstudy,
    href,
    period,
    description,
}: EducationCardProps) {


    return (
        <div className=" relative flex w-full group min-h-24 p-2 gap-3 border-b last:border-b-0">
            <img src={logoUrl} alt='WorkLogo' className=' border size-12 bg-muted-background dark:bg-foreground'></img>
            <div >
                <div className=' flex items-center'>
                    <h3 className=' font-semibold text-base'>{school}</h3>
                </div>
                <div className=" leading-5	 text-sm ">
                    <p>{fieldofstudy}</p>
                    <p>{period}</p>
                </div>
            </div>
            {
                href &&
                <a href={href} target='_blank' className=' absolute top-1 right-1'>
                    <GoLinkExternal className='' />
                </a>
            }
        </div>
    )
}
