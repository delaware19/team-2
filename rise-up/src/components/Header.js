/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import "./Header.css";

import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles({
  depositContext: {
    flex: 2,
  },
});

class Header extends React.Component{ 
  constructor () {
    super();
  }
  
  
    // const classes = useStyles(); 
    render() { 
      return (

    <React.Fragment>
    <Navbar bg="light" expand="lg" className="test">
  <Navbar.Brand href="#home"><img src="https://uploads-ssl.webflow.com/5c98fd7e7e3bc9bee0816b45/5c99709e0113b8a168fec8fa_RiseLogo_02.svg"/> Rise Up </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button >Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </React.Fragment>
    );
  }
} 

export default Header; 

