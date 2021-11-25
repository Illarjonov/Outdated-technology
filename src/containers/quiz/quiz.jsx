import React, {Component} from 'react';
import './quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/activeQuiz';
import FinishedQuiz from '../../components/finishedQuiz/finishedQuiz.jsx';
class Quiz extends Component {
  state = {
        results:{},// { [id]:success, error }

        isFinished: false,
        activeQuestion: 0,
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
              question:'В каком году основали СПБ?',
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

  onAnswerClickHendler=(answerId)=>{ //onClick


    if (this.state.answerState){
        const key = Object.keys(this.state.answerState)[0]
          if (this.state.answerState[key]==='success'){ return }
    } //эта конструкция чтобы дабл клик не зачитывался на второй вопрос

        const question  = this.state.quiz[this.state.activeQuestion]
        const results= this.state.results;

        if (question.rightAnswerId===answerId)  { //проверяем верность ответа

              if (!results[question.id]){
                results[question.id]= 'success'
              }

                this.setState({
                  answerState: {[answerId]: 'success'},
                  results:results
                })
              const timeout = window.setTimeout(()=>{

                        if(this.isQuizFinished()) { //проверяем дошло ли до последнего вопроса
                          this.setState({
                          isFinished: true
                        })

                    }   else {

                  this.setState({
                  activeQuestion: this.state.activeQuestion +1,
                  answerState:null,
                  results
                })//если не последний, следующий вопрос
              }

                window.clearTimeout(timeout)
          },1000)
      }  else {
          results[question.id] = 'error';
          this.setState({
          answerState: {[answerId]: 'error'},
          results: results
        })

        }
      }

      isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
        //проверить последний ли вопрос
  }

  render(){
    return(
      <div className="Quiz">
            <div className={"QuizWrapper"}>
                <h1>Ответь на все вопросы</h1>
                {
                  this.state.isFinished
                  ?<FinishedQuiz
                      results= {this.state.results}
                      quiz= {this.state.quiz}
                      />
                  : <ActiveQuiz
                      answers={this.state.quiz[this.state.activeQuestion].answers}
                      question={this.state.quiz[this.state.activeQuestion].question}
                      onAnswerClickHendler={this.onAnswerClickHendler}
                      quizLength={this.state.quiz.length}
                      answerNumber={this.state.activeQuestion + 1}
                      answerState={this.state.answerState}/>
                }
            </div>
      </div>
    )
  }
}

export default Quiz;
