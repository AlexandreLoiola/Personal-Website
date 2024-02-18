import React from "react";
import {
  Container,
  StyledContainerButton,
  StyledOverLine,
  StyledPrimaryButton,
  StyledSecundaryButton,
  StyledSpan,
  StyledSubTitleName,
  StyledTitleName,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      <StyledOverLine>👋{t("Hello i am")}</StyledOverLine>
      <StyledTitleName>{t("Alexandre Loiola")}</StyledTitleName>
      <StyledSubTitleName>
        {t("Systems Analyst - Fullstack Developer")}
      </StyledSubTitleName>
      <StyledSpan>
        {"\u00A0\u00A0\u00A0"}
        {t(
          "I work as a Fullstack Developer (Backend-Heavy), with a degree in Systems Analysis and Development from the Federal Institute of Sergipe - IFS. I am a dedicated professional and passionate about technology, always in search of new challenges."
        )}
      </StyledSpan>
      <StyledContainerButton>
        <StyledPrimaryButton onClick={() => navigate("/portfolio")}>
          {t("My Projects")}
        </StyledPrimaryButton>
        <StyledSecundaryButton onClick={() => navigate("/contact")}>
          {t("Get in Touch")}
        </StyledSecundaryButton>
      </StyledContainerButton>
      <Footer />
    </Container>
  );
};
export default Home;