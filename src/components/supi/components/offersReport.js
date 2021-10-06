import React ,{ Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import jsPdf from 'jspdf';
import 'jspdf-autotable';

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

// onDelete = (id) =>{

//   axios.delete(`https://furniture-store-backend.herokuapp.com/api/postOffers/delete/${id}`).then((res)=>{
//     swal("Deleted Successfully")
//   this.retrievePosts();

//   })
// }

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


jsPdfGenerator = () => {

    //new document in jspdf
    var doc = new jsPdf('l', 'pt', 'a3');

    doc.text(600, 20, 'Offers Details Report', { align: 'center' },);
    doc.autoTable({ html: '#offers-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Offer Details.pdf");
  }

  render(){

    return(

      <div className = "container">
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
        <table Id = "offers-table" className = "table table-hover" style = {{marginTop:'40px'}}>
          <thead>
           <tr>
             <th scope="col">Id</th>
             <th scope="col">Sale Product Name</th>
             <th scope="col">Discount Amount</th>
             <th scope="col">Discount Percentage</th>
             <th scope="col">Previous Price</th>
             <th scope="col">New Price</th>
             <th scope="col">Description</th>

             </tr>
          </thead>
            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>

                   
                    {posts.saleProductName}
                    
                      </td>                      
                  
                  <td>{posts.discountAmount}</td>
                  <td>{posts.discountAsAPercentage}</td>
                  <td>{posts.previousPrice}</td>
                  <td>{posts.newPrice}</td>
                  <td>{posts.description}</td>
                                 
              
            </tr>
            ))}
          </tbody>
         </table>

         <button className="btn-primary" onClick={this.jsPdfGenerator}>Generate Report PDF</button>
          
        </div>
             
    )  
}
}

