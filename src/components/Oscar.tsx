import React from 'react'

type OscarProps = {
    children: React.ReactNode
}
const Oscar = ({ children } : OscarProps) => {
  return (
    <div>
        <h2>{children}</h2>
    </div>
  )
}

export default Oscar