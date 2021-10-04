import React ,{ Component } from 'react';
import axios from 'axios';
import SlideShow from '../SlideShow/SlideShow';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default class stockSuppliersReport extends Component{

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

  //Report pdf generating
  jsPdfGenerator = () => {

    //new document in jspdf
    var doc = new jsPdf('l','pt', 'a3');

    doc.text(600, 20 ,'Stock-Supplier Details Report', { align: 'center' });

    doc.autoTable({  html:'#stockSup-table' })
    
 

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } }, 
      margin: { top: 10 },
      
      
    })

    //save the pdf
    doc.save("Stock-Supplier Details Report.pdf");
  }


  render(){

    return(

      <div>

      <div className = "container">

          <center>
          <h3 style = {{marginTop:'5%'}}><font face = "Comic sans MS" size ="6"><b>Stock-Suppliers Report</b></font></h3>
          </center>
          <br/>
     
      
      <nav className="navbar navbar-light bg-light">

        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "searchQuery"
        onChange = {this.handleSearchArea} />
          </form>
      </nav>

  
        
        <table id = "stockSup-table" className = "table table-hover" style = {{marginTop:'40px'}}>
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