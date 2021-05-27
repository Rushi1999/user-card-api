import React from 'react';
import './index.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button} from 'reactstrap';
import axios from 'axios';
export default class TopNav extends React.Component {
  
  constructor(props) {
  
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
   getUser(){
    // let loader = `<div class="boxLoading"></div>`;
    // document.getElementById('root').innerHTML = loader;
    axios.get(`https://reqres.in/api/users?page=1`)
      .then(res => {
        const persons = res.data.data;
        this.props.onPeopleChange(persons);
        console.log("string",persons);
        // this.setState({ persons });
      }
      )
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable color="info">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Advertyzement</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button class="user" onClick={this.getUser} >Get user</Button>
              </NavItem>
              <NavItem>
                <NavLink href="#">user</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
