import React from 'react';
import './answerItem.scss';

const AnswerItem = (props) => {
  return(
    <li className={"AnswersItem"}
        onClick={()=>props.onAnswerClickHendler(props.answer.id)}>

    {props.answer.text}
    </li>

  );
}
export default AnswerItem;
