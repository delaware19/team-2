/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import { Jumbotron, Container, Form,  Row, Col, Button } from 'react-bootstrap';
import "./Header.css";
import {withRouter } from 'react-router-dom'


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
    submitForm (e) {
        e.preventDefault()
        console.log(e.target.elements);
        this.props.history.push('/Dashboard');
		
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
                <Container>
                    <Form onSubmit={this.submitForm.bind(this)}>
                        <Row>
                            <Col align ="center" xs={6}>
                              <strong className=".bold-text">I am passionate about changing</strong>
                            </Col>
                            <Col>
                                <Form.Group controlId="violence">
                                    <Form.Label>Choose</Form.Label>
                                    <Form.Control as="select">
                                        <option>Sexual Violence</option>
                                        <option>Gun Violence</option>
                                        <option>Domestic Violence</option>
                                        
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col align = "center">
                            <strong className=".bold-text">and I am From</strong></Col>
                            <Col >
                            <Form.Group controlId="states">
                                <Form.Label>States</Form.Label>
                                <Form.Control  as="select">
                                    <option>Florida</option>
                                    <option>Deleware</option>
                                    <option>Texas</option>
                                    <option>Alabama</option>
                                    <option>California</option>
                                </Form.Control>
                            </Form.Group>
                            </Col>
                        </Row>
                        <div style={{textAlign: "center"}}>
                        <Button type="submit"> Lets Get Started</Button>
                        </div>
                    </Form>
                </Container>


            </React.Fragment>
        );
    }
}

export default withRouter(Homepage);

