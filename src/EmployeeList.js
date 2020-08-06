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
    this.state = {  user:[{       "id":1,       "name":"test1",       "age" : "11",       "gender":"male",       "email" : "test1@gmail.com",       "phoneNo" : "9415346313"     },     {       "id" : 2,       "name":"test2",       "age" : "12",       "gender":"male",       "email" : "test2@gmail.com",       "phoneNo" : "9415346314"     },     {       "id":3,       "name":"test3",
       "age" : "13",       "gender":"male",       "email" : "test3@gmail.com",       "phoneNo" : "9415346315"     },     {       "id":4,       "name":"test4",       "age" : "14",       "gender":"male",       "email" : "test4@gmail.com",       "phoneNo" : "9415346316"     },     {       "id":5,       "name":"test5",       "age" : "15",       "gender":"male",       "email" : "test5@gmail.com",       "phoneNo" : "9415346317"     },     {       "id":6,       "name":"test6",       "age" : "16",       "gender":"male",       "email" : "test6@gmail.com",       "phoneNo" : "9415346318"     }]};
     


  
  }
  componentWillMount() {  

     
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
       
     

     <table className="table table-hover">
            <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                  </tr>
            </thead>
            <tbody>
        
             {   this.state.user.map((user_list)=>{
              
                    return(<tr> <td> {user_list.name}</td>
                                <td> {user_list.age}</td>
                                <td> {user_list.gender}</td>
                                <td> {user_list.email}</td>
                                <td> {user_list.phoneNo}</td>
                             </tr>
                          );
          })
        }
           </tbody>
      </table>
   
  
    );
  }
}


