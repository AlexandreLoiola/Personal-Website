import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const MobileIconDiv = styled.div`
  background: ${(props) => props.color};
  color: ${(props) => props.theme.primary};
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-top: 180px;
  border-radius: 100px;
`;

const MobileStyledIcon = styled.a`
  font-size: 30px;
`;

const MobileIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100px;
  overflow: hidden;
`;

const SocialMobile: React.FC = () => {
  return (
    <MobileIconsContainer>
      <MobileStyledIcon href="https://github.com/AlexandreLoiola">
        <MobileIconDiv color="#333">
          <FaGithub />
        </MobileIconDiv>
      </MobileStyledIcon>
      <MobileStyledIcon href="https://www.instagram.com/_alexandre_loiola_">
        <MobileIconDiv color="#C13584">
          <FaInstagram />
        </MobileIconDiv>
      </MobileStyledIcon>
      <MobileStyledIcon href="https://www.linkedin.com/in/AlexandreLoiola-backend/">
        <MobileIconDiv color="#0077B5">
          <FaLinkedin />
        </MobileIconDiv>
      </MobileStyledIcon>
    </MobileIconsContainer>
  );
};

export default SocialMobile;
