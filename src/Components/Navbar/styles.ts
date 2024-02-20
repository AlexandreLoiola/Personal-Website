import { PrimaryButton, secundaryButton } from "../../Styles/GlobalStyles";
import LogoImage from "../../assets/AlexandreLoiola-logo.jpg";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Offcanvas } from "react-bootstrap";

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

export const StyledOffcanvas = styled(Offcanvas)`
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  --bs-offcanvas-width: 80%;
`;

export const StyledOffcanvasHeader = styled(Offcanvas.Header)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30vw;
`;

export const StyledNavLink = styled(StyledItemMenu)`
  display: flex;
  align-items: center;
  padding: 2vh 0;
  padding-left: 10vw;
  font-size: 24px;
  font-weight: 500;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-bottom: -1px;
`;

export const StyledMobileButton = styled(PrimaryButton)`
  width: 100%;
  margin: 2vh 0;
  font-size: 20px;
  padding: 26px 0px;
`;
