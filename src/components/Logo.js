import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" 
        className='h-16 w-16 bg-dark flex items-center justify-center text-light rounded-full text-2xl font-bold dark:bg-light dark:text-dark'
        whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration:1,repeat:Infinity}
        }}
        >MB</MotionLink>
    </div>
  )
}

export default Logo