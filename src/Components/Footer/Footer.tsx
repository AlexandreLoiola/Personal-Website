import React from "react";
import { StledContainer, StyledSpan } from "./styles";
import { useTranslation } from "react-i18next";

interface IProps {
  style?: React.CSSProperties;
}

const Footer: React.FC<IProps> = ({ style }) => {
  const { t } = useTranslation();
  return (
    <StledContainer style={style}>
      <StyledSpan>
        {t("Developed by")}{" "}
        <a href="https://alexandreloiola.galatus.com.br/">Alexandre Loiola</a>
      </StyledSpan>
    </StledContainer>
  );
};
export default Footer;
