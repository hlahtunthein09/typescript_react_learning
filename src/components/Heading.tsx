import React from 'react'


type HeadingProps = {
    children: string    
}

const Heading = ({ children } : HeadingProps) => {
  return (
    <div>
        <h2 className='text-2xl font-bold'>{children}</h2>
    </div>
  )
}

export default Heading