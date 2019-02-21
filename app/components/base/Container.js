import styled from "styled-components/native";

export const Container = styled.View`
  ${({ center }) =>
    center &&
    `align-items: center;
    align-content: center;
  `}
`;
