import React from 'react';
import classes from './finishedQuiz.module.scss';
import Button from '../UI/botton/button.jsx';

const FinishedQuiz = (props) =>{
const successCount = Object.keys(props.results).reduce(
  (total,key)=>{
    if (props.results[key]==='success'){
      total++  }
    return total
  }, 0
);//превращает массив в масс ключей

  return(
    <div className={classes.FinishedQuiz}>
      <ul>
      {props.quiz.map((quizItem,index)=>{
        const cls = [
          'fa ',
          props.results[quizItem.id] ==='error' ? 'fa-times ' : 'fa-check ' ,
          classes[ props.results[quizItem.id] ]
        ]
        return(
          <li
            keys = {index}>
              <strong> { index + 1 } </strong>&nbsp;
              {quizItem.question}
            <i  className = { cls.join('') } />
          </li>
        )

      })  }
      </ul>

            <p className = {''}> Правильно {successCount} из {props.quiz.length}</p>
      <div>
          <Button onClick = {props.onRetry} type= "primary"> Повторить</Button>
          <Button onClick = {props.onRetry} type= "success"> Вернуться в список тестов</Button>
      </div>

    </div>
  );
      }
      export default FinishedQuiz;
