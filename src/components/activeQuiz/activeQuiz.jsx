import React from 'react';
import './activeQuiz.scss';
import AnswersList from '../answersList/answersList';

const ActiveQuiz = props => {
    return(
  <div className= {"ActiveQuiz"}>
    <p className= {"Question"}>
        <span>
              <strong>{props.answerNumber}.&nbsp;</strong>
            {props.question}
        </span>
        <small>{props.answerNumber} из {props.quizLength}</small>
    </p>
    <AnswersList
        answers = {props.answers}
        onAnswerClickHendler= {props.onAnswerClickHendler}
        answerState={props.answerState}/>
  </div> )
};
export default ActiveQuiz;
