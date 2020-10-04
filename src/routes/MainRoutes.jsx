import React, { Component } from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import store from "../store";

class MainRoutes extends Component {
  render() {
    const baseRoute = "/WA-web-clone"

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={`${baseRoute}/`} component={Home} />
            <Route exact path={`${baseRoute}/login`} component={Login} />
            <Route exact path={`${baseRoute}/register`} component={Register} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default MainRoutes;