import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Form, Modal } from 'react-bootstrap';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { DeliveryService } from '../_services/delivery.service';
import { DeliveryModel } from "../_models/delivery.model";
import { useLocation } from "react-router-dom";
import SweetAlert, { SweetAlertType } from 'react-bootstrap-sweetalert';



export default class DeliveryEdit extends React.Component {

    isView = false;


    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    constructor(props) {
        super(props);
        this.state = { ...DeliveryModel, isValid: false, showSaved: false, alertTitle: 'Saved' };
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
        if (this.state._id === undefined) {
            new DeliveryService().save(this.state, (result) => {
                this.setState({
                    showSaved: true,
                    alertTitle: 'Saved'
                })
            })
        } else {
            new DeliveryService().update(this.state, (result) => {
                this.setState({
                    showSaved: true,
                    alertTitle: 'Saved Changes'
                })
            })
        }
    }

    render() {
        return (
            <Container>
                <div className="mb-4 mt-4   ">
                    <h3 className="mb-4">Delivery Details Form    </h3>
                    <form onSubmit={this.handleSubmit}>

                        <Form.Group className="mb-3" controlId="id" hidden={this.state._id === undefined}>
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
                                this.setState({ lat: Number(event.target.value).toFixed(5).toString() });
                                this.isValid();
                            }} />

                        </Form.Group>




                        <Form.Group className="mb-3" controlId="longitude">
                            <Form.Label>longitude</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="longitude" value={this.state.long} onChange={(event) => {
                                this.setState({ long: Number(event.target.value).toFixed(5).toString() });
                            }} />

                        </Form.Group>



                        <Form.Select readOnly={this.isView} placeholder="status" value={this.state.status} onChange={(event) => {
                            this.setState({ status: event.target.value });
                            this.isValid();
                        }} >

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
                                this.isValid();
                            }} />
                        </InputGroup>

                        <Button hidden={this.isView} disabled={!this.state.isValid} variant="primary" type="submit" >SAVE NOW</Button>{' '}
                        <Button variant="warning" onClick={() => this.props.history.push('/delivery')} >CANCEL</Button>{' '}




                        <Button variant="primary" hidden={!this.isView} style={{ backgroundColor: 'red', width: '200px', height: '200px', borderRadius: '200px', float: 'right', fontWeight: 'bolder', fontSize: '30px' }} size="lg" active
                            onClick={() => {
                                this.openModal();
                            }}>
                            SET <br />DELIVERED
                        </Button>{' '}

                    </form>

                    <SweetAlert
                        show={this.state.showSaved}
                        title={this.state.alertTitle}
                        onConfirm={() => {
                            this.props.history.push('/delivery');
                        }}

                        type={"success"}
                    >

                    </SweetAlert>

                </div>
 

{/* {  Number(/[a-zA-Z]{2}[0-9]{4}$/.exec(this.state.deliveryID))} */}


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
                                    // GPS
                                    navigator.geolocation.getCurrentPosition(pos => {
                                        this.setState({ lat: Number(pos.coords.latitude).toFixed(5).toString(), long: Number(pos.coords.longitude).toFixed(5), status: this.state.status === 'PROBLEM' ? 'PROBLEM' : 'DELIVERED' });
                                        this.closeModal();
                                        new DeliveryService().update(this.state, (result) => {
                                            this.setState({
                                                showSaved: true,
                                                alertTitle: 'Saved'
                                            })
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
        // 1 x 1 x 1= 1
        // 1 x 1 x 1 x 0 = 0
        // 0 x 0 x 0 x 0 = 0
        if ((


            !(this.state.deliveryID.length <= 0) *
            !(this.state.receiverAddress.length <= 0) *
            !(this.state.assignedDriver.length <= 0) *
            !(this.state.orderID.length <= 0) *
            (/[a-zA-Z]{2}[0-9]{4}$/.test(this.state.deliveryID))

        ) === 0
        ) {
            // form is invalid
            this.setState({
                isValid: false
            });

        } else {
            // form is valid
            this.setState({
                isValid: true
            });
        }

    }




}