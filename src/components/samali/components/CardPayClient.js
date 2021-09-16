import { text } from 'body-parser';
import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import '../style/CardPay.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import swal from 'sweetalert';


function CardPayClient() {
    let history = useHistory();

    const [cardnumber, setNumber] = useState('')
    const [customerName, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/')
    const [error3, setError3] = useState('')
    const [error4, setError4] = useState('')
    
    

    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const con =/^[0-9\b]+$/;

    

    //validation start here
    useEffect(() => {
        if (cardnumber.length != 16  && cardnumber != null) {
            setError1("Card number should be 16 numbers only!");
        } else {
            setError1("valid");
        }

        if(!name.test(String(customerName)))
        {
            setError2("Invalid Customer Name");
        }
        else{
            setError2("valid");
        }

        if (expiry.length != 5 && expiry != String  ) {
            setError3("Please Enter date given format");
        } else {
            setError3("valid");
        }

        if (cvc.length != 4  && cardnumber != null ) {
            setError4("Please enter 4 numbers for your CVC");
        } else {
            setError4("valid");
        }

       


    });



    const handleclick = () => {
        if ((error1 == "Please enter numbers only") ||  (error3 == "Please Enter correct date") || (error4 == "Please enter 4 numbers for your CVC")) {
            alert("Invalid Details. Please re Check");
        } else {



            axios({
                method: 'post',
                url: 'http://furniture-store-backend.herokuapp.com/api/cardpost/save',
                data: {
                    cardnumber: cardnumber,
                    customerName: customerName,
                    expiry: expiry,
                    cvc: cvc,

                }


            });
            swal("Good job!", "Your data was submitted", "success");
            
            history.push('/success');

        }
    }



    return (

        <div className='container' align="center" >

            <br />
            <br></br>
            <h1>PAY NOW </h1>
            <br />
            <br />
            <Cards

                number={cardnumber}
                name={customerName}
                xpiry={expiry}
                cvc={cvc}
                focused={focus}

            />

            <form style={{ width: "40%" }}>
                <br />
                <br />
                <input
                    class="form-control"
                    type='tel'
                    name='cardnumber'
                    placeholder="Card Number"
                    value={cardnumber}
                    //required
                    onChange={e => setNumber(
                        e.target.value
                    )}
                    onFocus={e => setFocus(
                        e.target.name
                    )}
                />

                {error1 == "valid"
                    ? <div id="emailHelp" class="form-text" style={{ color: "blue" }}><b>{error1}</b></div>
                    : <div id="emailHelp" class="form-text" style={{ color: "red" }}><b>{error1}</b></div>
                }

                <br />
                <br />

                <input
                    class="form-control"
                    name='customerName'
                    type='text'
                    placeholder="Cash holder name"
                    value={customerName}
                    required
                    onChange={e => setName(
                        e.target.value
                    )}
                    onFocus={e => setFocus(
                        e.target.name
                    )}
                />
               {error2 == "valid"
                    ? <div id="emailHelp" class="form-text" style={{ color: "blue" }}><b>{error2}</b></div>
                    : <div id="emailHelp" class="form-text" style={{ color: "red" }}><b>{error2}</b></div>
                }

                <br />
                <br />

                <input
                    class="form-control"
                    type='text'
                    name='expiry'
                    required
                    placeholder="MM/YY Expiry"
                    value={expiry}
                    onChange={e => setExpiry(
                        e.target.value
                    )}
                    onFocus={e => setFocus(
                        e.target.name
                    )}
                />

                {error3 == "valid"
                    ? <div id="emailHelp" class="form-text" style={{ color: "blue" }}><b>{error3}</b></div>
                    : <div id="emailHelp" class="form-text" style={{ color: "red" }}><b>{error3}</b></div>
                }
                <br />
                <br />

                <input
                    class="form-control"
                    type='tel'
                    name='cvc'
                    required
                    placeholder="CVC"
                    value={cvc}
                    onChange={e => setCvc(
                        e.target.value
                    )}
                    onFocus={e => setFocus(
                        e.target.name
                    )}
                />
                {error4 == "valid"
                    ? <div id="emailHelp" class="form-text" style={{ color: "blue" }}><b>{error4}</b></div>
                    : <div id="emailHelp" class="form-text" style={{ color: "red" }}><b>{error4}</b></div>
                }
                <br />
                <br />



                <button onClick={handleclick} class="btn btn-success btn-lg">PROCEED</button>

            </form>
        </div>

    );

}

export default CardPayClient;