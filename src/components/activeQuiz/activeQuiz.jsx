import React from 'react';
import './activeQuiz.scss';
import AnswersList from '../answersList/answersList';


const ActiveQuiz = props => {


    return(
  <div className= {"ActiveQuiz"}>
    <p className= {"Question"}>
    <span>
      <strong>{props.answerNumber}.</strong>&nbsp;
      {props.question}
    </span>

      <small>{props.answerNumber} из { props.quizLength }</small>
    </p>

    <AnswersList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
)
}
export default ActiveQuiz;
