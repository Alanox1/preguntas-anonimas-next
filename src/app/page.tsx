"use client"
import Form from "@/components/Form";
import Questions from "@/components/Questions";
import { useEffect, useState } from "react";
import {getFirestore, getDocs, collection} from "firebase/firestore"
import {app}from "@/firebase/config"

interface QuestionsType {
  id: string;
  question: string ;
}

interface FirebaseQuestionData {
  question: string;
  // Agrega aquí cualquier otro campo que esperes recibir de Firestore
}

export default function Home() {
  const [ questions, setQuestions ] = useState<QuestionsType[]>([])

  console.log(questions)

  useEffect(() => {
    const querydb = getFirestore(app)
    const queryCollection = collection(querydb, "questions")
    getDocs(queryCollection)
    // .then(res => setQuestions(res.docs.map((question: { id: string; data: any }) => ({id : question.id, ...question.data()}))))
    .then(res => setQuestions(res.docs.map((question: { id: string; data: any }) => ({id : question.id,question: (question.data() as FirebaseQuestionData).question}))))
    .catch(err => {
      console.log(err)
    })
  },[])
  console.log(questions)
  return (
    <div>
      <Form changeQuestions = { setQuestions } questions={ questions } />
      <Questions questions={questions} />
    </div>
  );
}
