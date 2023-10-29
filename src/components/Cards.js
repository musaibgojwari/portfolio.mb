import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const Cards = ({digit,tagline}) => {
  const AnimatedNumbers = ({value}) => {
    
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000});
    const isInView = useInView(ref);

    useEffect(() => {
      if(isInView) {
        motionValue.set(value);
      }

    }, [isInView,value,motionValue])
    
    useEffect(() => {
      springValue.on("change",(latest) => {
        if(ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent=latest.toFixed(0)
        }
      })
    }, [springValue,value])
    

    return <span ref={ref}></span>
  }
  return (
    <div className='flex flex-col w-full text-dark text-center mb-4'>
      <span className='inline-block text-8xl font-bold' >
          <AnimatedNumbers value={digit} />+
        </span>
        <p className='text-base font-bold text-gray-400 capitalize'>{tagline}</p>
    </div>
  )
}

export default Cards