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
        style={{margin:"55px 85px 75px 100px"}}
        onSubmit={sendEmail}>
             <img src="https://thumbs.dreamstime.com/b/process-writing-new-letter-email-marketing-concept-people-stand-near-envelope-paper-document-modern-flat-vector-177557968.jpg" style={{height:"100%", width:"100%"}}/>
             <br/>
             <br/>
            <label><b>Name of the Customer</b></label>
            <input type="text" name="name" className="form-control"/>

            <label><b>Email</b></label>
            <input type="email" name="user_email" className="form-control"></input>

            <label><b>Message</b></label>
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