import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconDiv, StyledIcon, IconsContainer } from "./styles";

const Social: React.FC = () => {
  return (
    <IconsContainer>
      <StyledIcon href="https://github.com/AlexandreLoiola" target="_blank">
        <IconDiv color="#333">
          <FaGithub />
        </IconDiv>
      </StyledIcon>
      <StyledIcon
        href="https://www.instagram.com/_alexandre_loiola_"
        target="_blank"
      >
        <IconDiv color="#C13584">
          <FaInstagram />
        </IconDiv>
      </StyledIcon>
      <StyledIcon
        href="https://www.linkedin.com/in/AlexandreLoiola-backend/"
        target="_blank"
      >
        <IconDiv color="#0077B5">
          <FaLinkedin />
        </IconDiv>
      </StyledIcon>
    </IconsContainer>
  );
};

export default Social;
