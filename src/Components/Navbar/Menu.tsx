import { Offcanvas, Container, Navbar, Nav, Row } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import {
  StyledLogo,
  StyledButton,
  StyledNavbar,
  StyledItemMenu,
  StyledOffcanvas,
  StyledNavLink,
  StyledOffcanvasHeader,
  StyledMobileButton,
} from "./styles";
import SocialMobile from "../Social/SocialMobile";
import briefEn from "../../assets/Alexandre_Loiola_CV.pdf";
import briefPt from "../../assets/CV_Alexadre_Loiola.pdf";
import { useDeviceType } from "../../Styles/DeviceType/useDeviceType";

function Menu() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBriefClick = () => {
    const currentLanguage = i18n.language;

    if (currentLanguage === "pt") {
      window.open(briefPt);
    } else {
      window.open(briefEn);
    }
  };

  return (
    <StyledNavbar expand="xl" className="bg-body-tertiary">
      <Container fluid="md">
        <Row>
          <Navbar.Brand href="/" style={{ width: "auto" }}>
            <StyledLogo />
          </Navbar.Brand>
          <LanguageSwitcher />
        </Row>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleShow}
          className="d-md-none"
        />
        {useDeviceType() === "desktop" && (
          <Row>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <StyledItemMenu href="/">{t("About")}</StyledItemMenu>
                <StyledItemMenu href="/portfolio">
                  {t("Portfolio")}
                </StyledItemMenu>
                <StyledItemMenu href="/contact">{t("Contact")}</StyledItemMenu>
                <StyledButton onClick={handleBriefClick}>
                  {t("Brief")}
                </StyledButton>
              </Nav>
            </Navbar.Collapse>
          </Row>
        )}
      </Container>
      <StyledOffcanvas show={show} onHide={handleClose} placement="end">
        <StyledOffcanvasHeader closeButton>
          <StyledLogo />
        </StyledOffcanvasHeader>
        <Offcanvas.Body>
          <Nav className="me-auto">
            <StyledNavLink href="/">{t("About")}</StyledNavLink>
            <StyledNavLink href="/portfolio">{t("Portfolio")}</StyledNavLink>
            <StyledNavLink href="/contact">{t("Contact")}</StyledNavLink>
            <StyledMobileButton onClick={handleBriefClick}>
              {t("Brief")}
            </StyledMobileButton>
            <SocialMobile />
          </Nav>
        </Offcanvas.Body>
      </StyledOffcanvas>
    </StyledNavbar>
  );
}
export default Menu;
