import React ,{ Component } from 'react';
import axios from 'axios';
import SlideShow from '../SlideShow/SlideShow';
import jsPdf from 'jspdf'
import 'jspdf-autotable'



export default class stockProductsReport extends Component{

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

  //Report pdf generating
  jsPdfGenerator = () => {

    //new document in jspdf
    var doc = new jsPdf('l','pt', 'a3');

    doc.text(600, 20 ,'Stock-Product Details Report', { align: 'center' });
    doc.autoTable({  html:'#stockPro-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } }, 
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Stock-Product Details Report.pdf");
  }


  render(){

    return(
      
      <div>
 

      <div className = "container">
         
          <center>
          <h3 style = {{marginTop:'5%'}}><font face = "Comic sans MS" size ="6"><b>Stock-Products Report</b></font></h3>
          </center>
        
          <br/>
     

      <nav className="navbar navbar-light bg-light">

        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "searchQuery"
        onChange = {this.handleSearchArea} />


          </form>
      </nav>


        
        
        <table id = "stockPro-table" className = "table table-hover" style = {{marginTop:'50px'}}>
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

            </tr>

            ))}
          </tbody>
         </table>     
         
         <br/><br/>

         <button className="btn-primary" onClick={this.jsPdfGenerator}>Generate Report PDF</button>

         <br/><br/>
        <SlideShow />

         <br/><br/><br/>
       </div> 
         
       </div>
    )
  }
} 