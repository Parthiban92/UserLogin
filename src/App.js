import React, { Component } from 'react';

import EmployeeList from './EmployeeList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import {createStore} from 'redux';
import {connect} from 'react-redux';


class App extends Component {
  constructor(){
    
         super();
          this.state = {validiatin_display:false,
                        invalid_display:false,
                       isLoggedIn: true,username:"hruday@gmail.com",
                       password :'hruday123',validationerror:'Invalid Username or Password',
                       empty_validation:'Please Enter UserName and Password',
                       login_name:'',login_password:''};
          this.handleSubmit = this.handleSubmit.bind(this);
          this.FormData = this.FormData.bind(this);
          this.logout = this.logout.bind(this);
         
      }

       componentWillMount() {  

          if( localStorage.getItem('auth') !== null)
            { 
                this.setState({isLoggedIn: false});
               
            }
      }

    
     
     FormData(event) {
         
        this.setState({ [event.target.name]: event.target.value });
      }

     handleSubmit = (e) => {
        e.preventDefault();
       
         if(this.state.login_name == '' || this.state.password == '')
          {
            this.setState({invalid_display: true});
           
            return false;
          }
         
         if(this.state.login_name === this.state.username && this.state.login_password === this.state.password)
          {
             localStorage.setItem('auth','valid') 
            this.setState({isLoggedIn: !this.state.isLoggedIn});
          }else{
            this.setState({validiatin_display: true});
          } 

    }

    logout =(e)=>{
         if( this.state.isLoggedIn == false)
            { 
                localStorage.removeItem('auth') 
              this.setState({isLoggedIn: true});
            }
              

    }


 
  render() {
  
    if (this.state.isLoggedIn) {   
     return ( 
      <Router>
      <div>
          <form className="form-signin">       
             <h2 className="form-signin-heading"  style={{textAlignVertical: "center",textAlign: "center",}}> Login</h2>
                 <div className="form-group">
                     <div style={{display: this.state.validiatin_display ? 'block' : 'none' }} className='error_validation'> { this.state.validationerror } </div>
                  </div>
                  <div className="form-group">
                      <input type="text" className="form-control" onChange={ this.FormData } name="login_name" placeholder="Email Address" required="" />
                  </div>
                   
                  <div className="form-group">
                      <input type="password" className="form-control" onChange={ this.FormData } name="login_password" placeholder="Password" required=""/>      
                  </div>
                   <div className="form-group">
                     <div  style={{display: this.state.invalid_display ? 'block' : 'none' }} className='error_validation'> { this.state.empty_validation } </div>
                  </div>
                  
                  <div className="form-group"> 
                      <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>   
                  </div>               
           </form>
      
        </div>
    </Router>); 
   
   }else{
    return (
           <Router>
               <Switch>
                    <div className="container">
                             <div className="page-header table_content">
                                  <h1>Employee List</h1> 
                                      <button onClick={this.logout}  className='btn btn-success btn_logout'> Logout </button>      
                             </div>
                                <EmployeeList />
                    </div>
                </Switch>
      </Router>
    );
  }
  }
}


const mapStateToProps = (state) =>{
  return {
      isLoggedIn:state.reducer      
  }
}

const mapDispatchToPrpos =(dispatch)=>{
  return{
     SetName:(isLoggedIn)=>{
      dispatch({ type:'login',payload:isLoggedIn})
    }
  }
   
}
   
export default connect(mapStateToProps,mapDispatchToPrpos)(App);