import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-red-600 text-white h-full'>
        {children}
    </div>
  )
}

export default AuthLayout