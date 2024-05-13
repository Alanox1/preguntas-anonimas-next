"use client"
import React, {useState, useEffect} from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import {app}from "@/firebase/config"
interface ParamsType {
  // Define la estructura de los parámetros aquí
  id : string;
}

const Page = ({ params } : {params : ParamsType}) => {
  const [ question, setQuestion ] = useState<string | null>(null)
  console.log(question)
  const [loading, setLoading] = useState<boolean>(true);
  // console.log("hola soy",params.id)
    const id  = params.id
    // console.log(id)
  
  useEffect(() => {
    if(!id) return
    const queryDb = getFirestore(app);
    const queryDoc = doc(queryDb, 'questions', id);
    
    getDoc(queryDoc)
      .then(res => {
        const pregunta = res.data();
        if (pregunta && typeof pregunta.question === 'string') {
          setQuestion(pregunta.question);
        } else {
          // Manejar el caso donde pregunta es undefined
          setQuestion(null)
        }
        setLoading(false);
      })
      .catch(error => {
        // Manejar errores
        console.log(error);
        setLoading(false);
      });
  }, [id])







  // const queryDb = getFirestore(app)
  // const queryDoc = doc(queryDb, "questions", id)
  // getDoc(queryDoc)
  //   .then(res => {
  //     const pregunta = res.data()
  //     if (pregunta) { // Verificar si pregunta no es undefined

       
  //       setQuestion(pregunta.question);
  //     } else {
  //       // Manejar el caso donde pregunta es undefined
  //     }     
  // }) .catch(error => {
  //   // Manejar errores
  //   console.log(error)
  // });
   
  
  console.log(question)
  return (
    <div className='text-white'>
    {loading ? (
      <p className='text-white'>Cargando...</p>
    ) : question ? (
      <>
        <h3>{question}</h3>
        <button>Volver a inicio</button>
      </>
    ) : (
      <p className='text-white'>No se encontró la pregunta</p>
    )}
  </div>
    
  )
}

export default Page