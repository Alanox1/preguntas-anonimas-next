"use client"
import React, { ChangeEvent, useState } from 'react'
import { db } from '@/firebase/config';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { QuestionType } from '@/questionType';
interface Question {
  question: string;

  // Otras propiedades si las hay
}



interface FormProps {
 changeQuestions: (newQuestions: QuestionType[]) => void; 
  questions: QuestionType []; 
}



const Form: React.FC<FormProps>  = ({ changeQuestions , questions }) => {

const [ value, setValue ] = useState("")

const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newQuestion: QuestionType  = {
      
        question : value,
        
    }

    changeQuestions([...questions, newQuestion])

    setValue("")

    try {
      // Obtiene una referencia a la colección de preguntas
      const questionsRef = collection(db, 'questions');
      
      // Agrega la nueva pregunta a Firestore, Firestore generará automáticamente un ID único
      await addDoc(questionsRef, {
        question : value,
        // Puedes agregar más campos si lo necesitas
      });

    } catch (error) {
      console.error('Error al agregar la pregunta:', error);
    }
}
  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col'>
          <label htmlFor="questionInput" className='bg-pink-500 p-4 text-2xl text-white'>Questioncy</label>
          <input id="questionInput"  type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Me pregunto si...' className='p-8 text-2xl' />

          <button type='submit' className='mt-4 text-center bg-pink-500 p-4 text-xl text-white'>Enviar pregunta</button>
    </form>
  )
}

export default Form