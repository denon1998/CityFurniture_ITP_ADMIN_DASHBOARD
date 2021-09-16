import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

        
        
         class CardPaySuccess extends Component{
        
          
        render(){
            return(
                <div>
                <div className = "container border"
                 style = {{marginTop:"50px",
                 width:'50%',
                             
                 }}>
         
   
         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 11"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 11"></button>
           </div>
           <div className="carousel-inner">
           
             <div className="carousel-item active">
               <img src='https://berkeleymills.com/wp-content/uploads/2013/03/Photo_6_433_4.png' className="d-block w-100" alt="..." style={{width:'6px'}}/>
             </div>
           
             <div className="carousel-item">
               <img src='https://www.hdfurniturestore.com/uploads/imagegallery/images/Category-Living.jpg'className="d-block w-100" alt="..." style={{width:'6px'}} />
             </div>
           
             <div className="carousel-item">
               <img src='https://images.all-free-download.com/images/graphiclarge/fashion_sofa_hd_picture_167714.jpg' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
              </div>
   
             <div className="carousel-item">
               <img src='https://www.nicepng.com/png/detail/84-844763_dining-table-png-dining-table-images-png.png' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://st2.depositphotos.com/3077183/5943/i/950/depositphotos_59433209-stock-photo-teak-wood-furniture-stand-on.jpg' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://www.kindpng.com/picc/m/195-1950088_the-best-wooden-furniture-material-for-dining-room.png' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://3.imimg.com/data3/FR/VX/MY-3148977/computer-table-500x500.png' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://swall.teahub.io/photos/small/142-1421591_center-center-modern-setting-dining-table.jpg' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://themansionfurniture.com/23672-large_default/hd-8011-homey-design-console-table-victorian-style-european-classic-design.jpg' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://lh3.googleusercontent.com/proxy/XY2g_z-e8uWGDMgzD91hO84pObvcumuzyUREZL4wsAE6ExtrFrwU3UMYhCqv-Ed2WyWYF5zX9Sj8vRsg0HV9gvH_LMsbQgtxWMrzAR2877ZRPepXeMYDjbKASp19r_PjS9iW4f7LCcDqYSghq2TieYVREj1i1PCsAE5Bkpb5ybSfs8gO' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://images.all-free-download.com/images/graphicthumb/home_decoration_01_hd_picture_167818.jpg' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
             <div className="carousel-item">
               <img src='https://s.yimg.com/aah/yhst-96405782831295/sophisticated-traditional-european-living-room-furniture-hd-09-133.jpg' className="d-block w-100" alt="AAAA" style={{width:'6px'}}/>
             </div>
   
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
         </div>
         <center>
             <br/>
         <h1>Your Payment was Successfull</h1>
         </center>
               </div>
           )
       }
   }
        
    
export default CardPaySuccess;