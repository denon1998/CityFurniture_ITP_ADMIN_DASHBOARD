
import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Modal } from 'react-bootstrap';
 

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
 import { OrderService } from '../_services/order.service';
import Vehicle from '../vehicle/Vehicle';


import { Sidebar } from "../sidebar/Sidebar";


const searchDiv = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}
const centerDiv = {
    width: '100%',
    height:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'red',
    backgroundImage:'url("https://dl3.pushbulletusercontent.com/PFOtLu8W3JEAgvbjmJOYzDmPrCGfD34a/image.png")'

}


export default class EntityHome extends React.Component {

    render() {
        return (
            <div>


            <div className="centerDiv" style={{  backgroundImage:'url("https://dl3.pushbulletusercontent.com/gDlW3Wt2N3cS32rXQIFFL0VOXb6f0i1r/bottom.png")' , backgroundSize:'contain',height:'calc(100vh - 130px)',width:'100%',backgroundPosition:'bottom',backgroundRepeat:'no-repeat'}}>
                <div className="d-grid gap-2 mt-2" style={{display:'flex', flex:'1',flexDirection:'column'}}>
                    <Button variant="primary" size="lg" className="mt-4"  onClick={ ()=> this.props.history.push('/driver')} >
                        Driver Management
                    </Button>
                    <Button variant="danger" size="lg"  className="mt-4"  onClick={ ()=> this.props.history.push('/vehicle')} >
                        Vehicle Management
                    </Button>
                    <Button variant="success" size="lg"  className="mt-4"  onClick={ ()=> this.props.history.push('/delivery')} >
                        Delivery Management
                    </Button>
                    <Button variant="warning" size="lg"  className="mt-4"  onClick={ ()=> this.props.history.push('/order-for-delivery')} >
                        Order Management
                    </Button>
                </div>
                </div>
            </div>);
    }

}