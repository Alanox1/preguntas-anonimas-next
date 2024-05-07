"use client"
import Form from "@/components/Form";
import Questions from "@/components/Questions";
import { useEffect, useState } from "react";
import {getFirestore, getDocs, collection} from "firebase/firestore"
import {app}from "@/firebase/config"


export default function Home() {
  const [ questions, setQuestions ] = useState([])

  console.log(questions)

  useEffect(() => {
    const querydb = getFirestore(app)
    const queryCollection = collection(querydb, "questions")
    getDocs(queryCollection)
    .then(res => setQuestions(res.docs.map(question => ({id : question.id, ...question.data()}))))
  },[])
  console.log(questions)
  return (
    <div>
      <Form changeQuestions = { setQuestions } questions={ questions } />
      <Questions questions={questions} />
    </div>
  );
}
