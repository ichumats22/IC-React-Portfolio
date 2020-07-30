import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
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
        <Row id='nav-row' xs='4'>
          <Col>
            <a href='/#about'>ABOUT</a>
          </Col>
          <Col>
            <a href='/#resume'>RESUME</a>
          </Col>
          <Col>
            <a href='/#portfolio'>PORTFOLIO</a>
          </Col>
          <Col>
            <a href='/#contact'>CONTACT</a>
          </Col>
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