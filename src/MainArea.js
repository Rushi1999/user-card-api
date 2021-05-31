import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';
import './index.css';
class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [  ]
    }
  }
  render () {
    let peopleCards = this.props.people.map(person => {
      return (
        <Col sm="card">
          <PeopleCard key={person.id}  person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}
export default MainArea;
