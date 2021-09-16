import React ,{ Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow';
import swal from 'sweetalert';
import SidebarStock from '../SidebarStock/SidebarStock';


export default class HomeStockCat extends Component{

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
  axios.get("https://furniture-store-backend.herokuapp.com/api/catposts").then(res =>{

  if(res.data.success){
    this.setState({
    posts:res.data.existingPosts
    });

    console.log(this.state.posts)
  }
  });

}

onDelete = (id) =>{

  axios.delete(`https://furniture-store-backend.herokuapp.com/api/catpost/delete/${id}`).then((res)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Category details has been deleted!", {
          icon: "success",
        });
      } 
    });
  this.retrievePosts();

  })
}

filterData(posts, searchKey){

  const result = posts.filter((post) => 
  
  post.catID.toLowerCase().includes(searchKey)||
  post.catName.toLowerCase().includes(searchKey)||
  post.catDescription.toLowerCase().includes(searchKey)||
  post.catStatus.toLowerCase().includes(searchKey)

)
this.setState({posts:result})
}


handleSearchArea = (e) =>{

const searchKey = e.currentTarget.value;

axios.get("https://furniture-store-backend.herokuapp.com/api/catposts").then(res =>{

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
          <div className = "row">
          
            <center>
          <h3><font face = "Comic sans MS" size ="6"><b>Categories</b></font></h3>
          </center>
          <br/>
   
      <nav className="navbar navbar-light bg-light">
      <button className = "btn btn-success"><a href = "/addC" style ={{textDecoration:'none', color:'white'}}>Add new category</a></button>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "searchQuery"
        onChange = {this.handleSearchArea} />
          </form>
      </nav>

   </div>
        
        
        <table className = "table table-hover" style = {{marginTop:'40px'}}>
        <thead>
        <tr className = "table-primary">
             <th scope = "col">#</th> 
             <th scope = "col">Category ID</th> 
             <th scope = "col">Name</th>
             <th scope = "col">Sub Categories</th> 
             <th scope = "col">Description</th>
             <th scope = "col">Date</th>
             <th scope = "col">Status</th>
             <th scope = "col">Edit</th>
             <th scope = "col">Delete</th>

             </tr>
         </thead> 
         <tbody>
            {this.state.posts.map((posts, index) =>(

            <tr key = {index}>
              <th scope = "row">{index+1}</th>

              <td>
                  <a href = {`/postC/${posts._id}`} style = {{textDecoration:'none'}}>
            
                  {posts.catID}
                  </a> 
                  </td>
              <td>{posts.catName}</td>
              <td>{posts.catSub}</td>
              <td>{posts.catDescription}</td>
              <td>{posts.catDate}</td>
              <td>{posts.catStatus}</td>
              <td>
                  <a className = "btn btn-warning btn-sm" href = {`/editC/${posts._id}`}>
              
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
        
         <SlideShow/>
        
         <br/><br/><br/>
        
        
       </div> 
       <Footer />
       </div>
    
    )
  }
}