import { happyUsers, stats } from '@/constants'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='p-2'>
      <div className='flex flex-col lg:flex-row gap-2 items-center'>
        <div className='flex flex-col lg:flex-1 gap-2'>
          <h1 className='font-black text-9xl'>
            visual <br />
            poetry
          </h1>
          <div className='p-2 w-full flex justify-end'>
            <p className='w-8/12 lg:w-6/12 text-right'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates quasi molestiae aut deserunt, necessitatibus dolores.
            </p>
          </div>
          <div className='flex px-4'>
            {happyUsers.map((user, index) => (
              <Avatar
                key={index}
                className='border border-black -ml-2'
              >
                <AvatarImage src={user.img}/>
                <AvatarFallback>
                  {user.fallback}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className='flex p-4 gap-2 flex-col md:flex-row'>
            {stats.map((stat, index) => (
              <div
                key={index}
              >
                <h2 className='font-bold text-4xl italic flex'>
                  <span >+</span>{stat.numbers}k
                </h2>
                <p>
                  {stat.data}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full h-[32rem] lg:flex-1 relative '>
          <Image
            src={'/images/profile-02.jpg'}
            alt='hero image'
            width={250}
            height={250}
            className='object-cover w-full rounded-tl-[3rem] rounded-br-[3rem] h-full'
          />
          <div className='absolute top-0 right-0 rounded-bl-[1.5rem] p-1 bg-white'>
            <div className='bg-black p-2 rounded-full'>
              <Image
                src={'/icons/globe.svg'}
                alt='globe'
                width={32}
                height={32}
                className=''
              />
            </div>
          </div>
          <div className='absolute bottom-0 left-0 rounded-tr-[2rem] p-2 bg-white flex flex-col gap-1'>
            <div className='bg-black p-1 rounded-full'>
              <Image
                src={'/icons/globe.svg'}
                alt='globe'
                width={28}
                height={28}
                className=''
              />
            </div>
            <div className='bg-black p-1 rounded-full'>
              <Image
                src={'/icons/globe.svg'}
                alt='globe'
                width={28}
                height={28}
                className=''
              />
            </div>
            <div className='bg-black p-1 rounded-full'>
              <Image
                src={'/icons/globe.svg'}
                alt='globe'
                width={28}
                height={28}
                className=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero