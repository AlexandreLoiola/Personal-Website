import styled from "styled-components";

export const StledContainer = styled.div`
  display: flex;
  bottom: 3vh;
  left: 42vw;
  position: fixed;
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.tertiary};
  font-family: Mada;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
