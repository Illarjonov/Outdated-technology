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

    async componentDidMount () {
  try {  const response = await axios.get(`https://react-quiz-main-default-rtdb.europe-west1.firebasedatabase.app/quizes.json`)
      console.log(response.data)
    } catch (e){
      console.log(e)
    }
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
