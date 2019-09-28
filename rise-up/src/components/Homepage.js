/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import { Jumbotron, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import "./Header.css";


import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles({
    depositContext: {
        flex: 2,
    },
});

class Homepage extends React.Component {
    constructor() {
        super();
    }



    // const classes = useStyles(); 
    render() {
        return (

            <React.Fragment>

                <Header />

                <Jumbotron className="test" fluid>
                    <Container>
                        <h1 align="Center">Rise Up
                        </h1>
                        <p>
                          

                        </p>
                    </Container>
                </Jumbotron>

                <DropdownButton className="center" id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>


            </React.Fragment>
        );
    }
}

export default Homepage;

