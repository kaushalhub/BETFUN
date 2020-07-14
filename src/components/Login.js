    import React, { Component } from 'react'
    import { Link, Redirect} from "react-router-dom";
    import axios from 'axios';


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
            axios.post(`http://35.154.81.179:4000/api/login`,user)
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
            // <div>
                
            //     <form className="form-login" onSubmit={this.handleSubmit} >
            //         <h3>Login With BETFUN360</h3>
    
            //         <div className="form-group">
            //             <label>Email address</label>
            //             <input type="text" name="userName" onChange={this.handleChange} className="form-control" placeholder="Enter email" required />
            //         </div>
    
            //         <div className="form-group">
            //             <label>Password</label>
            //             <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" required />
            //         </div>
    
            //         <button type="submit" className="btn btn-primary btn-block">Submit</button>
            //     </form>
            // </div>


            <div id="wrapper">
        <div className="logo"><img src="http://park9.bet/assets/uploads/park9bet.png?v=1.88882225858147855478823
		 " alt="..." /></div>
        <div id="login" className=" form">
          <section className="login_content">
            <form action="http://park9.bet/login/login_action" method="post" acceptCharset="utf-8" autoComplete="off"><input type="hidden" name="compute" defaultValue="4e454a6aba75ba7e2bd8c692728e834b" />
              <div>
                <label> Username</label>
                <div className="linput">  <input type="text" name="email" defaultValue className="form-control" placeholder="Enter username" required={1} />
                </div>
              </div>
              <div>
                <label> Password</label>
                <div className="linput">  <input type="password" name="password" defaultValue className="form-control" placeholder="Password" required={1} autoComplete="off" />
                </div>
              </div>
              <div className="checkbox">
                <label><input type="checkbox" name="remember" id="remember" /> Remember me</label>
                <a style={{color: '#600e6d'}} href="http://park9.bet/assets/apk/park9.bet.apk" className="download-apk-btn"> <i className="fa fa-android" /></a>
              </div>
              <div>
                <input type="hidden" defaultValue="park9.bet" name="submitted" />
                <button type="submit" className="btn btn-default submit">Log in</button>
              </div>
              <div className="clearfix" />
            </form>          </section>
        </div>
      </div>
            );
        }
    }
    



