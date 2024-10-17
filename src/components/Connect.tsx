import { data } from '@/data/resume';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

export default function Connect() {
  return (
    <section className="grid w-full grid-cols-2 gap-2">
      {data.contact.social.map((info, i) => (
        <div
          key={i}
          className={cn(
            'rounded-2xl border shadow-md p-4 flex flex-col gap-4 border-opacity-35 hover:border-opacity-100 transition-all duration-100 ease-in-out hover:border-black dark:border-opacity-35 dark:hover:border-opacity-100 dark:border-white/50',
            info.them=="amber" && `bg-amber-500/10 border-amber-500 dark:border-amber-500 hover:border-amber-500`,
            info.them=="sky" && `bg-sky-500/10 border-sky-500 dark:border-sky-500 hover:border-sky-500`
          )}
        >
          {info.icon}
          <div>
            <h1 className="font-medium text-lg">{info.name}</h1>
            <p className="text-sm text-wrap">{info.username}</p>
          </div>
          <div>
            <Link
              href={info.url}
              className={cn(
                'group w-full py-1.5 px-3 rounded-xl border dark:border-opacity-40  flex justify-between items-center',
                'bg-black text-white',
                info.them=='amber' && `bg-amber-500`,
                info.them=='sky' && `bg-sky-500`,
              )}
            >
              {info.username[0] === '@' ? 'Follow' : 'Connect'}
              <FiArrowRightCircle
                className={cn(
                  'group-hover:fill-white size-5 group-hover:text-black -rotate-45 group-hover:rotate-0',
                  'transition-all duration-200 ease-in-out translate-x-1',
                  info.them=='sky' && `   group-hover:text-sky-500`,
                  info.them=='amber' && `   group-hover:text-amber-500`
                )}
              />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
