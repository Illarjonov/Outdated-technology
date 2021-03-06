import React, {Component} from 'react';
import classes from './quizCreator.module.scss';
import Button from '../../components/UI/botton/button';
import Select from '../../components/UI/select/select'
import {createControl, validate, validateForm} from '../../form/formFramework'
import Input from '../../components/UI/input/input'
import Auxillary from '../../hoc/Auxillary/Auxillary'
import axios from '../../axios/axios-quiz';

function createOptionControl (number) {
  return createControl({
     label: `вариант ${number}`,
     errorMessege: 'значение не может быть пустым'
   }, {required: true})}

function createFormControl(){
  return {
    question: createControl({
      label: 'введите вопрос',
      errorMessege: 'вопрос не может быть пустым',
    },{required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

export default class QuizCreator extends Component{

  state = {
      quiz: [],
      formControls: createFormControl(),
      rightAnswerId: 1,
      isFormValid: false,
  }

  submitHandler = event => {
    event.preventDefault()
  }

  addQuestionHandler= (event) => {
    event.preventDefault()

    const quiz = this.state.quiz.concat()
    const index = quiz.length +1

    const {question, option1, option2, option3, option4} = this.state.formControls

    const questionItem ={
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id},
      ]
    }
    quiz.push(questionItem)
    this.setState({
      quiz,
      formControls: createFormControl(),
      rightAnswerId: 1,
      isFormValid: false,
    })
  }

  createQuizHandler = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(`/quizes.json`, this.state.quiz)
      console.log(response.data)
      this.setState({
        quiz: [],
        formControls: createFormControl(),
        rightAnswerId: 1,
        isFormValid: false,
      }) //зануление после отправки
    } catch (e) {
      console.log(e)
    }
    // axios.post(`https://react-quiz-main-default-rtdb.europe-west1.firebasedatabase.app/quizes.json`, this.state.quiz)
    //   .then (response => {
    //       console.log(response)
    //   })
    //   .catch(error => console.log(error) )
  }
  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control

    this.setState ({
      formControls,
      isFormValid: validateForm(formControls)
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName,index)=>{
     const control = this.state.formControls[controlName]
      return(
        <Auxillary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
          { index === 0 ? <hr /> : null }
        </Auxillary>
      )
    })
  }

  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: +event.target.value
    })
  }

  render() {
    const select =
    <Select
      label = "выберите правильный ответ"
      value = {this.state.rightAnswerId}
      onChange = {this.selectChangeHandler}
      options = {[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4}
      ]}
      />

    return(
      <div className ={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>


          <form onSubmit={this.submitHandler}>
          {this.renderControls() }
          {select}

            <Button
              type = "primary"
              onClick = {this.addQuestionHandler}
              disabled = {!this.state.isFormValid}
              > добавить вопрос </Button>

              <Button
                type = "success"
                onClick = {this.createQuizHandler}
                disabled = {this.state.quiz.length === 0}
                > создать тест</Button>
          </form>

        </div>
      </div>
    )
  }
}
