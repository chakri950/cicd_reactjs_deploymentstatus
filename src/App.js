import React, { Component } from "react";
import "./App.css";
import DeploymentStatus from "./DeploymentStatus";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={"/"}>
        <div className="App">
          <header className="App-header">
			<h3>Deployments Dash Board</h3>
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/getdeploymentstatus" />}
            />
            <Route
              exact
              path="/getdeploymentstatus"
              component={DeploymentStatus}
            />
          </Switch>
          <footer className="App-footer footer-position">
             <h5>@copyrights</h5>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
