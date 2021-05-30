import React, { Component } from 'react';
import './index.css';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
 
class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, first_name,last_name, email, avatar } = this.props.person;
    return (
   <div>
        <Card>
        <CardImg top width="100%"  src={avatar} alt="Card image cap" ></CardImg>
          <CardBlock>
            <CardTitle>{first_name}</CardTitle>
            <CardTitle>{last_name}</CardTitle>
            <CardSubtitle>{email}</CardSubtitle>
          </CardBlock>
        </Card>
    </div>
    )
  }
}

export default PeopleCard;
