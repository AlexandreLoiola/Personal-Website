import styled from "styled-components";

export const StledContainer = styled.div`
  display: flex;
  margin-top: ${(props) =>
    props.theme.deviceType === "mobile" ? "26px" : "10px"};
  bottom: 3vh;
  left: ${(props) => (props.theme.deviceType === "mobile" ? "16vw" : "42vw")};
  position: ${(props) =>
    props.theme.deviceType === "mobile" ? "unset !important" : "fixed"};
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.tertiary};
  font-family: Mada;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
