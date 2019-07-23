import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import DreamMarket from './components/DreamMarket';
import Login from './components/login/Login';

class App extends React.Component {
  state = {
    
  }


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
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
          <Route exact path="/market" component={DreamMarket} />
        </div>
      </Router>
    );
  }
}

export default App;