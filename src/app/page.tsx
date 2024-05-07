"use client"
import Form from "@/components/Form";
import Questions from "@/components/Questions";
import { useEffect, useState } from "react";
import {getFirestore, getDocs, collection} from "firebase/firestore"
import {app}from "@/firebase/config"

interface Questions {
  id: string;
  question: string ;
}

export default function Home() {
  const [ questions, setQuestions ] = useState<Questions[]>([])

  console.log(questions)

  useEffect(() => {
    const querydb = getFirestore(app)
    const queryCollection = collection(querydb, "questions")
    getDocs(queryCollection)
    .then(res => setQuestions(res.docs.map((question: { id: string; data: any }) => ({id : question.id, ...question.data()}))))
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
