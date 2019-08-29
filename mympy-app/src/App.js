import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import {StripeProvider} from 'react-stripe-elements';

import Login from './components/login/Login';
import NavBar from './view/navbar/NavBar';
import UserBar from './components/userBar/UserBar.js'
import Home from './view/home/Home';
import DreamMarket from './components/DreamMarket.js'
import DreamPage from './components/dreamPage/DreamPage.js';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/login/PrivateRoute';
import About from './view/aboutPage/AboutUs';
import UserDreamsList from './components/userDreams/UserDreamsList';
import Donate from './components/stripe/Donate';

import DreamerProfile from './components/dreamForms/dreamerProfile';
import ImageForm from './components/dreamForms/imageForm';
import Footer from './view/footer/footer';

// const pkTest = process.env.PK_TEST;

class App extends React.Component {

  async componentDidUpdate(prevProps) {
    if (this.props.authZeroUser && this.props.users && this.props.users !== prevProps.users) {
      const isUser = this.props.users.reduce((acc, curr) =>
        (curr.auth_id === this.props.authZeroUser.sub) ? true : acc, false)
      await this.props.zeroLogin(this.props.authZeroUser, isUser)
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => <NavBar
          {...props}
          show={this.props.location.pathname.includes('market')}
          onAccountPage={this.props.location.pathname.includes('dashboard')}
        />} />
        {this.props.isAuthenticated && <Route path='/' component={UserBar} />}
        <div className="app-wrap">
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/login" render={(props) => (
            <Login
              {...props}
              type="login"
            />
          )} />
          <Route path="/register" render={(props) => (
            <Login
              {...props}
              type="register"
            />
          )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/market" component={DreamMarket} />
          <Route path="/market/:id" render={(props) => <DreamPage {...props} />} />
          <Route path="/donate" component={Donate} />
          <PrivateRoute path="/user-dreams" component={UserDreamsList} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <PrivateRoute exact path="/addDream" component={DreamerProfile} />
          <PrivateRoute exact path="/addDream/image" component={ImageForm} />
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ users, auth }) => {
  return {
    users: users.users,
    authZeroUser: users.authZeroUser,
    isAuthenticated: auth.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, {})(App);