/* eslint-disable no-script-url */

import React from 'react';

import Typography from '@material-ui/core/Typography';

import Modal from 'react-modal';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import ReacttableModal from './ReacttableModal';

import './Header.css'


class Phases extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showReactTable: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }



  handleCloseModal() {
    this.setState({ showModal: false });
  }
  // const classes = useStyles(); 
  render() {
    return (
      <React.Fragment>

        <Typography component="p" variant="h6">
          {this.props.name}
        </Typography>


        <div>
          <img src={require("../img/" + this.props.imagesrc)} width="150" height="150" />
          <button onClick={this.handleOpenModal}>View tasks</button>

          <Modal
            isOpen={this.state.showModal}

            onRequestClose={this.handleCloseModal}
            contentLabel="Example Modal"
            
          >
          <Button className="popup-close" onClick={this.handleCloseModal}>✖</Button>
        <Container><Row><Col>
        
        <strong className="text phaseLabel">Phase 2 Tasks</strong></Col>
      
        <div style={{textAlign: "center"}}>
        <Button type="submit"> Resources</Button>
        </div>
        </Row>
        </Container>
          
            <Container>
              
              <Row>
                <Col>
                  <Card style={{ width: '18rem', height: '10rem' }}>
                    <Card.Body>
                      <Card.Title>Task 1</Card.Title>
                      <Card.Text>
                        Identify all representatives and senators who can support your cause.
          </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card onClick={e => this.setState({showReactTable: true})} style={{ width: '18rem', height: '10rem' }}>
                    <Card.Body >
                      <Card.Title>Task 2</Card.Title>
                      <Card.Text>
                        Find sponsors for your bill, ideally one Democrat and one Republican.
        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem', height: '10rem' }}>
                    <Card.Body>
                      <Card.Title>Task 3</Card.Title>
                      <Card.Text>
                        Meet with like minded organizations and people in your community.
      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>


          </Modal>
        </div>

        {this.state.showReactTable ? (
         <ReacttableModal showModal={this.state.showReactTable} closeModal={e => this.setState({showReactTable: false})}/>
          
        ) : (
          null
        )}
      </React.Fragment>
    );
  }
}

export default Phases;

