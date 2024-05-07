import React from 'react'

const Question = ({question}) => {
  return (
    <div className='flex flex-col '>
        <p className='bg-yellow-500 p-2 '>Question</p>
        <p className='bg-white p-4' >{question}</p>
    </div>
  )
}

export default Question