import BaseCard from '@/app/components/cards/BaseCard'
import { Input } from '@nextui-org/react'
import React from 'react'

const Register = () => {
  return (
    <div className='w-1/4 flex justify-center items-center h-screen mx-auto'>

      <BaseCard title='Register'>
        <div className=''>
          <Input size='sm' variant='bordered' type="text" label="Name" className='mb-4' />
          <Input size='sm' variant='bordered' type="email" label="Email" className='mb-4' />
          <Input size='sm' variant='bordered' type="password" label="Password" className='mb-4' />
          <Input size='sm' variant='bordered' type="password" label="Confirm Password" />
        </div>
      </BaseCard>
    </div>
  )
}

export default Register