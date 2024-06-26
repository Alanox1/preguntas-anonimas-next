"use client"
import Form from "@/components/Form";
import Questions from "@/components/Questions";
import { useEffect, useState } from "react";
import {getFirestore, getDocs, collection} from "firebase/firestore"
import {app}from "@/firebase/config"
import { QuestionType } from "@/questionType";
interface QuestionsType {
  id?: string;
  question: string ;
}

interface FirebaseQuestionData {
  question: string;
  // Agrega aquí cualquier otro campo que esperes recibir de Firestore
}

export default function Home() {
  const [ questions, setQuestions ] = useState<QuestionsType[]>([])
  const [ loading, setIsLoading ] = useState(false)

  useEffect(() => {
    const querydb = getFirestore(app)
    const queryCollection = collection(querydb, "questions")
    getDocs(queryCollection)
    // .then(res => setQuestions(res.docs.map((question: { id: string; data: any }) => ({id : question.id, ...question.data()}))))
    // .then(res => setQuestions(res.docs.map((question: { id: string; data: any }) => ({id : question.id,question: (question.data() as FirebaseQuestionData).question}))))
    .then((querySnapshot) => {
      const fetchedQuestions: QuestionsType[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as FirebaseQuestionData;
        const question: QuestionsType = {
          id: doc.id,
          question: ((doc.data() as FirebaseQuestionData)?.question ?? "")
          // Otros campos si los hay
        };
        fetchedQuestions.push(question);
      });
      setQuestions(fetchedQuestions);
      setIsLoading(true)
    })
    .catch(err => {
      console.log(err)
    })
  },[questions])

  return (
    <div>
      {
        loading
        ? <>
             <Form changeQuestions={(newQuestions: QuestionsType[]) => setQuestions(newQuestions)} questions={questions} />
             <Questions questions={questions} />
          </>
        :  <p className="text-white">Cargando...</p>
      }
    
    </div>
  );
}
