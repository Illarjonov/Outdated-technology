import React from 'react';
import './answersList.scss';
import AnswerItem from './answerItem';

const AnswersList =(props) =>{
  return(
  <div>
    <ul className= {"AnswersList"}>
         {props.answers.map((answer, index) => {
                return(
                      <AnswerItem
                          key={index}
                          answer={answer}
                          onAnswerClickHendler= {props.onAnswerClickHendler}
                          answerState={props.answerState ? props.answerState[answer.id]:null} />
                          //проверка чтобы не нулл
                          )
                }       ) }
    </ul>
  </div>)
}

export default AnswersList;
