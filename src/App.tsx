import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchData, Difficulty, QuestionState } from './API';
const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
const [loading, setLoading] = useState(false);
const [questions, setQuestions] = useState<QuestionState[]>([]);
const [number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);

console.log(fetchData(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchData(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  };

  const nextQuestion = () => {
  };

  return (
    <div className="App">
      <h1>Quiz Night</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={ startQuiz }>Start Quiz</button>
      ) : null}
      <p className="score">Score</p>
      <p>Loading Questions...</p>


      { /* <QuestionCard
      questionNumber={ number + 1 }
      totalQuestions={ TOTAL_QUESTIONS }
      question={ questions[number].question }
      answers={ questions[number].answers }
      userAnswer={ userAnswers ? userAnswers[number] : undefined }
      callback={ checkAnswer }
      /> */}
      <button className="next" onClick={ nextQuestion }>Next Question</button>
    </div>
  );
}

export default App;
