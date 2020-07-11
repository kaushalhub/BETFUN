import React, { Component } from 'react'
import { Link, Redirect} from "react-router-dom";
import axios from 'axios';
import '../Login.css'


export default class Login extends Component {

    constructor(props){
            super(props);
            this.state = {
               userName : '' ,
               password : '',
               redirectToReferrer : false
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
  
  
  
        handleChange(event){
                this.setState({
                    [event.target.name] : event.target.value
  
                });
        }
        handleSubmit(event){
                event.preventDefault();
  
                const user = {
                userName : this.state.userName,
                password : this.state.password
                };
  
          if(this.state.userName && this.state.password)
            {
         axios.post(`http://localhost:4100/api/login`,user)
         .then((response) =>
            {
                // alert("invalid email or password");
              if(!response.data.success){
                this.setState({redirectToReferrer: false});
               return alert("invalid email or password");
  
              }
                let userresponse = response;
                console.log(response);
                if(userresponse){
                sessionStorage.setItem('data',JSON.stringify(userresponse));
                this.setState({redirectToReferrer: true});
                }
  
            },this)
            .catch((error) => alert(error))
  
        }
    }
  
      render() {
  
          if (this.state.redirectToReferrer){   
            return (<Redirect to={'/dashboard'}/>)
      }
        
  
         return (
          <div>
              
              <form className="form-login" onSubmit={this.handleSubmit} >
                  <h3>Login With BETFUN360</h3>
  
                  <div className="form-group">
                      <label>Email address</label>
                      <input type="text" name="userName" onChange={this.handleChange} className="form-control" placeholder="Enter email" required />
                  </div>
  
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" required />
                  </div>
  
                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                  </div>
  
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p>
              </form>
          </div>
          );
      }
  }
  



