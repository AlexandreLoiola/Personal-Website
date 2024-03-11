import styled from "styled-components";
import { keyframes } from "styled-components";

export const StyledToggler = styled.div`
  width: 90px;
  height: 40px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.toggle};
  right: 0px;
  position: fixed;
  margin-right: 40px;
  top: 94%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

export const StyledTogglerMobile = styled.div`
  width: 90px;
  height: 40px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.toggle};

  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const StyledLightInput = styled.div`
  left: 60%;
  position: absolute;
  transition: all 0.3s linear 0s;
  background-color: ${(props) => props.theme.toggle};
  border-radius: 100px;
  height: 28px;
  width: 28px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const fadeInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledDarkInput = styled.div`
  left: 10%;
  background-color: ${(props) => props.theme.toggle};
  position: absolute;
  transition: all 0.3s linear 0s;
  border-radius: 100px;
  height: 28px;
  width: 28px;
  animation: ${fadeInFromRight} 0.5s ease-out;
`;
