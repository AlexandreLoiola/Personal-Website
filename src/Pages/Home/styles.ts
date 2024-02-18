import styled from "styled-components";
import { PrimaryButton, secundaryButton } from "../../Styles/GlobalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  margin-top: 10vh;
`;

export const StyledOverLine = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 1vw;
  color: ${(props) => props.theme.tertiary};
  font-size: 22px;
  text-align: left;
`;

export const StyledTitleName = styled.h1`
  font-family: Montserrat;
  font-size: 78px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  color: ${(props) => props.theme.tertiary};
  font-family: Montserrat;
  text-align: left;
`;

export const StyledSubTitleName = styled.span`
  font-family: Mada;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${(props) => props.theme.secundary};
`;

export const StyledSpan = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 20px 0;
  max-width: 44vw;
  text-align: justify;
  color: ${(props) => props.theme.tertiary};
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  width: 150px;
`;

export const StyledSecundaryButton = styled(secundaryButton)`
  width: 150px;
`;

export const StyledContainerButton = styled.div`
  display: flex;
  columns: row;
  gap: 25px;
  margin: 25px 0;
`;
