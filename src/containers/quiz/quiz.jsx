import React, {Component} from 'react';
import './quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/activeQuiz';
import FinishedQuiz from '../../components/finishedQuiz/finishedQuiz.jsx';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/loader/loader'

class Quiz extends Component {
  state = {
        results:{},// { [id]:success, error }

        isFinished: false,
        activeQuestion: 0,
        answerState:null, //информация о текущем клике {id: 'success' 'error'}
        quiz: [],
        loading: true
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
      }    //проверить последний ли вопрос

  async componentDidMount (){
      try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz,
        loading: false
      })
    } catch (e) {
      console.log(e)
      }
      console.log('Quiz ID =', )
    }

  render(){
    return(
      <div className="Quiz">
            <div className={"QuizWrapper"}>
                <h1>Ответь на все вопросы</h1>
                  {
                  this.state.isFinished
                  ? <FinishedQuiz
                          results={this.state.results}
                          quiz={this.state.quiz}
                          onRetry={this.retryHandler}
                  />
                  :  <ActiveQuiz
                          answers={this.state.quiz[this.state.activeQuestion].answers}
                          question={this.state.quiz[this.state.activeQuestion].question}
                          onAnswerClick={this.onAnswerClickHandler}
                          quizLength={this.state.quiz.length}
                          answerNumber={this.state.activeQuestion + 1}
                          state={this.state.answerState}
                  />

                }
            </div>
      </div>
    )
  }
}

export default Quiz;
