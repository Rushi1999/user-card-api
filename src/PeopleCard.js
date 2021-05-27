import React, { Component } from 'react';
import './index.css';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
 
class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, firstname,lasttname, email, avtar } = this.props.person;
    return (
   <div>
        <Card>
          {/* <CardImg top width="100%" src="https://source.unsplash.com/user/_vickyreyes/600x400" alt="Card image cap" /> */}
          <CardImg top width="100%"  alt="Card image cap" >{avtar}</CardImg>
          <CardBlock>
            {/* <CardTitle>{name}</CardTitle> */}
            <CardTitle>{firstname}</CardTitle>
            <CardTitle>{lasttname}</CardTitle>
            <CardSubtitle>{email}</CardSubtitle>
            {/* <CardText>{description}</CardText> */}
            <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button>
          </CardBlock>
        </Card>
    </div>
  // <div >
  //     <Grid container spacing={3}></Grid>
  //     <Grid item xs={3}>
  //         <Paper >xs=3</Paper>
  //       </Grid>
    
  //   </div>
     
    )
  }
}

export default PeopleCard;
