import React from 'react'
interface Question {
    id: string;
    question: string;
}
const SingleQuestion: React.FC<Question> = ({question}) => {
  return (
    <div className='flex flex-col '>
        <p className='bg-yellow-500 p-2 '>Question</p>
        <p className='bg-white p-4' >{question}</p>
    </div>
  )
}

export default SingleQuestion