import { useState } from 'react'
import reactLogo from './assets/react.svg'

export default function Answer({ myPhil, myQuestion, myAnswer }) {


  return (
    <div>
      <p>{myPhil}'s answer to your question, "{myQuestion}" is:</p>
      <p>{myAnswer}</p>
    </div>
  )

}
