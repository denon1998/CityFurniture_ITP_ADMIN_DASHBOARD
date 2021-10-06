import React from 'react';
import emailjs from 'emailjs-com';

/**
* @author
* @function 
**/

const emailer = () => {
    function sendEmail(e){
      e.preventDefault();
      
      emailjs.sendForm("service_a9wiohc","template_9gtqp5c",e.target,"user_EKnL5flUnkm7F9eyeeFQq")
      .then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));
    
    }
  return(
    <div className="container boarder"
    style={{marginTop:"50px",
    width:"50%",
    
    }}>
        <h1 style={{marginTop:"25px"}} className="text-center">Contact Form- Order management</h1>
        <form className="row" 
        style={{margin:"25px 85px 75px 100px"}}
        onSubmit={sendEmail}>
            <label>Name of the Customer</label>
            <input type="text" name="name" className="form-control"/>

            <label>Email</label>
            <input type="email" name="user_email" className="form-control"></input>

            <label>Message</label>
            <textarea name="message" rows="4" className="form-control"/>
            <input type="submit"
             value="Send" 
             className="form-control btn btn-primary"
             style={{marginTop:"30px"}}/>
        </form>
    </div>
   )

 }
 export default emailer