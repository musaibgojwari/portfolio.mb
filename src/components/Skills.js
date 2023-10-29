import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  const Skill = ({x=0,y=0,name}) => {


    return <>
            <motion.div className={`flex absolute items-center justify-center py-3 px-6 cursor-pointer shadow-dark text-light bg-dark rounded-full lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold`}
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={ {duration:1.5} }
            viewport={{once:true}}
            >{name}</motion.div>
          </>
  }
  return (
    <>
      <h1 className='text-8xl font-bold text-center mt-24 md:text-6xl md:mt-32'>Skills</h1>
      <div className='relative flex flex-col items-center justify-center w-full h-screen bg-circularLight rounded-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm'>
        <motion.div className='absolute flex items-center justify-center p-8 text-light bg-dark rounded-full lg:p-6 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}
        >
          Web
        </motion.div>
        <Skill x="-20vw" y="2vw" name="HTML" />
        <Skill x="-5vw" y="-10vw" name="CSS" />
        <Skill x="20vw" y="6vw" name="JavaScript" />
        <Skill x="0vw" y="12vw" name="ReactJS" />
        <Skill x="-20vw" y="-15vw" name="NextJS" />
        <Skill x="15vw" y="-12vw" name="GatsbyJS" />
        <Skill x="32vw" y="-5vw" name="Web Design" />
        <Skill x="0vw" y="-20vw" name="Figma" />
        <Skill x="-25vw" y="18vw" name="Firebase" />
      </div>
    </>
  )
}

export default Skills