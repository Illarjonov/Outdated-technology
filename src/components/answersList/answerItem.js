import React from 'react';
import classes from './answerItem.module.scss';

const AnswerItem = (props) => {
    const cls= [classes.AnswersItem]

    if (props.answerState){
        cls.push(classes[props.answerState])
    }

  return(

    <li className={cls.join(' ')}
        onClick={()=>props.onAnswerClickHendler(props.answer.id)}>
    {props.answer.text}

    </li>

  );
}
export default AnswerItem;
