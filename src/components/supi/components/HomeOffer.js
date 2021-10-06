import React ,{ Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class HomeOffer extends Component {

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
  axios.get("https://furniture-store-backend.herokuapp.com/api/postsOffers").then(res =>{

  if(res.data.success){
    this.setState({
      posts:res.data.existingPosts
    });

    console.log(this.state.posts)
  }
  });

}

onDelete = (id) =>{

  axios.delete(`https://furniture-store-backend.herokuapp.com/api/postOffers/delete/${id}`).then((res)=>{
    swal("Deleted Successfully")
  this.retrievePosts();

  })
}

filterData(posts, searchKey){

    const result = posts.filter((post) => 
    
    post.saleProductName.toLowerCase().includes(searchKey)||
    post.discountAmount.toLowerCase().includes(searchKey)||
    post.discountAsAPercentage.toLowerCase().includes(searchKey)||
    post.previousPrice.toLowerCase().includes(searchKey)||
    post.newPrice.toLowerCase().includes(searchKey)||
    post.description.toLowerCase().includes(searchKey)


  )
  this.setState({posts:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("https://furniture-store-backend.herokuapp.com/api/postsOffers").then(res =>{

    if(res.data.success){

      this.filterData(res.data.existingPosts, searchKey)

    }
  })
}

  render(){

    return(

      <div className = "">
        <div className = "row">
          <div className ="col-lg-9 mt-2 mb-2">
          <br></br> <center>
          <h4>All Offers</h4>
          </center>
      </div>
      <div className ="col-lg-9 mt-2 mb-2">
        <input
        className = "form-control"
        type = "search"
        placeholder = "search by sale product name"
        name = "search by sale product name"
        onChange = {this.handleSearchArea}>
        </input>
        </div>

   </div>
        <table className = "table table-hover" style = {{marginTop:'40px'}}>
          <thead>
           <tr>
             <th scope="col">Id</th>
             <th scope="col">Sale Product Name</th>
             <th scope="col">Discount Amount</th>
             <th scope="col">Discount Percentage</th>
             <th scope="col">Previous Price</th>
             <th scope="col">New Price</th>
             <th scope="col">Description</th>
             <th scope = "col">Action</th>

             </tr>
          </thead>
            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>

                    <a href={`/postOffer/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.saleProductName}
                    </a>
                      </td>                      
                  
                  <td>{posts.discountAmount}</td>
                  <td>{posts.discountAsAPercentage}</td>
                  <td>{posts.previousPrice}</td>
                  <td>{posts.newPrice}</td>
                  <td>{posts.description}</td>
                  <td>
                  <a className = "btn btn-warning" href = {`/editOffers/${posts._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit
                  </a>
                &nbsp;
                  <a className = "btn btn-danger" href = "#" onClick ={() => this.onDelete(posts._id)}>
                    <i className = "fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
              </td>
            </tr>
            ))}
          </tbody>
         </table>

          <button className="btn btn-success"><a href="/addOffers" style={{textDecoration:'none',color:'white'}}>Add New Offer</a></button>
          
        </div>
             
    )  
}
}

