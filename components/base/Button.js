import React from "react";
import styled from "styled-components/native";

const Touchable = styled.TouchableOpacity`
  background-color: ${props => (props.primary ? "#5EC9F7" : "#ffffff")};
  margin: 3px;
  border-radius: 10px;
  color: #222222;
  padding: 10px;
  box-shadow: 1px 1.5px 1.5px black;
  align-items: center;
`;

const Text = styled.Text`
  color: ${props => (props.primary ? "#ffffff" : "#000000")};
  font-weight: bold;
`;

export default function Button({ children, onPress, ...props }) {
  return (
    <Touchable onPress={onPress} {...props}>
      <Text {...props}>{children}</Text>
    </Touchable>
  );
}
