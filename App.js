import React, { Component } from "react";
import MainNavigator from "./app/routes/MainNavigator";
import { Provider } from "react-redux";
import { Store } from "./app/store/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <MainNavigator />
      </Provider>
    );
  }
}
