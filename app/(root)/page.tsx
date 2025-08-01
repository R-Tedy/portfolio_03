import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='font-bold underline capitalize'>This is a new page for the website.</h1>
      <Button className='capitalize font-bold cursor-pointer'>
        Click this button
      </Button>
    </div>
  )
}

export default page