import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {
  StyledLogo,
  StyledButton,
  StyledNavbar,
  StyledItemMenu,
} from "./styles";
import { Navbar, Row } from "react-bootstrap";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  return (
    <StyledNavbar expand="xl" className="bg-body-tertiary">
      <Container fluid="md">
        <Row>
          <Navbar.Brand href="/" style={{ width: "auto" }}>
            <StyledLogo />
          </Navbar.Brand>
          <LanguageSwitcher />
        </Row>
        <Row>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <StyledItemMenu href="/">{t("About")}</StyledItemMenu>
              <StyledItemMenu href="/portfolio">
                {t("Portfolio")}
              </StyledItemMenu>
              <StyledItemMenu href="/contact">{t("Contact")}</StyledItemMenu>
              <StyledButton>{t("Brief")}</StyledButton>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </StyledNavbar>
  );
}

export default Menu;
