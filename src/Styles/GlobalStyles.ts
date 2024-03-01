import styled, { createGlobalStyle } from "styled-components";
import { Button, ButtonProps } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    margin: ${(props) =>
      props.theme.deviceType === "mobile" ? "20px" : "20px 200px"};
    padding: 0; 
    background-color: ${(props) => props.theme.primary};
  }

  .tab-content {
    min-height: 400px;
    min-height: 400px;
    padding: 0 20px;
  }

  .nav-tabs {
    padding-bottom: 1px;
    border-color: ${(props) => props.theme.tertiary};
  }
`;

export const PrimaryButton = styled(Button as React.FC<ButtonProps>)`
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
  &:active {
    background-color: ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.secundary} !important;
    border-color: ${(props) => props.theme.secundary};
  }
  &:focus-visible {
    background-color: ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.secundary} !important;
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

  &:active {
    background-color: ${(props) => props.theme.secundary} !important;
    border: 1px solid ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.primary} !important;
  }

  &:focus-visible {
    background-color: ${(props) => props.theme.secundary} !important;
    border: 1px solid ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.primary} !important;
  }
`;

export default GlobalStyle;
