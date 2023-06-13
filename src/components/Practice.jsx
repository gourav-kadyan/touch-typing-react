import React, { useState, useEffect } from 'react';
import './practice.css'

const Practice = () => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [typingGroundValue, setTypingGroundValue] = useState('');
  const [currentSentence, setCurrentSentence] = useState('');
  const [score, setScore] = useState('');
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  const sentences = [
    'The quick brown fox jumps over the lazy dog 1',
    'The quick brown fox jumps over the lazy dog 2',
    'The quick brown fox jumps over the lazy dog 3',
  ];

  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  };

  useEffect(() => {
    if (timer > 0 && startTime !== 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      endTypingTest();
    }
  }, [timer, startTime]);

  const calculateTypingSpeed = () => {
    const totalWordsTyped = typingGroundValue.split(/\s+/).filter(word => word !== '').length;
    console.log(timer)
    const timeInSeconds = (300 - timer) ;
    const typingSpeed = Math.round((totalWordsTyped / timeInSeconds) * 60);
  
    return typingSpeed >= 0 ? typingSpeed : 0;
  };
  
  

  const calculateAccuracy = () => {
    const typedWords = typingGroundValue.trim().split(' ');
    const sentenceWords = currentSentence.trim().split(' ');

    let correctCount = 0;

    typedWords.forEach((word, index) => {
      if (word === sentenceWords[index]) {
        correctCount++;
      }
    });

    const accuracy = Math.round((correctCount / sentenceWords.length) * 100);

    return accuracy;
  };

  const endTypingTest = () => {
    setEndTime(Date.now());
    setTypingGroundValue('');
  
    const typingSpeed = calculateTypingSpeed();
    const accuracy = calculateAccuracy();
  
    setScore(`Your typing speed is ${typingSpeed} words per minute. Accuracy: ${accuracy}%`);
    setCurrentSentence('');
    setStartTime(0);
    setTimer(300); // Reset timer to 5 minutes
  };
  
  

  const handleButtonClick = () => {
    if (startTime === 0) {
      setCurrentSentence(getRandomSentence());
      setStartTime(Date.now());
    } else {
      endTypingTest();
    }
  };

  return (
    <div className='main-body'>
      <h2>Typing Speed Test</h2>
      <p id="timer">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
      <p id="showSentence">{currentSentence}</p>

      <div className='typing-section
      '>
        <label id='textareamsg' htmlFor="textarea">Type the sentence:</label>
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          value={typingGroundValue}
          onChange={(e) => setTypingGroundValue(e.target.value)}
          disabled={startTime === 0 || timer === 0}
        ></textarea>
      </div>

      <button id='btn' onClick={handleButtonClick}>{startTime === 0 ? 'Start' : 'Stop'}</button>

      <p id="score">{score}</p>
    </div>
  );
};

export default Practice;
