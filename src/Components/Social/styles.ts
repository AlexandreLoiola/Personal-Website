import styled from "styled-components";

export const IconDiv = styled.div`
  background: ${(props) => props.color};
  color: white;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0;
  border-radius: 10px 0px 0px 10px;
`;

export const StyledIcon = styled.a`
  font-size: 30px;
`;

export const IconsContainer = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
