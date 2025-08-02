import { navLinksA } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Header = () => {
  return (
    <nav className='w-full p-2 text-sm font-sans font-medium'>
      <div className='w-full flex justify-between items-center'>
        <Image
          alt='logo image'
          src={'/logo.svg'}
          height={32}
          width={64}
        />
        <div className='hidden lg:block'>
          <ul className='flex gap-2'>
            {navLinksA.map((nav, index) => (
              <li
                key={index}
              >
                <Link
                  href={nav.url}
                  className='hover:font-bold hover:underline'
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link 
            href={'/profile'}
            className='flex gap-2 items-center'
          >
            Roland Stedy <span className='text-gray-500'>2 Aug 25</span>
            <Avatar>
              <AvatarImage src={'/images/profile-01.jpg'}/>
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header