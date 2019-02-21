import styled from "styled-components/native";

export const StrongText = styled.Text`
  font-weight: bold;
  font-size: ${props => `${props.size || 16}px`};
  ${({ center }) => center && `text-align: center;`}
`;

export const LigthText = styled.Text`
  color: #878787;
  font-size: ${props => `${props.size || 16}px`};
  ${({ center }) => center && `text-align: center;`}
`;
