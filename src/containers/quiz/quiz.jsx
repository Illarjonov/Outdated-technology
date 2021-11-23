import React, {Component} from 'react';
import './quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/activeQuiz'

class Quiz extends Component {
  state = {
        quiz: [
          {
          answers: [
            {text:'Ответ 1', id: 1},
            {text:'Ответ 2', id: 2},
            {text:'Ответ 3 ', id: 3},
            {text:'Ответ 4', id: 4}
          ],
          question:'Вопрос?',
          rightAnswerId: 2 ,
            }
          ]
  }
  onAnswerClickHendler=(answerId)=>{
    console.log('Answer id', answerId)
  }

  render(){
    return(
      <div className="Quiz">
            <div className={"QuizWrapper"}>
                <h1>Ответтье на все вопросы</h1>
                  <ActiveQuiz
                      answers={this.state.quiz[0].answers}
                      question={this.state.quiz[0].question}
                      onAnswerClickHendler={this.onAnswerClickHendler}/>
            </div>
      </div>
    )
  }
}

export default Quiz;
