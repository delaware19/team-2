/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import ReactModal from 'react-modal'; 
import Button from '@material-ui/core/Button'; 
const useStyles = makeStyles({
  depositContext: {
    flex: 2,
  },
});

class Phases extends React.Component{ 
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
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
      <img src= {require("../img/" + this.props.imagesrc)} width = "150" height = "150"/>
        <br />
        <Button onClick={this.handleOpenModal} color="primary">
          View tasks
        </Button>
        <ReactModal className="popup"
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example">
           <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    </React.Fragment>
    );
  }
} 

export default Phases; 

