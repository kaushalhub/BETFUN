import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import '../Login.css';
import mainLogo from '../betfun-logo.png';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            redirectToReferrer: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value

        });
    }
    handleSubmit(event) {
        event.preventDefault();

        const user = {
            userName: this.state.userName,
            password: this.state.password
        };

        if (this.state.userName && this.state.password) {
            axios.post(`http://35.154.81.179:4000/api/login`, user)
                .then((response) => {
                    // alert("invalid email or password");
                    if (!response.data.success) {
                        this.setState({ redirectToReferrer: false });
                        return alert("invalid email or password");

                    }
                    let userresponse = response;
                    console.log(response);
                    if (userresponse) {
                        sessionStorage.setItem('data', JSON.stringify(userresponse));
                        this.setState({ redirectToReferrer: true });
                    }

                }, this)
                .catch((error) => alert(error))

        }
    }

    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/dashboard'} />)
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


            //     <div className="login-page" onSubmit={this.handleSubmit}>
            //     <div className="form">
            //       <form className="login-form">
            //         <input type="text" name="userName" onChange={this.handleChange} placeholder="username" />
            //         <input type="password" name="password" onChange={this.handleChange} placeholder="password" />
            //         <button>login</button>
            //       </form>
            //     </div>
            //   </div>


            <body oncontextmenu="if (!window.__cfRLUnblockHandlers) return false; return false;" oncopy="if (!window.__cfRLUnblockHandlers) return false; return false;" oncut="if (!window.__cfRLUnblockHandlers) return false; return false;" onpaste="if (!window.__cfRLUnblockHandlers) return false; return false;" class="bg_login">
                <div id="wrapper">
                    <div className="logo"><img src={mainLogo} alt="..." /></div>
                    <div id="login" className=" form">
                        <section className="login_content">
                            <form onSubmit={this.handleSubmit} method="post" acceptCharset="utf-8" autoComplete="off"><input type="hidden" name="compute" defaultValue="71aff27bb927f4b17e66e3191e5d147d" />
                                <div>
                                    <label> Username</label>
                                    <div className="linput">  <input type="text" name="userName" onChange={this.handleChange} className="form-control" placeholder="Enter username" />
                                    </div>
                                </div>
                                <div>
                                    <label> Password</label>
                                    <div className="linput">  <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Password" />
                                    </div>
                                </div>

                                <div>

                                    <button className="btn btn-default submit">Log in</button>
                                </div>
                                <div className="clearfix" />
                            </form>          </section>
                    </div>
                </div>
            </body>


        );
    }
}




