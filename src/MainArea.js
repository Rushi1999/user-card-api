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

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="2">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
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
