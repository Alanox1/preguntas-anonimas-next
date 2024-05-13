import React from 'react'
import Link from 'next/link';
interface Question {
    id?: string;
    question: string;
}
const SingleQuestion: React.FC<Question> = ({question, id}) => {

  if (!id) return null;
  
  return (
    <Link href={`/${id}`}>
      <div className='flex flex-col'>
          <p className='bg-pink-500 p-4 text-white lg:text-3xl'>Question</p>
          <p className='bg-white py-8 px-4 text-xl overflow-wrap-normal xl:3xl' >{question}</p>
        </div>
    </Link>
      
    
  )
}

export default SingleQuestion