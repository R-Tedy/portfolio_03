import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section>
      <h2 className='font-black text-7xl text-white text-center whitespace-nowrap overflow-clip'>about . about . about . about</h2>
      <div className='bg-black w-full -mt-10 p-4 flex items-center justify-center flex-col'>
        <Image
          src={'/images/about_01.jpg'}
          alt='about image'
          width={250}
          height={250}
          className='my-8 w-full md:w-9/12 lg:w-6/12 object-cover'
        />
        <p className='text-white text-center px-4 w-full md:w-9/12 lg:w-6/12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos laborum iusto recusandae perferendis fugit aliquid accusamus labore. Necessitatibus excepturi placeat quia aspernatur dolore nemo, omnis impedit tenetur totam hic.
        </p>
      </div>
    </section>
  )
}

export default About