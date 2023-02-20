import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { askQuestion } from './utlis'
import Ask from './Ask'
import Answer from './Answer'

function App() {
  const [myPhil, setMyPhil] = useState("Seneca")
  const [myQuestion, setMyQuestion] = useState("")
  const [isAskMode, setIsAskMode] = useState(true)
  const [myAnswer, setMyAnswer] = useState("")

  useEffect(() => {
    async function getAnswer() {
      if (myQuestion) {
        const answer = await askQuestion(myPhil, myQuestion);
        setMyAnswer(answer);
      }
    }

    getAnswer();
  }, [isAskMode]);

  function handleSendQuestion() {
    setIsAskMode(false);
  }

  return (
    <div className="App">
      <h1>Ask a Stoic</h1>
      {isAskMode ? (
        <Ask
          myQuestion={myQuestion}
          setMyQuestion={setMyQuestion}
          myPhil={myPhil}
          setMyPhil={setMyPhil}
          setIsAskMode={setIsAskMode}
          sendQuestion={handleSendQuestion}
        />
      ) : (
        <Answer
          myPhil={myPhil}
          myQuestion={myQuestion}
          myAnswer={myAnswer}
        />
      )}
    </div>
  )
}

export default App
