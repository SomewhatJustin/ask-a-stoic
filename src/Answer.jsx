import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Answer.css'

export default function Answer({ myPhil, myQuestion, myAnswer }) {

  if (!myAnswer) {
    return (
      <div id="my-answer">
        <p>Waiting for {myPhil} to answer...</p>
      </div>
    )
  } else {
    const myAnswerP = myAnswer.split("\n").map(element => <p>{element}</p>)
    return (
      <div id="my-answer">
        <p>{myPhil}'s answer to your question, "{myQuestion}" is:</p>
        {myAnswerP}
      </div>
    )
  }



}
