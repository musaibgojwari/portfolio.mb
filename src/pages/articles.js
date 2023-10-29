import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React, { useRef } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/smooth scrolling in reactjs.png"
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
const articles = () => {

const ImageFramer = motion(Image)

const FeaturedArticle = ({title,summary,time,img,link}) => {
    return (
        <li className='col-span-1'>
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
            <Image className=' w-full h-auto' src={img} alt={title} priority sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"></Image>
          </Link>

          <Link href={link} target='_blank'>
          <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:udeline xs:text-lg'>{title}</h2>
          </Link>
          <p className='text-sm mb-2'>{summary}</p>
          <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}


const MovingImg = ({img,title,link}) => {
    
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const imgRef = useRef(null)


    function HandleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
    }

    return (
        <Link className='cursor-pointer  rounded-lg' href={link} target='_blank' 
        
        onMouseMove={HandleMouse}
        onMouseLeave={handleMouseLeave}
        >
            
        <h2 className='text-xl font-semibold'>{title}</h2>
        <ImageFramer style={{x:x, y:y}} ref={imgRef} href={link} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>
    )
}
const Article = ({img,title,date,link}) => {
   return <motion.li className='w-full flex relative p-4 py-6  items-center justify-between mb-4 rounded-xl bg-light text-dark border-2 border-dark border-solid first:mt-0 sm:flex-col sm:pl-0 xs:text-sm'
   initial={{y:200}}
   whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
   viewport={{once:true}}
   >
        <MovingImg title={title} link={link} img={img} />
          <span className='text-primary text-sm sm:self-start'>{date}</span>
    </motion.li>
}

  return (
    <>
    <Head>
        <title>CodeBucks | Aboute Page</title>
        <meta name='description' content='any description' />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col justify-center items-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Words can change the world!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch" 
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                9 min read"
                link="/"
                img={article1}
                />
                <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch" 
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                9 min read"
                link="/"
                img={article2}
                />
            </ul>

            <h2 className='font-xl font-semibold text-center'>Articles</h2>
            <ul>
                <Article title="to the moon"
                link="/"
                date="22 March,2022"
                /><Article title="to the moon"
                link="/"
                date="22 March,2022"
                /><Article title="to the moon"
                link="/"
                date="22 March,2022"
                /><Article title="to the moon"
                link="/"
                date="22 March,2022"
                /><Article title="to the moon"
                link="/"
                date="22 March,2022"
                /><Article title="to the moon"
                link="/"
                date="22 March,2022"
                /><Article title="to the moon"
                link="/"
                date="22 March,2022"
                />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles