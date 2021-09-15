import React from "react";
// import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import emailjs from 'emailjs-com';
import emailgif from "../../images/emailgif.gif";
import SidebarStock from '../SidebarStock/SidebarStock';


const RequestProducts = () => {

    function sendEmail(e){

        e.preventDefault();

        emailjs.sendForm("service_iptep6i","template_x9q9toc",
        e.target,"user_XYQh8pXlw4PvgbJTgiJwK"
        ).then(res=>{

            console.log(res);
            
            

        }).catch(err => console.log(err));
        
    }
  
    return(

      <div>
          <SidebarStock/>
        

          <div class="col-sm">
          <div className = "container border"
          style = {{marginTop:"50px",
          width:'40%',
          backgroundImage:`url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca6d82d4-28c0-432e-a02e-ce30c721d482/d5nb1ls-7b884df2-c724-4433-9a45-3b2aa98e35c7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhNmQ4MmQ0LTI4YzAtNDMyZS1hMDJlLWNlMzBjNzIxZDQ4MlwvZDVuYjFscy03Yjg4NGRmMi1jNzI0LTQ0MzMtOWE0NS0zYjJhYTk4ZTM1YzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LNmbp6u7MMyq86sD4DbuYS1NsY_p2kF7j6_sBZWmwYU')`,
          backgroundPosition:'center',
          backgroundSize:'cover'

          }}> 
    
        
            <center>
            <h1 className="h3 mb-3 font-weight-normal" style = {{backgroundColor:'cyan'}}><font face = "Comic sans MS" size ="8"><b>Request Products</b></font></h1><br/>
            <img src = {emailgif} width="20%" />
            </center>
            
            <br/>
            <center>
              
            <form className = "form-group" style = {{margin:"25px 85px 300px 100px"}}
            onSubmit = {sendEmail} >

              <center><label><font face = "Comic sans MS" size ="5"><b>Supplier Name</b></font></label></center><br/>
              <input type = "text" name = "name"
               className = "form-control"
               style={{marginBottom:'15px', maxWidth:'500px'}}
               required/><br/>

              <center><label style={{marginTop:'25px'}}><font face = "Comic sans MS" size ="5"><b>Email</b></font></label></center><br/>
              <input type = "email" name = "user_email"
              className = "form-control"
              style={{marginBottom:'15px', maxWidth:'500px'}}
              required/><br/>

              <center><label><font face = "Comic sans MS" size ="5"><b>Company Name</b></font></label></center><br/>
              <input type = "text" name = "com_name"
               className = "form-control"
               style={{marginBottom:'15px', maxWidth:'500px'}}
               required/><br/>

              <center><label><font face = "Comic sans MS" size ="5"><b>Company Address</b></font></label></center><br/>
              <input type = "text" name = "com_address"
               className = "form-control"
               style={{marginBottom:'15px', maxWidth:'500px'}}
               required/><br/>

              <center><label><font face = "Comic sans MS" size ="5"><b>Products Required</b></font></label></center><br/>
              <input type = "text" name = "product"
               className = "form-control"
               style={{marginBottom:'15px', maxWidth:'500px'}}
               required/><br/>

              <center><label><font face = "Comic sans MS" size ="5"><b>Quantity</b></font></label></center><br/>
              <input type = "number" name = "qty"
               className = "form-control"
               style={{marginBottom:'15px', maxWidth:'500px'}}
               required/><br/>


              <center><label style={{marginTop:'25px'}}><font face = "Comic sans MS" size ="5"><b>Message</b></font></label></center><br/>
              <textarea name = "message" rows = "4"
              className = "form-control"
              style={{marginBottom:'15px', maxWidth:'500px'}}
              required/><br/>

              
              <input type = "submit" value = "Send" className = "btn btn-danger btn-lg"
              style={{marginBottom:'15px', maxWidth:'500px'}}
              
              />
              

          </form>

         
          </center>
         
      </div> 
      </div>
      <br/><br/><br/><br/>
      <Footer />
      </div>    
        
    );
}

export default RequestProducts;