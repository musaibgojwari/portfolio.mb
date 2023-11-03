import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='flex fixed items-center justify-center left-1 bottom-1 md:right-3 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
        <div className='flex relative items-center justify-center w-48 h-auto md:w-24'>
            <CircularText className=" fill-dark dark:fill-light animate-spin-slow duration-200"/>
            <Link href="mailto:musaibx@gmail.com" className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid
bg-dark rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark
dark:hover:text-light dark:hover:border-light dark:shadow-light/25 md:w-12 md:h-12 md:text-[10px]
">Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe