import React from 'react'
import Question from './Question'


const Questions = ({ questions } ) => {
   console.log(questions)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
    {/* // <div style={{display : "grid", gridTemplateColumns : "repeat(auto-fit,minmax(250px,1fr))",gap : "32px"}}> */}
            {questions.map(({ question,id }) => <Question key={id || questions.lenth + 1} question={question} /> )}

    </div>
  )
}

export default Questions