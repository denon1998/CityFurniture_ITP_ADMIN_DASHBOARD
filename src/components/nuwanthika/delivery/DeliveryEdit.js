
import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Form, Modal } from 'react-bootstrap';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { DeliveryService } from '../_services/delivery.service';
import { DeliveryModel } from "../_models/delivery.model";
 import { useLocation } from "react-router-dom";



export default class DeliveryEdit extends React.Component {
   
    isView = false;


    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    constructor(props) {
        super(props);
        this.state = { ...DeliveryModel, isValid: false };
        this.setState({
            ...DeliveryModel,
            isOpen: false,
            isValid: false
        })
        this.handleSubmit = this.handleSubmit.bind(this);
        const url = new URL(window.location.href);
        const id = url.searchParams.get('_id');
        if (url.toString().includes('view') || url.toString().includes('status')) {
            this.isView = true;
        }
        if (id !== null) {
            new DeliveryService().getByID(id, d => {
                this.setState(d)
            });
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.state._id.length === 0) {
            new DeliveryService().save(this.state, (result) => {
                alert('SAVED')
                this.props.history.push('/delivery');
            })
        } else {
            new DeliveryService().update(this.state, (result) => {
                alert('UPDATED')
                this.props.history.push('/delivery');
            })
        }
    }

    render() {
        return (
            <Container>
                <div className="mb-4 mt-4   ">

                    <form onSubmit={this.handleSubmit}>

                        <Form.Group className="mb-3" controlId="id" hidden={this.state._id.length === 0}>
                            <Form.Label  > ID</Form.Label>
                            <Form.Control type="text" readOnly={true} placeholder="ID" value={this.state._id} onChange={(event) => {
                                this.setState({ _id: event.target.value });
                            }} />

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="deliveryID">
                            <Form.Label>deliveryID</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="deliveryID" value={this.state.deliveryID} onChange={(event) => {
                                this.setState({ deliveryID: event.target.value }, () => {
                                    this.isValid();
                                });
                            }}
                            />
                            <Form.Text className="text-muted">
                                *required. ex: CD9087
                            </Form.Text>
                        </Form.Group>





                        <Form.Group className="mb-3" controlId="orderID">
                            <Form.Label>orderID</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="orderID" value={this.state.orderID} onChange={(event) => {
                                this.setState({ orderID: event.target.value }, () => {
                                    this.isValid();
                                });
                            }}
                            />
                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>receiverAddress</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="receiverAddress" value={this.state.receiverAddress} onChange={(event) => {
                                this.setState({ receiverAddress: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />
                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="assignedDriver">
                            <Form.Label>assignedDriver</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="assignedDriver" value={this.state.assignedDriver} onChange={(event) => {
                                this.setState({ assignedDriver: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />
                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="latitude">
                            <Form.Label>latitude</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="latitude" value={this.state.lat} onChange={(event) => {
                                this.setState({ lat: event.target.value });
                            }} />

                        </Form.Group>




                        <Form.Group className="mb-3" controlId="longitude">
                            <Form.Label>longitude</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="longitude" value={this.state.long} onChange={(event) => {
                                this.setState({ long: event.target.value });
                            }} />

                        </Form.Group>



                        <Form.Select aria-label="Default select example" readOnly={this.isView} placeholder="status" value={this.state.status} onChange={(event) => {
                                this.setState({ status: event.target.value });
                            }} >
                            {/* <option>Status</option> */}
                            <option value="PENDING">PENDING</option>
                            <option value="PROBLEM">PROBLEM</option>
                            <option value="DELIVERED">DELIVERED</option>
                        </Form.Select>

                        {/* <Form.Group controlId="status">
                            <Form.Label>status</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="status" value={this.state.status} onChange={(event) => {
                                this.setState({ status: event.target.value });
                            }} />

                        </Form.Group> */}

                        <InputGroup className="mb-5">
                            <InputGroup.Text>TYPE REMARKS</InputGroup.Text>
                            <FormControl as="textarea" aria-label="TYPE REMARKS" value={this.state.remarks} onChange={(event) => {
                                this.setState({ remarks: event.target.value });
                            }} />
                        </InputGroup>

                        <Button hidden={this.isView} disabled={!this.state.isValid} variant="primary" type="submit" >SAVE NOW</Button>{' '}
                        <Button variant="warning" onClick={() => this.props.history.push('/delivery')} >CANCEL</Button>{' '}




                        <Button variant="primary" hidden={!this.isView}   style={{ backgroundColor: 'red', width: '200px', height: '200px', borderRadius: '200px', float: 'right', fontWeight: 'bolder', fontSize: '30px' }} size="lg" active
                            onClick={() => {
                                this.openModal();
                            }}>
                            SET <br />DELIVERED
                        </Button>{' '}

                    </form>



                </div>





                <Modal show={this.state.isOpen} onHide={this.closeModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>SET DELIVERED ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>If YES, current location data will be saved to verify?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            CLOSE
                        </Button>
                        <Button variant="danger" onClick={
                            () => {
                                if (navigator.geolocation) {
                                    navigator.geolocation.getCurrentPosition(pos => {
                                        this.setState({ lat: pos.coords.latitude, long: pos.coords.longitude, status: this.state.status==='PROBLEM'?'PROBLEM': 'DELIVERED' });
                                        this.closeModal();
                                        new DeliveryService().update(this.state, (result) => {
                                            alert('SAVED')
                                            this.props.history.push('/delivery');
                                        });
                                    });
                                } else {
                                    alert("Geolocation is not supported by this browser.");
                                }


                                // new DeliveryService().delete(this.dataToDelete, () => {
                                //     this.closeModal();
                                //     this.fetchData(this.active, this.size);
                                // })

                            }
                        }>
                            YES, PROCEED
                        </Button>
                    </Modal.Footer>
                </Modal>






            </Container>

        );
    }





    isValid() {
        // alert('isvalid')
        if ((

            // !(this.state.contactNumber.length < 10) *
            !(this.state.deliveryID.length <= 0) *
            !(this.state.receiverAddress.length <= 0) *
            !(this.state.assignedDriver.length <= 0) *
            !(this.state.orderID.length <= 0) *
            (/[a-zA-Z]{2}[0-9]{4}$/.exec(this.state.deliveryID))

        ) === 0
        ) {
            this.setState({
                isValid: false
            });

        } else {
            this.setState({
                isValid: true
            });
        }

    }




}