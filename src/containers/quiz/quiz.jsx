import React, {Component} from 'react';
import './quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/activeQuiz'

class Quiz extends Component {
  state = {
        activeQuestion:0,
        answerState:null, //информация о текущем клике {id: 'success' 'error'}
        quiz: [
          {
              question:'Вопрос?',
              rightAnswerId: 2 ,
              id: 1,
              answers: [
                {text:'Ответ 1', id: 1},
                {text:'Ответ 2', id: 2},
                {text:'Ответ 3 ', id: 3},
                {text:'Ответ 4', id: 4}
              ]
        },
        {
              question:'Год основания СПБ?',
              rightAnswerId: 3 ,
              id: 2,
              answers: [
                {text:'Ответ да', id: 1},
                {text:'Ответ нет', id: 2},
                {text:'Основали! ', id: 3},
                {text:'В году?', id: 4}
              ]

      },

          ]
  }

  onAnswerClickHendler=(answerId)=>{
        console.log(answerId) //для упрощения выбора вопроса
        const question  = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId===answerId)  { //проверяем верность ответа
              this.setState({
                answerState: {[answerId]: 'success'}
              })

              const timeout = window.setTimeout(()=>{

                        if( this.isQuizFinished() ) { //проверяем дошло ли до последнего вопроса
                        console.log('finished')
                        }  else {
                  this.setState({
                  activeQuestion: this.state.activeQuestion +1,
                  answerState:null}) }//если нет, следующий вопрос

        window.clearTimeout(timeout)},1000)
      }  else {
          this.setState({
          answerState: {[answerId]: 'error'}
        })

        }
      }

  isQuizFinished(){
        return this.activeQuestion + 1 === this.state.quiz.length
  }

  render(){
    return(
      <div className="Quiz">
            <div className={"QuizWrapper"}>
                <h1>Ответтье на все вопросы</h1>
                  <ActiveQuiz
                      answers={this.state.quiz[this.state.activeQuestion].answers}
                      question={this.state.quiz[this.state.activeQuestion].question}
                      onAnswerClickHendler={this.onAnswerClickHendler}
                      quizLength={this.state.quiz.length}
                      answerNumber={this.state.activeQuestion + 1}
                      answerState={this.state.answerState}/>
            </div>
      </div>
    )
  }
}

export default Quiz;
