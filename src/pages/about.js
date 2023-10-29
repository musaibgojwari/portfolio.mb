import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import aboutPic from "../..//public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import Cards from '@/components/Cards'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'
const About = () => {
  return (

    <>
    <Head>
  <title>CodeBucks | Aboute Page</title>
  <meta name='description' content='any description' />
    </Head>
    <TransitionEffect />
    <main className='flex flex-col w-full items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!7xl sm:!text-6xl xs:!4xl sm:mb-8'/>
        <div className="grid grid-cols-8 w-full gap-16 sm:gap-8 text-dark">
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:!col-span-8 md:order-2'>
            <h1 className='font-bold text-dark/75 mb-2'>Biography</h1>
            <p className='font-semibold mb-4'>- Hi, I'm Musaib Bashir, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
              new and innovative ways to bring my clients' visions to life. </p>

            <p className='font-semibold mb-4'>I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
            <p className='font-semibold'>
             Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
          </div>
          <div className="relative border-4 border-dark border-solid bg-yellow-500 col-span-2  xl:col-span-4 md:!col-span-8 md:order-1">
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-[2rem]' />
            <Image className='w-full h-atuo rounded-2xl' src={aboutPic} alt="mypic" priority 
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"></Image>
          </div>

          <div className='flex flex-col items-end justify-center col-span-3 xl:flex-row xl:items-center xl:col-span-8 md:order-3' >
            <Cards digit="40+" tagline="satisfied Clients"  />
            <Cards digit="50+" tagline="projects completed"  />
            <Cards digit="4+" tagline="years of experience"  />
          </div>
        </div>
      <Skills/>
      <Experience />
      </Layout>
    </main>

    </>
  )
}

export default About