import Link from 'next/link'
import React, { useRef } from 'react'
import exp from "../../public/Json/experience.js"
import educ from "../../public/Json/education.js"
import { motion, useScroll, useTransform } from 'framer-motion'

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
    {
        target: ref,
        offset: ["start end","center start"],
    }
)

    const Details = ({position,company,companyLink,time,address,work}) => {

        return at = ({degree,time,location,others}) => {
        return (
            <>
                <div className='flex flex-col font-bold justify-center items-start mb-8'>
                    <h1 className='text-2xl text-dark font-bold'>{degree}</h1>
                    <p className='text-dark/75'>{time}&nbsp;|&nbsp;{location}</p>
                    <p className='text-dark font-semibold'>{others}</p>
                </div>
            </>
        )
    }
  return (
    <div>
        <h1 className='text-center font-bold text-8xl text-dark mt-24 mb-12 md:text-6xl xs:text-4xl md:mb-16'>Experience</h1>

        <div ref={ref} className='w-[75%] mx-auto relative bg-pink-500 items-center lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}} className='bg-dark w-1 h-full absolute top-0 left-6 origin-top md:w-[2px] md:left-[30px]' />
            <ul className='ml-4 xs:ml-2'>
                {exp.map( (element,index) => {
                    return <li className='flex flex-col my-8 first:mt-0 last:mb-0 w-[60%] font-bold justify-between mx-auto tex-center mb-8 bg-red-500 md:w-[80%]' key={element.location + "-" + index}>
                    <Details position={element.position} company={element.company} companyLink={element.companyLink} time={element.time} address={element.location} work={element.work} />
                </li>
                }) }
            </ul>
        </div>


        <h1 className='text-center font-bold text-8xl text-dark mt-24 mb-12 md:text-6xl xs:text-4xl md:mb-16'>Education</h1>

        <div  className='relative w-[75%] mx-auto items-center bg-orange-500 lg:w-[90%] md:w-full '>
        <motion.div style={{scaleY:scrollYProgress}} className='bg-dark w-1 h-full absolute top-0 left-6 origin-top md:w-[2px] md:left-[30px] xs:left-[20px] ' />
            <ul className='ml-4 xs:ml-2'>
                {educ.map( (element,index) => {
                    return <li key={element.degree + "-" + index} className='w-[60%] mx-auto bg-red=600 '
                    >
                    <Educat degree={element.degree} time={element.time} location={element.location} others={element.others} />
                </li>
                })}
            </ul>
        </div>
    </div>
  )
}
}

export default Experience;