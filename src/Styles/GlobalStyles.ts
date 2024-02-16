import styled, { createGlobalStyle } from "styled-components";
import { Button } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    margin: 20px 200px;
    padding: 0; 
    background-color: ${(props) => props.theme.primary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secundary};
  border: 1px solid transparent;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 38px;
  border-radius: 4px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secundary};
    border-color: ${(props) => props.theme.secundary};
  }
`;

export const secundaryButton = styled(PrimaryButton)`
  background-color: transparent;
  color: ${(props) => props.theme.secundary};
  border-color: ${(props) => props.theme.secundary};

  &:hover {
    background-color: ${(props) => props.theme.secundary};
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
`;

export default GlobalStyle;
