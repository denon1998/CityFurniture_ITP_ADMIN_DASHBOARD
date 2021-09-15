
import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Modal } from 'react-bootstrap';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
 import { VehicleService } from '../_services/vehicle.service';
import moment from 'moment';


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

export default class Vehicle extends React.Component {

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

    render() {
        const { error, isLoaded, items } = this.state;
        // this.msg.sendMessage('PAGE_NAME', 'Vehicle');
        return (

            <div>
                <div className="mb-4 mt-4   ">


                    <div style={searchDiv}>
                        <h2 style={{ textAlign: 'left' }}>Vehicles</h2>
                        <Button style={{ width: '300px' }} variant="success" onClick={(e) => {
                            e.preventDefault();
                            this.props.history.push('/vehicle/new');
                        }}   >Create New Vehicle</Button>{' '}
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
                                <th>VehicleID</th>
                                <th>vehicleLicenseNO</th>
                                <th>mileage</th>
                                <th>nextServiceReminder</th>

                                <th></th>



                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item._id} >
                                    <td>{item._id} </td>
                                    <td>{item.vehicleID} </td>
                                    <td>{item.vehicleLicenseNO} </td>
                                    <td>{item.mileage} </td>
                                    <td>{moment(item.nextServiceReminder).format('yyyy-MM-DD')} </td>
                                    <td>


                                        <Button variant="warning" onClick={() => {
                                            this.props.history.push('/vehicle/edit?_id=' + item._id);
                                        }} >EDIT</Button>{' '}

                                        <Button variant="info" onClick={() => {
                                            this.props.history.push('/vehicle/view?_id=' + item._id);
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
                            <Pagination.Next disabled={Math.round((this.length / this.size) + 1) === this.active} onClick={() => {
                                this.active++;
                                this.fetchData(this.active, this.size);

                            }} />
                        </Pagination>



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
                                new VehicleService().delete(this.dataToDelete, () => {
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
            new VehicleService().search(query,
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
            new VehicleService().getAll(a, s,
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
        for (let number = 1; number <= (this.length / this.size) + 1; number++) {
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
