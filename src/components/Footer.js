import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex items-center justify-between w-full text-dark px-28 py-8 border-t-dark border-4 md:p-4 md:!relative text-sm sm:flex-col sm:items-center sm:space-y-4 dark:bg-dark dark:text-light border-t-1 dark:border-light'>
        <h2 className='font-semibold text-xl capitalize md:text-sm first:'>2023 &copy; all rights reserved.</h2>
        <h2 className='font-semibold text-xl capitalize md:text-sm '>built with &hearts; by <Link href="" className='underline'>Musaib Bashir</Link> </h2>
        <Link href="/" className='underline font-semibold text-xl capitalize md:text-sm'>say hello</Link>
    </div>
  )
}

export default Footer