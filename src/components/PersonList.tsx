import React from 'react'

type PersonListProps = {
    names: {
        firstName: string,
        lastName: string,
    }[] //Note the brackets here at the end
}


const PersonList = ({names} : PersonListProps) => {
  return (
    <div className='mt-2'>
        Name List
        {names.map((name, idx) => (
            <h2 key={idx}>{name.firstName} {name.lastName}</h2>
        ))}
    </div>
  )
}

export default PersonList;