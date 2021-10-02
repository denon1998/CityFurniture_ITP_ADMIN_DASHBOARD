import React ,{ Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow';
import jsPdf from 'jspdf'
import 'jspdf-autotable'



export default class stockCategoryReport extends Component{

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


  //Report pdf generating
  jsPdfGenerator = () => {

    //new document in jspdf
    var doc = new jsPdf('l','pt', 'a3');

    doc.text(600, 20 ,'Stock-Category Details Report', { align: 'center' });
    doc.autoTable({  html:'#stockCat-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } }, 
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Stock Category Details.pdf");
  }




  render(){

    return(

      <div>
  
      <div className = "container">

            <center>
            <h3 style = {{marginTop:'5%'}}><font face = "Comic sans MS" size ="6"><b>Categories</b></font></h3>
          </center>
          <br/>
   
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "searchQuery"
        onChange = {this.handleSearchArea} />
          </form>
      </nav>
        
        <table id = "stockCat-table" className = "table table-hover" style = {{marginTop:'40px'}}>
        <thead>
        <tr className = "table-primary">
             <th scope = "col">#</th> 
             <th scope = "col">Category ID</th> 
             <th scope = "col">Name</th>
             <th scope = "col">Sub Categories</th> 
             <th scope = "col">Description</th>
             <th scope = "col">Date</th>
             <th scope = "col">Status</th>

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

            </tr>
            ))}
          </tbody>
         </table>
         
         <br/><br/>

         <button className="btn-primary" onClick={this.jsPdfGenerator}>Generate Report PDF</button>

         <br/><br/>
        
         <SlideShow/>
        
         <br/><br/><br/>
        
        
       </div> 
       <Footer />
       </div>
    
    )
  }
}