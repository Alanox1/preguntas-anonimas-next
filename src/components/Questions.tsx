import React from 'react'
import SingleQuestion from './Question'
interface QuestionsProps {
  questions: Question[];
}
interface Question {
  id?: string;
  question: string;
}

const Questions: React.FC<QuestionsProps> = ({ questions } ) => {
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-20'>
    {/* // <div style={{display : "grid", gridTemplateColumns : "repeat(auto-fit,minmax(250px,1fr))",gap : "32px"}}> */}
            {questions.map(({ question,id }, index) => <SingleQuestion key={id || index.toString()} id = {id} question={question} /> )}

    </div>
  )
}

export default Questions