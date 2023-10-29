import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false)
  const [mode,setMode] = useThemeSwitcher();


  const handleClick = () => {
    setIsOpen(!isOpen)
  }

    const CustomLinks = ({href,title,className=""}) => {
        const router = useRouter();
        return (
            <Link href={href} className={`${className} relative group`}>
                {title}
                <span className={`inline-block absolute h-[1px] bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
            
        )
    }

    const CustomMobileLinks = ({href,title,className="",toggle}) => {
      const handleClick = () => {
        toggle();
        router.push(href)
      }
      const router = useRouter();
      return (
          <button href={href} className={`${className} relative group my-2`} onClick={handleClick} >
              {title}
              <span className={`inline-block absolute h-[1px] bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
          </button>
          
      )
  }

  return (
    <header className='w-full px-24 py-8 flex justify-between items-center relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm mb-2 ${isOpen ? `rotate-45 translate-y-1`: `-translate-y-0.5`} `}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm mb-2 my-0.5 ${isOpen? 'opacity-0': `opacity-100`}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm mb-2 ${isOpen ? `-rotate-45 -translate-y-1`: `translate-y-0.5`} `}></span>
      </button>
       
       <div className='w-full flex justify-between items-center lg:hidden' >
       <navbar className='space-x-4 text-dark'>
            <CustomLinks href="/" title="Home"></CustomLinks>
            <CustomLinks href="/about" title="About"></CustomLinks>
            <CustomLinks href="/projects" title="Project"></CustomLinks>
            <CustomLinks href="/articles" title="Articles"></CustomLinks>
       </navbar>

       <nav className='flex justify-center items-center flex-wrap space-x-4'>
            <motion.a href="https://www.twitter.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <TwitterIcon />
            </motion.a>
            <motion.a href="https://www.github.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <GithubIcon className="text-dark" />
            </motion.a>
            <motion.a href="https://www.linkedin.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <LinkedInIcon />
            </motion.a>
            <motion.a href="https://www.pinterest.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <PinterestIcon />
            </motion.a>
            <motion.a href="https://www.dribble.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <DribbbleIcon />
            </motion.a>
            
            <button  onclick={ () => 
                 setMode(mode === "light" ? "dark" : "light")
                }
                className='ml-2 p-1 flex items-center justify-center rounded-full'
                >
                  {console.log("mode=>",mode)}
              {
                
                mode === "dark" ?
                <SunIcon className={"fill-dark"} /> :
                <MoonIcon  className={"fill-dark"}/>
              }
            </button>
       </nav>
       </div>

       <motion.div className={`min-w-[70vw]  flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 rounded-lg backdrop-blur-md bg-dark/90 ${isOpen ? "flex" : "hidden"}`}
       initial= { { scale:0, opacity:0, x:"-50%", y:"-50%"} }
       animate={ { scale:1,opacity:1 } }
       >
       <navbar className='flex flex-col items-center justify-center text-light'>
            <CustomMobileLinks href="/" title="Home" toggle={handleClick} />
            <CustomMobileLinks href="/about" title="About" toggle={handleClick} />
            <CustomMobileLinks href="/projects" title="Project" toggle={handleClick} />
            <CustomMobileLinks href="/articles" title="Articles" toggle={handleClick} />
       </navbar>

       <nav className='flex justify-center items-center flex-wrap space-x-4 sm:space-x-1'>
            <motion.a href="https://www.twitter.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <TwitterIcon />
            </motion.a>
            <motion.a href="https://www.github.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <GithubIcon className="text-dark" />
            </motion.a>
            <motion.a href="https://www.linkedin.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <LinkedInIcon />
            </motion.a>
            <motion.a href="https://www.pinterest.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <PinterestIcon />
            </motion.a>
            <motion.a href="https://www.dribble.com" 
            whileHover={{
              y:-2
            }}
            whileTap={{
              scale:0.9
            }}
            className='w-6'
            target='_blank'>
              <DribbbleIcon />
            </motion.a>
            
            <button  onclick={ () => 
                 setMode(mode === "light" ? "dark" : "light")
                }
                className='ml-2 p-1 flex items-center justify-center rounded-full'
                >
                  {console.log("mode=>",mode)}
              {
                
                mode === "dark" ?
                <SunIcon className={"fill-dark"} /> :
                <MoonIcon  className={"fill-dark"}/>
              }
            </button>
       </nav>
       </motion.div>
       <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
       </div>
    </header>
  )
}
