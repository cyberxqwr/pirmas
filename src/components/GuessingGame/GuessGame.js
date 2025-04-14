import React, { useState, useEffect } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

function GuessGame() {
    const [targetNumber, setTargetNumber] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
  
    useEffect(() => {
      const newTarget = Math.floor(Math.random() * 100) + 1;
      setTargetNumber(newTarget);
      console.log(`Skaičius yra: ${newTarget}`);
    }, []);
  
    const handleGuess = () => {
      if (isGameOver) return;
  
      const guessNum = parseInt(currentGuess, 10);
      setAttempts(attempts + 1);
  
      if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
          setMessage('Prašome įvesti skaičių tarp 1 ir 100.');
      } else if (guessNum === targetNumber) {
          setMessage(`Teisingai! Skaičius buvo ${targetNumber}. Atspėjote per ${attempts + 1} bandymus.`);
          setIsGameOver(true);
      } else if (guessNum < targetNumber) {
          setMessage('Bandyk didesnį!');
      } else {
          setMessage('Bandyk mažesnį!');
      }
      setCurrentGuess('');
    };
  
    const resetGame = () => {
        const newTarget = Math.floor(Math.random() * 100) + 1;
        setTargetNumber(newTarget);
        console.log(`Naujas skaičius yra: ${newTarget}`);
        setCurrentGuess('');
        setMessage('');
        setAttempts(0);
        setIsGameOver(false);
    }
  
    return (
      <div>
        <h1>Skaičių spėjimo žaidimas</h1>
        {!isGameOver && <GuessForm handleGuess={handleGuess} guess={currentGuess} setGuess={setCurrentGuess}/>}
        <Message message={message} />
        {isGameOver && <button onClick={resetGame}>Žaisti dar kartą</button>}
        <p>Bandymų skaičius: {attempts}</p>
      </div>
    );
  }
  
  export default GuessGame;