
import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Form } from 'react-bootstrap';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { VehicleModel } from '../_models/vehicle.model';
 import { VehicleService } from '../_services/vehicle.service';
import moment from 'moment';

import SweetAlert, { SweetAlertType } from 'react-bootstrap-sweetalert';




export default class VehicleEdit extends React.Component {
    isView = false;
     constructor(props) {
        super(props);
        this.state = { ...VehicleModel, isValid: false, showSaved: false, alertTitle: 'Saved' };
        this.handleSubmit = this.handleSubmit.bind(this);

        const url = new URL(window.location.href);
        const id = url.searchParams.get('_id');
        if (url.toString().includes('view')) {
            this.isView = true;
        }
        if (id !== null) {
            new VehicleService().getByID(id, d => {
                this.setState(d)
            });
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.state._id === undefined) {
            new VehicleService().save(this.state, (result) => {
                this.setState({
                    showSaved: true,
                    alertTitle: 'Saved'
                })
            })
        } else {
            new VehicleService().update(this.state, (result) => {
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

                    <form onSubmit={this.handleSubmit}>

                        <Form.Group className="mb-3" controlId="id" hidden={this.state._id === undefined} >
                            <Form.Label  > ID</Form.Label>
                            <Form.Control type="text" readOnly={true} placeholder="ID" value={this.state._id} onChange={(event) => {
                                this.setState({ _id: event.target.value });
                            }} />

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="vehicleID">
                            <Form.Label>vehicleID</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="vehicleID" value={this.state.vehicleID} onChange={(event) => {
                                this.setState({ vehicleID: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required, ex: T0001
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="vehicleLicenseNO">
                            <Form.Label>vehicleLicenseNO</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="vehicleLicenseNO" value={this.state.vehicleLicenseNO} onChange={(event) => {
                                this.setState({ vehicleLicenseNO: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                            <Form.Text className="text-muted">
                                *required. ex: CAB3030 or CA5353
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="mileage">
                            <Form.Label>mileage</Form.Label>
                            <Form.Control type="number" readOnly={this.isView} placeholder="mileage" value={this.state.mileage} onChange={(event) => {
                                this.setState({ mileage: event.target.value });
                                this.isValid();
                            }} />

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="nextServiceReminder">
                            <Form.Label>nextServiceReminder</Form.Label>
                            <Form.Control type="date" readOnly={this.isView} placeholder="nextServiceReminder" value={
                                moment(this.state.nextServiceReminder).format('yyyy-MM-DD')
                            } onChange={(event) => {
                                this.setState({ nextServiceReminder: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />

                        </Form.Group>







                        <Button hidden={this.isView} disabled={!this.state.isValid} variant="primary" type="submit" >SAVE NOW</Button>{' '}
                        <Button variant="warning" onClick={() => this.props.history.push('/vehicle')} >CANCEL</Button>{' '}


                    </form>


                    <SweetAlert
                        show={this.state.showSaved}
                        title={this.state.alertTitle}
                        onConfirm={() => {
                            this.props.history.push('/vehicle');
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

            !(this.state.vehicleID.length <= 0) *
            !(this.state.vehicleLicenseNO.length <= 0) *
            (/[A-Z]{1}[0-9]{4}$/.exec(this.state.vehicleID))*
            ((/[A-Z]{2,3}[0-9]{4}$/.exec(this.state.vehicleLicenseNO)) && !/[A-Z]/.exec(String(this.state.vehicleLicenseNO).charAt(3)))

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

