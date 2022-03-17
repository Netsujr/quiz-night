import * as React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions }) => (

  <div>
    Question Card
    <p className="number">Question: { questionNumber } / { totalQuestions }</p>
    <p dangerouslySetInnerHTML={ { __html: question } }></p>
    <div>
      { answers.map(answer => (
        <div key={ answer }>
          <button disabled={ userAnswer } value={ answer } onClick={ callback }>
            <span dangerouslySetInnerHTML={ { __html: answer } }></span>
          </button>
        </div>
      )) }
    </div>
  </div>
);

export default QuestionCard;