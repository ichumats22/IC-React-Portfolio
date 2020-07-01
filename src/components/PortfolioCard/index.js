import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './style.css'

export default class PortfolioCard extends Component {
  state = {
    id: '',
    src: '',
    title: ''
  }

  componentDidMount() {
    this.setState({ 
      id: this.props.id,
      title: this.props.title
    })
  }

  render() {
    return(
      <NavLink to={`/${this.state.id}`}>
        <Card className='text-white'>
          <Card.Title className='portfolio-card-title'>{this.state.title}</Card.Title>
        </Card>
      </NavLink> 
    )
  }
} 