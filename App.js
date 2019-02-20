import React, { Component } from "react";
import MainNavigator from "./app/routes/MainNavigator";
import { Provider } from "react-redux";
import { Store } from "./app/store/index";
import { setLocalNotification } from "./app/utils/Notification";

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={Store}>
        <MainNavigator />
      </Provider>
    );
  }
}
