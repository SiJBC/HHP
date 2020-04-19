import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Headache from "./components/ailments/Headache";
import Diabetes from "./components/ailments/Diabetes";
import SkinDisorders from "./components/ailments/SkinDisorders";
import JointPain from "./components/ailments/Joint-Pain";
import BackProblems from "./components/ailments/BackProblems";
import HighCholesterol from "./components/ailments/Headache";
import BreathingDifficulties from "./components/ailments/Headache";
import Anxiety from "./components/ailments/Headache";
import Alzheimers from "./components/ailments/Headache";
import HeartDisease from "./components/ailments/Headache";
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path ="/Headache" component={Headache} />
            <Route exact path ="/Diabetes" component={Diabetes} />
            <Route exact path ="/SkinDisorders" component={SkinDisorders} />
            <Route exact path ="/JointPain" component={JointPain} />
            <Route exact path ="/BackProblems" component={BackProblems} />
            <Route exact path ="/HighCholesterol" component={HighCholesterol} />
            <Route exact path ="/BreathingDifficulties" component={BreathingDifficulties} />
            <Route exact path ="/Anxiety" component={Anxiety} />
            <Route exact path ="/Alzheimers" component={Alzheimers} />
            <Route exact path ="/HeartDisease" component={HeartDisease} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>

      </Provider>
    );
  }
}
export default App;
