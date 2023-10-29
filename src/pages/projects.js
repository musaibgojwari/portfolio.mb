import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import TransitionEffect from '@/components/TransitionEffect'
const projects = () => {

  const FeaturedProject = ({type,title,summary,img,link,github}) => {
    return (
        <article className='w-full flex items-center justify-between border-2 border-solid rounded-3xl bg-light border-dark shadow-2xl p-8 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
          <div className='absolute bg-yellow-300 top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]' />
          <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
            <Image className='w-full h-auto' src={img} alt={title}></Image>
          </Link>
        <div className='w-1/2 flex flex-col items-start justify-between ml-4 lg:w-full lg:pl-0 lg:6'>
          <span className='text-xl font-medium capitalize text-primary xs:text-base' >{type}</span>
          <Link href={link} target='_blank' >
            <h2 className='text-4xl w-full font-bold my-2 hover:underline sm:text-sm lg:text-2xl'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'> 
          <Link className='w-8 md:w-6' href={github} target='_blank'> <GithubIcon /> </Link>
          <Link href={link} target='_blank'
          className='ml-4 p-2 px-6 bg-dark text-lg text-light rounded-lg font-semibold lg:w-full sm:px-4 sm:text-base'
          >Visit Project</Link>
        </div>
        </div>
        </article>
    )
  }

  const Project = ({title,type,img,link,github}) => {
    return (
      <article className='w-full flex flex-col items-center justify-center border-2 border-solid rounded-2xl bg-light border-dark p-6 relative xs:p-4'>
        <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
            <Image className='w-full h-auto' src={img} alt={title} priority 
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"></Image>
          </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4 '>
          <span className='text-xl font-medium capitalize text-primary lg:text-lg md:text-base' >{type}</span>
          <Link href={link} target='_blank' >
            <h2 className='text-3xl w-full font-bold my-2 hover:underline md:text-base'>{title}</h2>
          </Link>
        <div className='mt-2 w-full flex items-center justify-between'> 
          <Link href={link} target='_blank'
          className='text-lg text-dark rounded-lg font-semibold underline'
          >Visit Project</Link>
          <Link className='w-10' href={github} target='_blank'> <GithubIcon /> </Link>
        </div>
        </div>
      </article>
    )
  }
  
  return (
    <>
    <Head>
  <title>CodeBucks | Aboute Page</title>
  <meta name='description' content='any description' />
    </Head>
    <TransitionEffect />
    <main className='w-full flex flex-col items-center justify-center mb-16'>
        <Layout className='pt-16'>
          <AnimatedText text="imagination trumps knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

          <div className='grid grid-cols-12 gap-16 p-12gap-y-32 border-light xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject 
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                img={project1}
                type="featured project"
              />
            </div>
            <div className="col-span-6">
            <Project 
                title="Crypto Screener Application"
                link="/"
                github="/"
                img={project1}
                type="featured project"
              />
            </div>
            <div className="col-span-6">
            <Project 
                title="Crypto Screener Application"
                link="/"
                github="/"
                img={project1}
                type="featured project"
              />
            </div>

            <div className="col-span-6">
            <Project 
                title="Crypto Screener Application"
                link="/"
                github="/"
                img={project1}
                type="featured project"
              />
            </div>
            <div className="col-span-6">
            <Project 
                title="Crypto Screener Application"
                link="/"
                github="/"
                img={project1}
                type="featured project"
              />
            </div>
              
          </div>
        </Layout>
    </main>
    </>
  )
}

export default projects