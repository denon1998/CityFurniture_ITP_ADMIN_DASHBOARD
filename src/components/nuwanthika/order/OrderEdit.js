
import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Form } from 'react-bootstrap';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { OrderService } from '../_services/order.service';
 import { OrderModel } from '../_models/order.model';
import moment from 'moment';
import SweetAlert, { SweetAlertType } from 'react-bootstrap-sweetalert';



export default class OrderEdit extends React.Component {
    isView = false;
     constructor(props) {
        super(props);
        this.state = { ...OrderModel, isValid: false, showSaved: false, alertTitle: 'Saved' };
        this.handleSubmit = this.handleSubmit.bind(this);
        const url = new URL(window.location.href);
        const id = url.searchParams.get('_id');
        if (url.toString().includes('view')) {
            this.isView = true;
        }
        if (id !== null) {
            new OrderService().getByID(id, d => {
                this.setState(d)
            });
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.state._id === undefined) {
            new OrderService().save(this.state, (result) => {
                this.setState({
                    showSaved: true,
                    alertTitle: 'Saved'
                })
            })
        } else {
            new OrderService().update(this.state, (result) => {
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
                <h3 className="mb-4">Order Details Form    </h3>

                    <form onSubmit={this.handleSubmit}>


                        <Form.Group className="mb-3" controlId="id" hidden={this.state._id === undefined}>
                            <Form.Label  > ID</Form.Label>
                            <Form.Control type="text" readOnly={true} placeholder="ID" value={this.state._id} onChange={(event) => {
                                this.setState({ _id: event.target.value });
                            }} />

                        </Form.Group>




                        <Form.Group className="mb-3" controlId="orderID">
                            <Form.Label>orderID</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="orderID" value={this.state.orderID} onChange={(event) => {
                                this.setState({ orderID: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="name" value={this.state.name} onChange={(event) => {
                                this.setState({ name: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="postalNo">
                            <Form.Label>postalNo</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="postalNo" value={this.state.postalNo} onChange={(event) => {
                                this.setState({ postalNo: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="street">
                            <Form.Label>street</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="street" value={this.state.street} onChange={(event) => {
                                this.setState({ street: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="town">
                            <Form.Label>town</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="town" value={this.state.town} onChange={(event) => {
                                this.setState({ town: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="contactNo">
                            <Form.Label>contactNo</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="contactNo" value={this.state.contactNo} onChange={(event) => {
                                this.setState({ contactNo: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required. 10 charters needed
                            </Form.Text>
                        </Form.Group>





                        <Form.Group className="mb-3" controlId="orderDate">
                            <Form.Label>orderDate</Form.Label>
                            <Form.Control type="date" readOnly={this.isView} placeholder="orderDate" value={
                                moment(this.state.orderDate).format('yyyy-MM-DD')
                            } onChange={(event) => {
                                this.setState({ orderDate: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="status">
                            <Form.Label>status</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="status" value={this.state.status} onChange={(event) => {
                                this.setState({ status: event.target.value }, () => {
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



                        <Button hidden={this.isView} disabled={!this.state.isValid} variant="primary" type="submit" >SAVE NOW</Button>{' '}
                        <Button variant="warning" onClick={() => this.props.history.push('/order')} >CANCEL</Button>{' '}


                    </form>

                    <SweetAlert
                        show={this.state.showSaved}
                        title={this.state.alertTitle}
                        onConfirm={() => {
                            this.props.history.push('/order');
                        }}

                        type={"success"}
                    >

                    </SweetAlert>

                </div>
            </Container>

        );
    }
    isValid() {
        if ((

            !(this.state.orderID.length <= 0) *
            !(this.state.postalNo.length <= 0) *
            !(this.state.street.length <= 0) *
            !(this.state.town.length <= 0) *
            !(this.state.contactNo.length < 10) *
            !(this.state.orderDate.length <= 0) *
            !(this.state.status.length <= 0) *
            !(this.state.assignedDriver.length <= 0) *
            !(this.state.name.length <= 0)

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