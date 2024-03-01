import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.theme.deviceType === "mobile" ? "column" : "row"};
  align-items: center;
  margin-top: 4vh;
`;

export const StyledRightContainer = styled.div`
  width: ${(props) => (props.theme.deviceType === "mobile" ? "100%" : "45%")};
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.theme.deviceType === "mobile" ? "100%" : "55%")};
`;

export const StyledTitleName = styled.h1`
  font-family: Montserrat;
  font-size: 58px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  color: ${(props) => props.theme.tertiary};
  font-family: Montserrat;
  text-align: left;
`;

export const StyledSubTitle = styled.span`
  color: ${(props) => props.theme.secundary};
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledBulletedList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const StyledItemList = styled.li`
  color: ${(props) => props.theme.tertiary};
  font-family: Mada;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 10px 0px;
`;