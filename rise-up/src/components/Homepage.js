/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import { Jumbotron, Container, Form,  Row, Col, Button } from 'react-bootstrap';
import "./Header.css";
import Background from '../img/sunset.png';
import {withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import "./Homepage.css";


import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles({
    depositContext: {
        flex: 2,
    },
});

var sectionStyle = {
    backgroundSize: "auto",
    backgroundImage: "url(" +  Background  + ")"
  };

class Homepage extends React.Component {
    constructor() {
        super();
    }
    submitForm (e) {
        e.preventDefault()
        console.log(e.target.elements);
        this.props.history.push('/Dashboard');
		
	}


    // const classes = useStyles(); 
    render() {
        return (

            <React.Fragment className="nottest">
                
                <Header />

                
                    
                    
                    <section style={ sectionStyle }>
                        <br />
                        <br />
                        <br />
                    <h1 align="Center">Rise Up
                        </h1>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br /> <br /> <br />
                    <Form onSubmit={this.submitForm.bind(this)}>
                        <Form.Row >
                            <Col align ="center" xs={6}>
                              <h4 className=".bold-text">I am passionate about reforming</h4>
                            </Col>
                            <Col>
                                <Form.Group controlId="violence" align = "center">
                                    <Form.Control as="select">
                                        <option>select an issue</option>
                                        <option>Sexual Violence</option>
                                        <option>Gun Violence</option>
                                        <option>Domestic Violence</option>
                                        
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Row >
                            <Col align = "center">
                            <h4 className=".bold-text">and I am from</h4></Col>
                            <Col >
                            <Form.Group controlId="states">
                                <Form.Control  as="select">
                                    <option>select a state</option>
                                    <option>Florida</option>
                                    <option>Delaware</option>
                                    <option>Texas</option>
                                    <option>Alabama</option>
                                    <option>California</option>
                                </Form.Control>
                            </Form.Group>
                            </Col>
                             
                        </Row>
                        <div style = {{textAlign: "center"}}>
                        <Button type="submit" align = "center"> Let's get started!</Button>
                        </div>
                    </Form>
                   <br /> <br /> <br /> <br /><br /><br /> <br />
                   <br /> <br />
            </section>
                        
                
                
                
               


            </React.Fragment>
        );
    }
}

export default withRouter(Homepage);

