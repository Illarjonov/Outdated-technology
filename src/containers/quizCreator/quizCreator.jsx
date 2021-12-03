import React, {Component} from 'react';
import classes from './quizCreator.module.scss';
import Button from '../../components/UI/botton/button';


export default class QuizCreator extends Component{

  addQuestionHandler= () => {

  }

  createQuizHandler =() => {

  }

  submitHandler = (event) =>  {
    event.preventDefault()
  }

  render() {
    return(
      <div className ={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>


          <form onSubmit={this.submitHandler}>
            <input type = "text"/>
            <hr/>
            <input type = "text"/>
            <input type = "text"/>
            <input type = "text"/>
            <input type = "text"/>

            <select>  </select>
            <Button
              type = "primary"
              onClick = {this.addQuestionHandler}
              > добавить вопрос </Button>

              <Button
                type = "success"
                onClick = {this.createQuizHandler}
                > создать тест</Button>
          </form>

        </div>
      </div>
    )
  }
}
