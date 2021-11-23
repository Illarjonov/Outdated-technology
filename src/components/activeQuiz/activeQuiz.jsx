import React from 'react';
import './activeQuiz.scss';
import AnswersList from '../answersList/answersList';

const ActiveQuiz = props => {
    return(
  <div className= {"ActiveQuiz"}>
    <p className= {"Question"}>
        <span>
              <strong>2.</strong>&nbsp;
            {props.question}
        </span>
        <small> 4 из 12 </small>
    </p>
    <AnswersList
        answers = {props.answers}
        onAnswerClickHendler= {props.onAnswerClickHendler}/>
  </div> )
};
export default ActiveQuiz;
