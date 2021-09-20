
import React, { Component, useState } from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Modal } from 'react-bootstrap';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { useHistory, history } from "react-router-dom";
import { withRouter } from 'react-router';
import { Redirect, } from 'react-router-dom';
 import { DriverService } from '../_services/driver.service';

const searchDiv = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}
const centerDiv = {
    width: '100 %',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}


class Driver extends React.Component {

    active = 1;
    items = [];
    length = 0;
    size = 5;
     dataToDelete = {};

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    constructor(context) {
        super(context);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],

            isOpen: false,
            searchQuery: ''

        };






    }


    render(history) {
        const { error, isLoaded, items } = this.state;
        // this.msg.sendMessage('PAGE_NAME', 'Driver');
        return (

            <div>
                <div className="mb-4 mt-4   ">
                    <div style={searchDiv}>
                        <h2 style={{ textAlign: 'left' }}>Drivers</h2>
                        <Button style={{ width: '300px' }} variant="success" onClick={(e) => {
                            e.preventDefault();
                            this.props.history.push('/driver/new');
                        }}   >Create New Driver</Button>{' '}
                    </div>
                    <div style={searchDiv} className="mb-4 mt-4   " >
                        <InputGroup className="mr-2 " style={{ marginRight: '5px' }}  >

                            <InputGroup.Text id="basic-addon1">     <IoIcons.IoMdSearch /> </InputGroup.Text>
                            <FormControl
                                placeholder="Search.."
                                value={this.state.searchQuery} onChange={(event) => {
                                    this.setState({ searchQuery: event.target.value });
                                }}
                                aria-describedby="basic-addon1"
                            />{''}
                        </InputGroup>
                        <div style={searchDiv} >
                            <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => {
                                this.active = 1;
                                this.fetchData(this.active, this.size);
                            }}  ><IoIcons.IoMdSearch /></Button>{' '}
                            <Button variant="warning" style={{ marginRight: '5px' }} onClick={() => {
                                this.active = 1;
                                this.setState({ searchQuery: '' })
                                this.state.searchQuery = '';
                                this.fetchData(this.active, this.size);
                            }}  ><IoIcons.IoMdClose /></Button>{' '}
                        </div>
                    </div>

                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>EmpID</th>
                                <th>Emp Name</th>
                                <th>Vehicle ID</th>
                                <th>Current Ongoing Order ID</th>
                                <th>Contact Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item._id} >

                                    <td>{item._id} </td>
                                    <td>{item.empName} </td>
                                    <td>{item.empID} </td>
                                    <td>{item.vehicleID}</td>
                                    <td>{item.currentOrderID}</td>
                                    <td>{'('+String(item.contactNumber).substring(0,3)+')-'+String(item.contactNumber).substring(3,10)}</td>
                                    <td>


                                        <Button variant="warning" onClick={() => {
                                            this.props.history.push('/driver/edit?_id=' + item._id);
                                        }} >EDIT</Button>{' '}
                                        <Button variant="info" onClick={() => {
                                            this.props.history.push('/driver/view?_id=' + item._id);
                                        }} >VIEW</Button>{' '}
                                        <Button variant="danger" onClick={() => {
                                            this.dataToDelete = item;
                                            this.openModal();
                                        }} >DELETE</Button>{' '}
                                    </td>

                                </tr>
                            ))}



                        </tbody>

                    </Table>
                    <div style={centerDiv}>
                        <Pagination>
                            <Pagination.Prev disabled={1 >= this.active} onClick={() => {
                                this.active--;
                                this.fetchData(this.active, this.size);

                            }} />
                            <Pagination>{this.items}</Pagination>
                            <Pagination.Next disabled={Math.round((this.length / this.size) + (this.length%this.size)) === this.active} onClick={() => {
                                this.active++;
                                this.fetchData(this.active, this.size);

                            }} />
                        </Pagination>



                    </div>

                    <div className={centerDiv}>
                    <p style={{textAlign:'center'}}>   {(this.active*this.size)-(this.size-1) } - {this.active*this.size } of {this.length} records total</p>
                    </div>
                </div>





                <Modal show={this.state.isOpen} onHide={this.closeModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>DELETE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            CLOSE
                        </Button>
                        <Button variant="danger" onClick={
                            () => {
                                new DriverService().delete(this.dataToDelete, () => {
                                    this.closeModal();
                                    this.fetchData(this.active, this.size);
                                })

                            }
                        }>
                            YES, DELETE
                        </Button>
                    </Modal.Footer>
                </Modal>





            </div>



        )
    }



    componentDidMount() {
        this.fetchData(this.active, this.size);
    }

 




    fetchData(a, s) {
        if (this.state.searchQuery.length >= 1) {
            const query = { query: this.state.searchQuery, size: s, page: a };
            new DriverService().search(query,
                (l) => {
                    this.length = l;
                    this.paginationUpdate();
                },
                (s) => {
                    this.setState({
                        isLoaded: true,
                        items: s
                    });
                });
        } else {
            new DriverService().getAll(a, s,
                (l) => {
                    this.length = l;
                    this.paginationUpdate();
                },
                (s) => {
                    this.setState({
                        isLoaded: true,
                        items: s
                    });
                });
        }
    }







    paginationUpdate() {
        this.items = []
        for (let number = 1; number <= (this.length / this.size) + (this.length%this.size); number++) {
            this.items.push(
                <Pagination.Item key={number} active={number === this.active} onClick={() => {
                    this.active = number;
                    this.fetchData(this.active, this.size);

                }} >
                    {number}
                </Pagination.Item>,
            );
        }
    }

}


export default Driver;
