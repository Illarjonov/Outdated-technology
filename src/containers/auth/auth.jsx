import React, {Component} from 'react';
import classes from './auth.module.scss';
import Button from '../../components/UI/botton/button'
import Input from '../../components/UI/input/input'
export default class Auth extends Component{

  loginHendler = () => {

  }

  registerHendler = () => {

  }
  submitHendler = (event) => {
    event.preventDefault()
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

            <Input label = "email"/>
            <Input
              label = "password"
              errorMessege = {'test'}/>

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
