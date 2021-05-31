import React from 'react';
import MainArea from './MainArea';
import './index.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button} from 'reactstrap';
import axios from 'axios';
import spinner from './loader'
export default class TopNav extends React.Component {
  
  constructor(props) {
  
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user:[]
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

   getUser=()=>{

    let loader = ' <img src={spinner} />'
    document.getElementById('loader').innerHTML = loader;

    axios.get(`https://reqres.in/api/users?page=1`)
      .then(res => {

        //  loader = ``;
        // document.getElementById('loader').innerHTML = loader;

        const persons = res.data.data;
         console.log(res);
          this.setState({ user:res.data.data });
          return res.data.data;
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
              <NavItem class="user">
                <Button  onClick={this.getUser} >Get users</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <MainArea people={this.state.user} />
      </div>
    );
  }
}
