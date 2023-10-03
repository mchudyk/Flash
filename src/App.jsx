import './App.css';
import { useState } from 'react'



const sampleCards = [
  { question: 'What is the capital of France?', answer: 'Paris'},
  { question: 'What is the capital of Italy?', answer: 'Rome'},
  { question: 'What is the capital of Ukraine?', answer: 'Kyiv'},
  { question: 'What is the capital of Poland?', answer: 'Warsaw'},
  { question: 'What is the capital of Germany?', answer: 'Berlin'},
  { question: 'What is the capital of the US?', answer: 'Washington'},
  { question: 'What is the capital of Argentina?', answer: 'Buenos Aires'},
  { question: 'What is the capital of South Korea?', answer: 'Seoul'},
  { question: 'What is the capital of the Great Britain?', answer: 'London'},
  { question: 'What is the capital of the Czech Republic?', answer: 'Prague'},
];




const App = () => {
  const [cards, setCards] = useState(0);
  const [isFlipped, setIsFlipped] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [inputClass, setinputClass] = useState('inputBlack');

  const ChangeFlashcard = () => {setCards((cards + 1)%10); setIsFlipped(false); setinputClass('inputBlack')};
  const ChangeFlashcard2 = () => {setCards((cards + 9)%10); setIsFlipped(false); setinputClass('inputBlack')};
  const ChangeFlipped = () => setIsFlipped((isFlipped+1)%2);
  const HandleInputChange = (event) => {setUserInput(event.target.value)};
  const CheckAnswer = () => {
    if(isFlipped == 0 & userInput == sampleCards[cards].answer)
      setinputClass('inputGreen')
    if(isFlipped == 0 & userInput != sampleCards[cards].answer)
      setinputClass('inputRed')
    setUserInput('')

  };


  return (
    <>
      <div className="Headline">
        <h1>I Know All Capitals Of The World!</h1>
        <h3>Test your knowledge of how good your are aware of corresponding capitals of the countries</h3>
        <p>Number of cards: 10</p>
      </div>

      <div className ="flashcard_frame" onClick = {ChangeFlipped}>
          <h2>{isFlipped ? sampleCards[cards].answer : sampleCards[cards].question}</h2>
      </div>
      
      <div>
          <h3>Write your answer here: </h3>
          <input  value = {userInput} id = {inputClass} placeholder = "Type your answer..." onChange = {HandleInputChange} type = "text"/>
          <button className = "submitbutton" onClick = {CheckAnswer}>Submit</button>
      </div>

      <div>
          <button className = "nextandprevious" onClick = {ChangeFlashcard2}>Previous question</button>
          <button className = "nextandprevious" onClick = {ChangeFlashcard}>Next question</button>
      </div>

    

    </>
  )
}

export default App