import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

import Dashboard from './components/Dashboard';
import Master from './components/Master';
import Login from './components/Login';
import User from './components/User';
import CloseUser from './components/CloserUser';
import BlockMarket from './components/BlockMarket';
import MyMarket from './components/MyMarket';
import Acinfo from './components/Acinfo';
import Bethistory from './components/Bethistory';
import Clientpl from './components/Clientpl';
import Cacstatement from './components/Cacstatement';
import Marketpl from './components/Marketpl';
import Sportspl from './components/Sportspl';
import Userpl from './components/Userpl';
import ProfitLoss from './components/ProfitLoss';
import Livegame from './components/Livegame';
import Fancystack from './components/Fancystack';
import SideBet from './components/SideBet';

// const authentication={
//    isLoggedIn: false,
//    onAuthentication() {
//       this.isLoggedIn=true;
//    },
//    getLogInStatus() {
//       return this.isLoggedIn
//    }
// }

// function SecuredRoute(props) {
//    return (
//       <Route path={props.path} render={data=>authentication.getLogInStatus()?(
//          <props.component {...data}></props.component>):
//          (<Redirect to={{ pathname : '/' }}></Redirect>)}></Route>   
//    )
// }

const App = () => {
  return (
     <Router>
       
           <Fragment>
        <Route exact path='/' component={Login} />
       <section>
       <Switch>
          <Route exact path='/master' component={Master} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user" component={User} />
          <Route exact path="/closeuser" component={CloseUser} />
          <Route exact path="/blockmarket" component={BlockMarket} />
          <Route exact path="/mymarket" component={MyMarket} />
          <Route exact path="/bethistory" component={Bethistory} />
          <Route exact path="/acinfo" component={Acinfo} />
          <Route exact path="/clientpl" component={Clientpl} />
          <Route exact path="/cacstatement" component={Cacstatement} />
          <Route exact path="/marketpl" component={Marketpl} />
          <Route exact path="/sportspl" component={Sportspl} />
          <Route exact path="/userpl" component={Userpl} />
          <Route exact path="/profitloss" component={ProfitLoss} />
          <Route exact path="/livegame" component={Livegame} />
          <Route exact path="/fancystack" component={Fancystack} />
          <Route exact path="/sidebet" component={SideBet} />
           </Switch> 
       </section>
         
         </Fragment>
      </Router>   
  

  );
}   

export default App;
