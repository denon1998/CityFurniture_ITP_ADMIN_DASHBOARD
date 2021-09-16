import React, { Component } from 'react';
import axios from 'axios';


class PostDetailsCategories extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  //retrieve data of specific form
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`http://furniture-store-backend.herokuapp.com/api/postCategory/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {categoryName, categoryId, subcategoryType, subcategoryId, includedComponents, description} = this.state.post;
      return(

        <div className="container border"

        style={{

          marginTop: "50px",
          width: '50%',
          backgroundImage: `url('https://i.pinimg.com/736x/f7/19/25/f719251215a20ff66f203f84444aec5e.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',

        }}>

        <div style={{marginTop:'20px'}}>
          <h1>{categoryName}</h1>
          <hr/>
          <dl className="row">
            <dt className="col-sm-3">Category Name</dt>
            <dd className="col-sm-9">{categoryName}</dd>
            <dt className="col-sm-3">Category Id</dt>
            <dd className="col-sm-9">{categoryId}</dd>
            <dt className="col-sm-3">Subcategory Type</dt>
            <dd className="col-sm-9">{subcategoryType}</dd>
            <dt className="col-sm-3">Subcategory Id</dt>
            <dd className="col-sm-9">{subcategoryId}</dd>
            <dt className="col-sm-3">Included Components</dt>
            <dd className="col-sm-9">{includedComponents}</dd>
            <dt className="col-sm-3">Description</dt>
            <dd className="col-sm-9">{description}</dd>
          </dl>
         <div>
        </div>
        </div>
        </div>
      )
    }
  }
  export default PostDetailsCategories;