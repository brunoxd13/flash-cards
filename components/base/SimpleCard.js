import React, { Component } from "react";
import { Card } from "./styled/Card";
import { StrongText, LigthText } from "./styled/Text";

export default class SimpleCard extends Component {
  render() {
    return (
      <Card>
        <StrongText>Title</StrongText>
        <LigthText>5 Questions</LigthText>
      </Card>
    );
  }
}
