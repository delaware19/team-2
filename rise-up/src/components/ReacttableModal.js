/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import { Row,Col,Container,Card } from 'react-bootstrap';
import Modal from 'react-modal';
import "./Header.css";
import ReactTable from 'react-table'


import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles({
    depositContext: {
        flex: 2,
    },
});

class ReacttableModal extends React.Component {

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

            <React.Fragment >

                <Header />
                <Modal
                isOpen={this.state.showModal}   
                onRequestClose={this.handleCloseModal}>
              
                 </Modal>


            </React.Fragment>
        );
    }
}

export default ReacttableModal;

