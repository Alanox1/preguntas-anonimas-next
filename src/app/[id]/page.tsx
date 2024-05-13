"use client"
import React, {useState} from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import {app}from "@/firebase/config"
interface ParamsType {
  // Define la estructura de los parámetros aquí
  id : string
}

const Page = ({ params } : {params : ParamsType}) => {
  const [ question, setQuestion ] = useState<string | null>(null)
 
  // console.log("hola soy",params.id)
    const id  = params.id
    // console.log(id)
  const queryDb = getFirestore(app)
  const queryDoc = doc(queryDb, "questions", id)
  getDoc(queryDoc)
    .then(res => {
      const pregunta = res.data()
      if (pregunta) { // Verificar si pregunta no es undefined

       
        setQuestion(pregunta.question);
      } else {
        // Manejar el caso donde pregunta es undefined
      }     
  }) .catch(error => {
    // Manejar errores
    console.log(error)
  });
   
  
  console.log(question)
  return (
    <>
      {
        !question 
        ? <p className='text-white'>Cargando...</p>
        : <div className='text-white'>
              <h3>{question}</h3>
              <button>Volver a inicio</button>
          </div>
      }
    </>
    
    
  )
}

export default Page