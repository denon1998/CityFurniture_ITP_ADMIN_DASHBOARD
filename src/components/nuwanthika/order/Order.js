
import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Modal } from 'react-bootstrap';
import moment from 'moment';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
 import { OrderService } from '../_services/order.service';
 import jsPdf from 'jspdf'
 import 'jspdf-autotable'
 
 

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


export default class Order extends React.Component {

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
            searchQuery: '',
            hideCTRL:false

        };



    }

    render() {
        const { error, isLoaded, items } = this.state;
        // this.msg.sendMessage('PAGE_NAME', 'Order');
        return (

            <div>
                <div className="mb-4 mt-4   ">



                    <div style={searchDiv}>
                        <h2 style={{ textAlign: 'left' }}>Orders</h2>
                        <div>
                        <Button style={{ width: '100px' }} variant="danger" onClick={(e) => {
                            e.preventDefault();
                             this.jsPdfGenerator()
                        }}   >PDF  <IoIcons.IoMdDownload /></Button>{' '}
                        <Button style={{ width: '300px' }} variant="success" onClick={(e) => {
                            e.preventDefault();
                            this.props.history.push('/order-for-delivery/new');
                        }}   >Create New Order</Button>{' '}
                        </div>
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

                    <Table id="table" striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th h style={{ width: '5%' }} className="col-1" >#</th>
                                <th>orderID</th>
                                <th>name</th>
                                <th>postal number</th>
                                <th>street</th>
                                <th>town</th>
                                <th>Contact Number</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Assigned Driver</th>
                                <th hidden={this.state.hideCTRL} ></th>

                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item._id} >

<td><marquee scrollamount="2" behavior="scroll" ><p style={{ maxWidth: '100px' }}>{item._id} </p></marquee></td>
                                    <td>{item.orderID} </td>
                                    <td>{item.name} </td>

                                    <td>{item.postalNo} </td>
                                    <td>{item.street} </td>
                                    <td>{item.town} </td>

                                    <td>{'('+String(item.contactNo).substring(0,3)+')-'+String(item.contactNo).substring(3,10)}</td>
                                  
                                    <td>{
                                        moment(item.orderDate).format('yyyy-MM-DD')} </td>
                                    <td>{item.status} </td>
                                    <td>{item.assignedDriver} </td>


                                    <td  hidden={this.state.hideCTRL} >


                                        <Button variant="warning" onClick={() => {
                                            this.props.history.push('/order-for-delivery/edit?_id=' + item._id);
                                        }} >EDIT</Button>{' '}
                                        <Button variant="info" onClick={() => {
                                            this.props.history.push('/order-for-delivery/view?_id=' + item._id);
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
                                new OrderService().delete(this.dataToDelete, () => {
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

// report generation
    jsPdfGenerator = () => { 
        var doc = new jsPdf('l','pt', 'a3'); 
        doc.text(600, 20 ,'Order Details Report | Page ' + this.active + ' | Size ' + this.size, { align: 'center' });
        this.setState({
            hideCTRL:true
        },()=>{
            doc.autoTable({  html:'#table' })
            this.setState({
                hideCTRL:false
            },()=>{
                doc.autoTable({
                    columnStyles: { europe: { halign: 'center' } }, 
                    margin: { top: 10 },
                  }) 
                  doc.save('Order Details'+ '| Page ' + this.active + ' | Size ' + this.size+'.pdf');
            })
           
        })
      
      }
    
    



    componentDidMount() {
        this.fetchData(this.active, this.size);
    }


    fetchData(a, s) {
        if (this.state.searchQuery.length >= 1) { 
            const query = { query: this.state.searchQuery, size: s, page: a };
            new OrderService().search(query,
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
            new OrderService().getAll(a, s,
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

