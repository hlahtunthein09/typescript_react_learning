import React from 'react'

type BtnProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Btn = ({handleClick} : BtnProps) => {
  return (
    <div>
        <button
            className='text-lg border rounded p-2 mt-3 cursor-pointer'
            onClick={(event) => handleClick(event, 1)}
        >Click Me</button>
    </div>
  )
}

export default Btn