import React ,{ Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow';
import swal from 'sweetalert';
import SidebarStock from '../SidebarStock/SidebarStock';



export default class HomePro extends Component{

constructor(props){

  super(props);
  this.state ={

    posts:[]
  };
}  

componentDidMount(){
  this.retrievePosts();

}

retrievePosts(){
  axios.get("https://furniture-store-backend.herokuapp.com/api/postsPro").then(res =>{

  if(res.data.success){
    this.setState({
      posts:res.data.existingPosts
    });

    console.log(this.state.posts)
  }
  });

}

onDelete = (id) =>{

  axios.delete(`https://furniture-store-backend.herokuapp.com/api/postPro/delete/${id}`).then((res)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product details !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

      .then((willDelete) => {
        if (willDelete) { 
          swal("Product details has been deleted!", {
            icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });

  this.retrievePosts();

  })
}

filterData(posts, searchKey){

    const result = posts.filter((post) => 
    
    post.productID.toLowerCase().includes(searchKey)||
    post.productName.toLowerCase().includes(searchKey)||
    post.productColor.toLowerCase().includes(searchKey)||
    post.productMaterial.toLowerCase().includes(searchKey)||
    post.productCategory.toLowerCase().includes(searchKey)||
    post.productManufacture.toLowerCase().includes(searchKey)||
    post.productStatus.toLowerCase().includes(searchKey)||
    post.productDate.toLowerCase().includes(searchKey)

  )
  this.setState({posts:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("https://furniture-store-backend.herokuapp.com/api/postsPro").then(res =>{

    if(res.data.success){

      this.filterData(res.data.existingPosts, searchKey)

    }
  })
}

  render(){

    return(
      
      <div>
      <SidebarStock/>

      <div className = "container">
         
          <center>
          <h3><font face = "Comic sans MS" size ="6"><b>Products</b></font></h3>
          </center>
        
          <br/>
     

      <nav className="navbar navbar-light bg-light">
        <button className = "btn btn-success"> <a href = "/addP" style ={{textDecoration:'none', color:'white'}}>Add new Product</a></button>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "searchQuery"
        onChange = {this.handleSearchArea} />


          </form>
      </nav>


        
        
        <table className = "table table-hover" style = {{marginTop:'50px'}}>
        <thead>
            <tr className = "table-primary">
             <th scope = "col">#</th> 
             <th scope = "col">Product ID</th> 
             <th scope = "col">Name</th> 
             <th scope = "col">Color</th>
             <th scope = "col">Material</th>
             <th scope = "col">Quantity</th>
             <th scope = "col">Category</th>
             <th scope = "col">Manufacturer</th>
             <th scope = "col">Status</th>
             <th scope = "col">Date</th>
             <th scope = "col">Edit</th>
             <th scope = "col">Delete</th>

             </tr>
         </thead> 
         <tbody>
          {this.state.posts.map((posts, index) =>(

            <tr key = {index}>
              <th scope = "row">{index+1}</th>

              <td>
                  <a href = {`/postP/${posts._id}`} style = {{textDecoration:'none'}}>
            
                  {posts.productID}
                  </a>
                  </td>
              <td>{posts.productName}</td>
              <td>{posts.productColor}</td>
              <td>{posts.productMaterial}</td>
              <td>{posts.productQuantity}</td>
              <td>{posts.productCategory}</td>
              <td>{posts.productManufacture}</td>
              <td>{posts.productStatus}</td>
              <td>{posts.productDate}</td>



              <td>
                  <a className = "btn btn-warning btn-sm" href = {`/editP/${posts._id}`}>
              
                    <i className = "fas fa-edit"></i>&nbsp;Edit&nbsp;
                  </a>
                  </td>
              

                  
                  <td>
                  <a className = "btn btn-danger btn-sm" onClick={ event =>  this.onDelete(posts._id)}>
                    <i className = "fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
              </td>
            </tr>

            ))}
          </tbody>
         </table>     
         <br/><br/>
        <SlideShow />

         <br/><br/><br/>
       </div> 
       <Footer />   
       </div>
    )
  }
} 