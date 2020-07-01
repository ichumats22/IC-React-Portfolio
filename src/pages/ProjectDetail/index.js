import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      title: ''
    }
  }

  render() {
    return(
      <Section>
        <Row>
          <Col>
            <h1>{this.state.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>screenshot</h1>
          </Col>
          <Col>
            <h2>project info</h2>
          </Col>
        </Row>
      </Section>
    )
  }
}