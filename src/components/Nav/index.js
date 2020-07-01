import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import './style.css'

export default class Nav extends Component {
  state = {
    showMenu: true
  }

  display = () => {
    if (!this.state.showMenu) {
      return (
       <React.Fragment />
      )
    } else {
      return (
        <Row id='nav-row'>
          <a href='/#about'>ABOUT</a>
          <a href='/#resume'>RESUME</a>
          <a href='/#portfolio'>PORTFOLIO</a>
          <a href='/#contact'>CONTACT</a>
        </Row>
      )
    }
  }
  render () {
    return(
      this.display()
    )
  }
}