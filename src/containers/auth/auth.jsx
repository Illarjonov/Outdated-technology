import React, {Component} from 'react';
import classes from './auth.module.scss';
import Button from '../../components/UI/botton/button'
import Input from '../../components/UI/input/input'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Auth extends Component{

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'email',
        errorMessege: 'Введите корректный Email',
        valid: false,
        touched: false,
        validation:{
          required: true,
          email: true,
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'password',
        errorMessege: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation:{
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHendler = () => {

  }

  registerHendler = () => {

  }

  submitHendler = (event) => {
    event.preventDefault()
  }

  validateControl (value, validation) {
    if (!validation){
      return true
    }
    let isValid = true
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }
    if (validation.email) {
        isValid = validateEmail(value) && isValid

    }
    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
    }
    return isValid
  }

  onChangeHandler = (event, controlName) => {
     const formControls = { ...this.state.formControls }
     const control = { ...formControls[controlName] }

     control.value = event.target.value
     control.touched = true
     control.valid = this.validateControl(control.value, control.validation)

     formControls[controlName] = control

     let isFormValid = true

     Object.keys(formControls).forEach(name => {
       isFormValid = formControls[name].valid && isFormValid
     })

     this.setState({
       formControls, isFormValid
     })
   }



  renderInputs () {
  return Object.keys(this.state.formControls).map((controlName,index)=>{
   const control = this.state.formControls[controlName]
    return(
      <Input
        key = {controlName+ index}
        type = {control.type}
        value = {control.value}
        valid = {control.touched}
        label = {control.label}
        errorMessege = {control.errorMessege}
        shouldValidate = {!!control.validation}
        onChange = {event => this.onChangeHandler(event, controlName)}
      />
    )
  })
  }

  render(){
    return(
      <div className ={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form
            className = {classes.AuthForm}
            onSubmit = {this.submitHendler}
          >

          {this.renderInputs()}


                <Button
                  type = "success"
                  onClick = {this.loginHendler}
                > Войти </Button>
                <Button
                  type = "primary"
                  onClick = {this.registerHendler}
                  > Регистрация </Button>

          </form>
        </div>
      </div>
    )
  }
}
