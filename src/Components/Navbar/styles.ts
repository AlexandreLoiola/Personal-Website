import { secundaryButton } from "../../Styles/GlobalStyles";
import LogoImage from "../../assets/AlexandreLoiola-logo.jpg";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export const StyledLogo = styled.img.attrs({
  src: LogoImage,
})`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;
export const StyledButton = styled(secundaryButton)`
  width: 95px;
  padding: 10px;
  font-size: 18px;
  align-self: center;
`;

export const StyledNavbar = styled(Navbar)`
  background-color: transparent !important;
  margin-top: -10px;
  padding: 0;
`;

export const StyledItemMenu = styled(Nav.Link)`
  font-size: 20px;
  margin-right: 0.8em;
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
  font-size: 20px;

  &:hover {
    color: ${(props) => props.theme.tertiary};
    text-decoration: underline;
  }
`;
