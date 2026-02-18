import React from 'react'


type PersonType = {
    name: {
        firstName: string,
        lastName: string
    }
}

const Person = ({ name }: PersonType) => {
  return (
    <div>
        {name.firstName} {name.lastName}
    </div>
  )
}

export default Person