import './App.css';
import { characters } from './characters';
import Grid from './components/Grid';
import { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';
import CorrectAnswer from './assets/correct-answer.mp3';
import WrongAnswer from './assets/wrong-answer.mp3';
const jsConfetti = new JSConfetti();
function App() {
  const [charArray, setCharArray] = useState(characters)
  const [firstChoice, setFirstChoice] = useState('');
  const [secondChoice, setSecondChoice] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (clickCount === 2) {
      setFirstChoice('');
      setSecondChoice('')
      setClickCount(0)
    }
    if (clickCount > 1) {
      if (firstChoice === secondChoice) {
        setScore(score + 5)
        setCharArray(prev => prev.map((card) => {
          if (card.name === firstChoice) {
            return { ...card, visible: true }
          }
          else {
            return card
          }
        }))
        document.getElementById('correct-answer').play()
        jsConfetti.addConfetti({
          confettiNumber: 500,
        })
      }
      else {
        document.getElementById('wrong-answer').play()
      }
    }
  }, [firstChoice, secondChoice, clickCount])

  return (
    <>
      <audio src={CorrectAnswer} id='correct-answer' />
      <audio src={WrongAnswer} id='wrong-answer' />
      <div className='final-score'>
        <h2>Score: {score}</h2>
      </div>
      <div className='grid-main'>
        {charArray.map((character) => {
          return (
            <Grid
              firstChoice={firstChoice}
              setFirstChoice={setFirstChoice}
              secondChoice={secondChoice}
              setSecondChoice={setSecondChoice}
              clickCount={clickCount}
              setClickCount={setClickCount}
              character={character}
            />
          )
        })}
      </div>
    </>
  );
}

export default App;
