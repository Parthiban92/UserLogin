import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
export default class EmployeeList extends React.Component {
   constructor(props) {
    super(props);
    this.state = {  username: '',  password: ''};
    this.state = {username:"hruday@gmail.com",password :'hruday123'};

    this.handleSubmit = this.handleSubmit.bind(this);
     this.FormData = this.FormData.bind(this);
   
            localStorage.removeItem('auth');
  }

  FormData(event) {

     this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (e) => {
        e.preventDefault();
        
  if(this.state.login_name === this.state.username && this.state.login_password === this.state.password)
  {
     localStorage.setItem('auth',"valid")
  }
        
 }


 

  render() {

    return (

      <form className="form-signin">       
             
                   
        </form>
      
  
    );
  }
}


