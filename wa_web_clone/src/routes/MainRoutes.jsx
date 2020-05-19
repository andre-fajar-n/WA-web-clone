import React, { Component } from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/Home";

class MainRoutes extends Component {
  render() {
    return (
      // <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" />
          <Route exact path="/signup" />
        </Switch>
      </BrowserRouter>
      // </Provider>
    )
  }
}

export default MainRoutes;