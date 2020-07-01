import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.css'
import Section from '../../components/Section'
import PortfolioCard from '../../components/PortfolioCard'

export default class Main extends Component {
  render() {
    return(
      <React.Fragment>
        <Section id='home'>
          <Row>
            <Col>
              <h1>
                Ivanna Chumatschko
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>
                Full-Stack Web Developer
              </h2>
            </Col>
          </Row>
        </Section>

        <Section id='about'>
          <Row>
            <Col md={6} id='headshot-col'>
              <img src='https://via.placeholder.com/350' alt='headshot'></img>
            </Col>
            <Col md={6} id='about-text-col'>
              <Row>
                <h2>
                  ABOUT ME
                </h2>
              </Row>
              <Row>
                <p>
                  Full stack web developer with experience in front-end web development and responsive website design, as well as a robust understanding of server-side technologies. Well-organized and able to pick up new concepts quickly, I thrive in fast-paced environments with a variety of opportunities for creative problem solving. Capable of completing projects independently or as part of a team. Passionate about using technology to increase social justice, I hope to apply my skills to improve conditions for under-served groups.
                </p>
              </Row>
            </Col>
          </Row>
        </Section>

        <Section id='portfolio'>
          <Row>
            <Col>
              <PortfolioCard id='shelter-finder' title='Shelter Finder'/>
            </Col>
            <Col>
              <PortfolioCard id='semi' title='Semi-Random Recommendations'/>
            </Col>
            <Col>
              <PortfolioCard id='hangman' title='Arizona Hangman Game'/>
            </Col>
            <Col>
              <PortfolioCard id='psychic' title='The Psychic Game'/>
            </Col>
            <Col>
              <PortfolioCard id='crystal-collector' title='Crystal Collector'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <PortfolioCard id='trivia' title='Totally Magical Trivia'/>
            </Col>
            <Col>
              <PortfolioCard id='gif' title='GIF-Tastic'/>
            </Col>
            <Col>
              <PortfolioCard id='train' title='Train Time'/>
            </Col>
            <Col>
              <PortfolioCard id='friend' title='Friend Finder'/>
            </Col>
            <Col>
              <PortfolioCard id='bamazon' title='Bamazon'/>
            </Col>
          </Row>
        </Section>
      </React.Fragment>
    )
  }
}