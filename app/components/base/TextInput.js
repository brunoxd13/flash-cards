import React, { Component } from "react";
import styled from "styled-components/native";
import { Card } from "./Card";
import { LigthText } from "./Text";

const Input = styled.TextInput`
  border-bottom-color: #878787;
  border-bottom-width: 1;
  margin-top: 3;
  font-size: 19;
`;
export default class TextInput extends Component {
  onHandleChange = text => {
    this.props.onHandleChange(this.props.id, text);
  };

  render() {
    return (
      <Card>
        <LigthText>{this.props.title}</LigthText>
        <Input onChangeText={this.onHandleChange} />
      </Card>
    );
  }
}
