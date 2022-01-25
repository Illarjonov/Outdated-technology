import React, {Component} from 'react';
import classes from './drawer.module.scss';
import Backdrop from '../../UI/backdrop/backdrop.jsx';
import {NavLink} from 'react-router-dom';

  const links = [
    {to:'/auth', label: 'Авторизация', exact:false},
    {to:'/quiz-creator', label: 'Создать тест', exact:false},
    {to:'/', label: 'Список тестов', exact:false}
  ]



class Drawer extends Component {
  clickHandler = () => {
    this.props.onCLose()
  }

  renderLinks (props){
    return links.map((link,index)=>{
      return(
        <li key = {index}>
          <NavLink
            to = {link.to}
            exact = {link.exact}
            activeClassName = {classes.active}
            onClick = {this.clickHandler} >

                  {link.label}
          </NavLink>
        </li>
      )
    })
  }

   render(){
     const cls =[classes.Drawer]
     if (!this.props.isOpen) {
       cls.push(classes.close)
     }
     return(
    <React.Fragment>
       <nav className = {cls.join(' ')}>
         <ul>
            {this.renderLinks()}
         </ul>
       </nav>
       {this.props.isOpen ? <Backdrop onClick = {this.props.onClose}/> : null}
    </React.Fragment>
     )
   }
}
export default Drawer;
