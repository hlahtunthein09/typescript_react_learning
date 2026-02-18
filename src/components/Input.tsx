import React from 'react'

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({value, handleChange} : InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log(event.target.value);
        handleChange(event);

    }
  return (
    <div>
        <input
            className='ring-2'
            type= "text"
            value={value}
            onChange={handleInputChange}
        />
    </div>
  )
}

export default Input