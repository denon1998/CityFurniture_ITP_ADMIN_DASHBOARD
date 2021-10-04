import React ,{ Component } from 'react';
import axios from 'axios';
import SlideShow from '../SlideShow/SlideShow';
import swal from 'sweetalert';

export default class HomeStockSup extends Component{

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
  axios.get("https://furniture-store-backend.herokuapp.com/api/supposts").then(res =>{

  if(res.data.success){
    this.setState({
      posts:res.data.existingPosts
    });

    console.log(this.state.posts)
  }
  });

}

onDelete = (id) =>{

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this Supplier details!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      axios.delete(`https://furniture-store-backend.herokuapp.com/api/suppost/delete/${id}`).then((res)=>{
        this.retrievePosts();
        })
      swal("Done! Supplier details has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Not deleted ! Supplier details are safe !");
    }
  });
}

filterData(posts, searchKey){

    const result = posts.filter((post) => 
    
    post.supplierID.toLowerCase().includes(searchKey)||
    post.supplierName.toLowerCase().includes(searchKey)||
    post.supplierPhone.toLowerCase().includes(searchKey)||
    post.supplierEmail.toLowerCase().includes(searchKey)||
    post.supplierAddress.toLowerCase().includes(searchKey)||
    post.supplierComName.toLowerCase().includes(searchKey)||
    post.supplierComAddress.toLowerCase().includes(searchKey)||
    post.supplierDate.toLowerCase().includes(searchKey)



  )
  this.setState({posts:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("https://furniture-store-backend.herokuapp.com/api/supposts").then(res =>{

    if(res.data.success){

      this.filterData(res.data.existingPosts, searchKey)

    }
  })
}


  render(){

    return(

      <div>

      <div className = "container">

          <center>
          <h3 style = {{marginTop:'5%'}}><font face = "Comic sans MS" size ="6"><b>Suppliers</b></font></h3>
          </center>
          <br/>
     
      
      <nav className="navbar navbar-light bg-light">

      <button className = "btn btn-success"><a href = "/addS" style ={{textDecoration:'none', color:'white'}}>Add new Supplier</a></button>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "searchQuery"
        onChange = {this.handleSearchArea} />
          </form>
      </nav>

  
        
        <table className = "table table-hover" style = {{marginTop:'40px'}}>
        <thead>
        <tr className = "table-primary">
            <th scope = "col">#</th> 
             <th scope = "col">ID</th> 
             <th scope = "col">Name</th> 
             <th scope = "col">Contact number</th>
             <th scope = "col">Email</th>
             <th scope = "col">Address</th>
             <th scope = "col">Company</th>
             <th scope = "col">Company address</th>
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
                  <a href = {`/postS/${posts._id}`} style = {{textDecoration:'none'}}>
            
                  {posts.supplierID}
                  </a>
                  </td>
                   <td>{posts.supplierName}</td>
                  <td>{posts.supplierPhone}</td>
                  <td>{posts.supplierEmail}</td>
                  <td>{posts.supplierAddress}</td>
                  <td>{posts.supplierComName}</td>
                  <td>{posts.supplierComAddress}</td>
                  <td>{posts.supplierDate}</td>

                  <td>
                  <a className = "btn btn-warning btn-sm" href = {`/editS/${posts._id}`}>
              
                    <i className = "fas fa-edit"></i>&nbsp;Edit&nbsp;
                  </a>
                  </td>
              

                  
                  <td>
                  <a className = "btn btn-danger btn-sm" onClick={ event => this.onDelete(posts._id)}>
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
       </div>
    )
  }
}