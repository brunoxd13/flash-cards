import styled from "styled-components/native";

export const Card = styled.View`
  flex: 1;
  background-color: #ffffff;
  margin: 3px;
  border-radius: 10px;
  color: #222222;
  padding: ${props => `${props.padding || 10}px`};
`;

export const CardClickable = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffff;
  margin: 3px;
  border-radius: 10px;
  color: #222222;
  padding: ${props => `${props.padding || 10}px`};
`;
