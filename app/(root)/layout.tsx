import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div className='max-w-[1240px] w-full p-2'>
      <Header/>
      {children}
    </div>
  )
}

export default layout