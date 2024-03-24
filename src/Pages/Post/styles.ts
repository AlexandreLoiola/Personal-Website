import { Breadcrumb, Carousel, Tabs, Tab } from "react-bootstrap";
import styled from "styled-components";
import { PrimaryButton } from "../../Styles/GlobalStyles";

export const StyledBreadcrumb = styled(Breadcrumb)`
  font-size: ${(props) =>
    props.theme.deviceType === "mobile" ? "13px" : "18px"};
  .breadcrumb-item.active,
  .breadcrumb-item.active::before {
    color: ${(props) => props.theme.tertiary};
  }
`;

export const StyledContainer = styled.div`
  padding-top: 6vh;
`;

export const StyledCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  padding: ${(props) =>
    props.theme.deviceType === "mobile" ? "40px 0 50px 0" : "0 120px "};

  .carousel-control-prev,
  .carousel-control-next {
    width: auto;
    margin: 0%;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 40px;
    height: 40px;
    filter: invert(35%) sepia(50%) saturate(150%) hue-rotate(210deg);
    margin: 0 30px;
  }

  .carousel-indicators button {
    background-color: #fff;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin-right: 5px;
    margin-left: 5px;
  }

  .carousel-indicators .active {
    background-color: ${(props) => props.theme.tertiary};
  }

  .carousel-item {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #000;
    align-self: center;
  }
`;

export const StyledButton = styled(PrimaryButton)`
  width: 100%;
  padding: 20px 20px;
  margin-top: 2vh;
`;

export const StyledContainerInformation = styled.div`
  display: ${(props) => (props.theme.deviceType === "mobile" ? "" : "flex")};
  flex-direction: row;
  align-content: center;
  align-items: flex-start;
  justify-content: ${(props) =>
    props.theme.deviceType === "mobile" ? "none" : "space-between"};
  flex-wrap: wrap;
  margin: ${(props) =>
    props.theme.deviceType === "mobile" ? "0px" : "0 0 4vh 0 "};
  padding: 0;
`;

export const StyledContainerAboutProject = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: ${(props) =>
    props.theme.deviceType === "mobile" ? "0" : "4vh 0 2vh 0"};
  padding-right: ${(props) =>
    props.theme.deviceType === "mobile" ? "0" : "100px"};
  align-items: flex-start;
`;

export const StyledTitle = styled.h1`
  font-size: ${(props) =>
    props.theme.deviceType === "mobile" ? "28px" : "48px"};
  font-weight: 600;
  color: ${(props) => props.theme.tertiary};
  text-align: center;
`;

export const StyledSubTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  color: ${(props) => props.theme.tertiary};
  margin-top: 4vh;
  font-family: Mada;
  padding-left: ${(props) =>
    props.theme.deviceType === "mobile" ? "0" : "28px"};
`;

export const StyledTitleDescription = styled.span`
  color: ${(props) => props.theme.secundary};
  font-size: 18px;
  font-weight: 500;
  padding-right: ${(props) =>
    props.theme.deviceType === "mobile" ? "0" : "40px"};
  display: flex;
  padding-left: ${(props) =>
    props.theme.deviceType === "mobile" ? "0" : "40px"};
  text-align: justify;
  width: ${(props) => (props.theme.deviceType === "mobile" ? "100%" : "80%")};
`;

export const StyledDescription = styled.span`
  color: ${(props) => props.theme.secundary};
  font-size: 18px;
  font-weight: 500;
  padding-right: ${(props) =>
    props.theme.deviceType === "mobile" ? "0" : "40px"};
  display: flex;
  padding-left: ${(props) =>
    props.theme.deviceType === "mobile" ? "0" : "40px"};
  text-align: justify;
  width: ${(props) => (props.theme.deviceType === "mobile" ? "100%" : "100%")};
`;

export const StyledTabs = styled(Tabs)`
  margin-top: 4vh;
  margin: 50px 80px 0 80px;

  .nav-link {
    color: ${(props) => props.theme.tertiary};
  }

  .nav-link.active {
    background-color: ${(props) => props.theme.tertiary};
    color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.tertiary};
    font-weight: 500;
  }
`;

export const StyledTab = styled(Tab)`
  color: #333;
  font-size: 1.2em;
  margin: 20px 80px;
  display: none;

  &.active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledLi = styled.li`
  color: ${(props) => props.theme.secundary};
  font-size: 22px;
  padding: 6px;
  padding-right: 100px;
  font-weight: 500;

  &::marker {
    color: ${(props) => props.theme.tertiary};
  }
`;

export const StyledButtonContainer = styled.div`
  margin-top: ${(props) =>
    props.theme.deviceType === "mobile" ? "10px" : "-50px"};
`;
