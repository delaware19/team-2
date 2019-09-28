/* eslint-disable no-script-url */

import React from 'react';

import Typography from '@material-ui/core/Typography';

import Modal from 'react-modal';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Phases extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
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
          <button onClick={this.handleOpenModal}>Open Modal</button>

          <Modal
            isOpen={this.state.showModal}

            onRequestClose={this.handleCloseModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
          <Button style={{textAlign: "left", margin: "30px"}} onClick={this.handleCloseModal}>close</Button>
            <Container>
              
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Task 1</Card.Title>
                      <Card.Text>
                        Identify all Reps and senators who can support your cause.
          </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Task 2</Card.Title>
                      <Card.Text>
                        Find a sponser ideally one Democrat and one Republican.
        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Task 3</Card.Title>
                      <Card.Text>
                        Meet with like minded people.
      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>


          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Phases;

