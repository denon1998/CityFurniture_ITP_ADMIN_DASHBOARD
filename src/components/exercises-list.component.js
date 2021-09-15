import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';


const Customer = props => ( <
    tr >
    <
    td > { props.exercise.username } </td> <
    td > { props.exercise.Address } </td> <
    td > { props.exercise.Phone } </td> <
    td > { props.exercise.birthday.substring(0, 10) } </td> <
    td > { props.exercise.Gender } </td> <
    td > { props.exercise.Email } </td> <
    td > { props.exercise.password } </td> <
    td >
    <
    Link to = { "/edit/" + props.exercise._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a > </
    td > </tr> 
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            exercises: []
        };
    }



    componentDidMount() {
        axios.get('https://furniture-store-backend.herokuapp.com/api0/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('https://furniture-store-backend.herokuapp.com/api0/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('https://furniture-store-backend.herokuapp.com/api0/exercises/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                exercises: this.state.exercises.filter(el => el._id !== id)
            })
        }
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Customer exercise = { currentexercise }
            deleteExercise = { this.deleteExercise }
            key = { currentexercise._id }
            />;
        })
    }


    filterData(Customer, searchKey) {

        this.setState({
            exercises: this.state.exercises.filter(el => el.Username = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('https://furniture-store-backend.herokuapp.com/api0/exercises/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ exercises: result })

        });

    }

    render() {
        return ( <
            div className = "container" >
            
            <div style = {
                { float: 'none' }
            } >
            <Link to = "/main" > <Button variant = "primary" > Customer </Button> 
            </Link >
            <Link to = "/users/" > <Button variant = "primary" > User </Button> 
            </Link >
            </div>

            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > Customer List </h4> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>


            <
            table className = "table" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Name </th> <
            th > Address </th> <
            th > Phone </th> <
            th > Birth Day </th> <
            th > Gender </th> <
            th > Email </th> <
            th > Password </th> <
            th > Actions </th> </
            tr > </
            thead> <
            tbody > {
                this.state.exercises.map(props =>
                    <
                    tr key = { props.id } >
                    <
                    td > { props.username } </td> <
                    td > { props.Address } </td>  <
                    td > { props.Phone } </td>  < 
                    td > { props.birthday.substring(0, 10) } </td>  < 
                    td > { props.Gender } </td> <
                    td > { props.Email } </td>  < 
                    td > { props.password } </td>  <   

                    td >
                    <
                    Link to = { "/edit/" + props._id } > Edit </Link> | <a href="" onClick={() => { this.deleteExercise(props._id) }}>Delete</a > </
                    td >

                    </tr>
                )

            }

            </tbody> </
            table >

            <
            div style = {
                { float: 'right' }
            } >

            <
            Link to = "/create" >
            <Button variant = "primary" > New Customer </Button> 
            </
            Link >
            </div>

            </div>
        )
    }
}