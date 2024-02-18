import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BrazilFlag from "../../assets/BrazilFlag.svg";
import UKFlag from "../../assets/UnitedKingdomFlag.svg";
import { LanguageButton, StyledContainer } from "./styles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = React.useState(
    localStorage.getItem("i18nextLng") || "pt"
  );

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [i18n, currentLanguage]);

  const changeLanguage = (lng: string) => {
    localStorage.setItem("i18nextLng", lng);
    setCurrentLanguage(lng);
  };
  return (
    <StyledContainer>
      <LanguageButton
        onClick={() => changeLanguage(currentLanguage === "pt" ? "en" : "pt")}
      >
        <img src={currentLanguage === "pt" ? BrazilFlag : UKFlag} alt="Flag" />
      </LanguageButton>
    </StyledContainer>
  );
};

export default LanguageSwitcher;
