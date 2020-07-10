import React, { Component } from 'react'
import '../Login.css'

const Login = () => {
    return (

        <div className="body">
        <form class="form-login">
                        <h1 class="h3 mb-3 font-weight-normal">Welcome To Login</h1>
                        <label for="username" class="sr-only">Username</label>
                        <input type="text" class="form-control mb-2" name="username" placeholder="Enter Username" /><br />


                        <label for="password" class="sr-only">Password</label>
                        <input type="password" class="form-control mb-2" name="password" placeholder="Enter Password" /><br />

                        <button type="submit" class="btn btn-primary btn-block" name="submit">Login</button>
                    </form>
        </div>            
    )
}

export default Login;