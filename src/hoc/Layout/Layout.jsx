import React, {Component} from 'react';
import './Layout.scss';
import MenuToggle from '../../components/navigation/menuToggle/menuToggle';
import Drawer from '../../components/navigation/drawer/drawer.jsx';

class Layout extends Component {

  state={
    menu:false
  }

  toggleMenuHandler= () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuClosedHandler= () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className= {"Layout"}>

        <Drawer
          isOpen = {this.state.menu}
          onClose = {this.menuClosedHandler}/>

        <MenuToggle
            onToggle = {this.toggleMenuHandler}
            isOpen = {this.state.menu}
        />

        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout
