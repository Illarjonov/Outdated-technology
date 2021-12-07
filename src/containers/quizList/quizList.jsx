import React, {Component} from 'react';
import classes from './quizList.module.scss';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export default class QuizList extends Component{

    renderQuizes(){
      return [1,2,3].map(( quiz ,index) => {
        return (
          <li
            key= {index}>
          <NavLink to = {'/quiz/'+ quiz}>
          Тест {quiz}
          </NavLink>
          </li>
        )
      })
    }

    componentDidMount () {
      axios.get(`https://react-quiz-main-default-rtdb.europe-west1.firebasedatabase.app/quiz.json`).then(response =>{
        console.log(response)
      })
    }

  render(){
    return(
      <div className ={classes.QuizList}>
        <div>
          <h1>Cписок тестов </h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>

      </div>
    )
  }
}
