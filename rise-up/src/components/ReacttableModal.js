/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import { Row,Col,Container,Card } from 'react-bootstrap';
import Modal from 'react-modal';
import "./Header.css";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
//import data from '../data.json';


import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles({
    depositContext: {
        flex: 2,
    },
});

class ReacttableModal extends React.Component {
    
    
    constructor(props) {
        super(props);
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
        //console.log(data);

        const columns = [{
            Header: 'Branch',
            accessor: 'Branch' // String-based value accessors!
          },
          {
            Header: 'District',
            accessor: 'District' // String-based value accessors!
          },
          {
            Header: 'First Name',
            accessor: 'firstName' // String-based value accessors!
          },
          {
            Header: 'Last Name',
            accessor: 'lastName' // String-based value accessors!
          },
          {
            Header: 'Party',
            accessor: 'party' // String-based value accessors!
          }
          ,{
            Header: 'Leadership',
            accessor: 'leadership' // String-based value accessors!
          },{
            Header: 'Committe',
            accessor: 'committe' // String-based value accessors!
          },
          {
            Header: 'Phone',
            accessor: 'phone' // String-based value accessors!
          },
          {
            Header: 'Email',
            accessor: 'email' // String-based value accessors!
          },
          {
            Header: 'First Elected',
            accessor: 'firstElected' // String-based value accessors!
          },
          {
            Header: 'Counties Represented',
            accessor: 'countiesRepresented' // String-based value accessors!
          }
        ];

        const data = [
            {  
                "Branch": "House",
                   "District":"11",
                   "firstName":"Jeffery",
                   "lastName":"Spiegelman",
                   "party":"Rep",
                   "leadership":"",
                   "committee":"",
                   "phone":"",
                   "email":"js@state.de.us",
                   "firstElected":"2012",
                   "countiesRepresented":"Clayton"
               },
                 {
                   "Branch":"House",
                   "District":"12",
                   "firstName":"Krista",
                   "lastName":"Griffith",
                   "party":"Dem",
                   "leadership":"",
                   "committee":"Telecommunication Internet & Tech",
                   "phone":"302-744-4351",
                   "email":"kg@state.de.us",
                   "firstElected":"1994",
                   "countiesRepresented":"Fairthorne"
               },
                {
                   "Branch":"House",
                   "District":"13",
                   "firstName":"John",
                   "lastName":"Mitchell",
                   "party":"Dem",
                   "leadership":"Majority Whip",
                   "committee":"",
                   "phone":"123-456-7890",
                   "email":"jm@state.de.us",
                   "firstElected":"2006",
                   "countiesRepresented":"Elsmere"
               },
                   {
                   "Branch":"House",
                   "District":"14",
                   "firstName":"Peter",
                   "lastName":"Schwartzkopf",
                   "party":"Dem",
                   "leadership":"Speaker of the House",
                   "committee":"",
                   "phone":"738-396-3913",
                   "email":"pk@state.de.us",
                   "firstElected":"2002",
                   "countiesRepresented": "Rehoboth"
               }
            ];

            console.log(data);
        return (

            <React.Fragment >

                <Header />
                <Modal
                isOpen={this.props.showModal}   
                onRequestClose={this.props.closeModal}>
                <ReactTable columns={columns} data={data}/>
                 </Modal>


            </React.Fragment>
        );
    }
}

export default ReacttableModal;

