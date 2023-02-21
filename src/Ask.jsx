import { useState } from 'react'
import reactLogo from './assets/react.svg'
import marcus from './assets/marcus.jpg'
import seneca from './assets/seneca.jpg'
import epictetus from './assets/epictetus.jpg'
import './Ask.css'
import { askQuestion } from './utlis'

export default function Ask({ myQuestion, setMyQuestion, myPhil, setMyPhil, setIsAskMode, sendQuestion }) {



  return (
    <div id="ask-module">
      <label htmlFor="phil">Select your philosopher</label>
      <select id="phil" name="phil" onChange={(e) => setMyPhil(e.target.value)}>
        <option value="Seneca">Seneca</option>
        <option value="Marcus Aurelius">Marcus Aurelius</option>
        <option value="Epictetus">Epictetus</option>
      </select>
      <textarea name="question" id="question" cols="30" rows="10" placeholder="I'm thinking about moving to the countryside, but I'm worried I will lose my friends. What should I do?" onChange={e => setMyQuestion(e.target.value)} value={myQuestion}></textarea>
      <button onClick={sendQuestion}>Ask</button>
    </div >

  )

}
