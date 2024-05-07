"use client"
import React, { useState } from 'react'
import { db } from '@/firebase/config';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import Question from './Question';


const Form = ({ changeQuestions , questions }) => {
const [ value, setValue ] = useState("")

const handleSubmit = async (e) => {
    e.preventDefault()

    const newQuestion = {
        question : value
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
  
      console.log('La pregunta se agregó correctamente.');
    } catch (error) {
      console.error('Error al agregar la pregunta:', error);
    }
}
  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col'>
          <label className='bg-red-500 p-4 text-2xl'>Questioncy</label>
          <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Me pregunto si...' className='p-6' />

          <button type='submit' className='mt-4 text-center bg-green-500 p-4 text-xl'>Enviar pregunta</button>
    </form>
  )
}

export default Form