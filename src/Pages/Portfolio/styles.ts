import styled from "styled-components";

interface IPostProps {
  $imageurl?: string;
  $title?: string;
}

export const StyledPost = styled.div<IPostProps>`
  background-image: ${(props) =>
    props.$imageurl ? `url(${props.$imageurl})` : "none"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.theme.deviceType === "mobile" ? "320px" : "400px"};
  height: ${(props) =>
    props.theme.deviceType === "mobile" ? "180px" : "225px"};
  margin: ${(props) =>
    props.theme.deviceType === "mobile" ? "50px 0" : "50px"};
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 10px;
  transition: all 0.3s ease 0s;
  background-position: center center;
  cursor: pointer;

  &::before {
    content: ${(props) => (props.$title ? `"${props.$title}"` : '"Novo Post"')};
    margin: auto;
    margin-top: ${(props) =>
      props.theme.deviceType === "mobile" ? "240px" : "280px"};
    font-size: ${(props) =>
      props.theme.deviceType === "mobile" ? "16px" : "20px"};
    font-weight: 500;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0vh;
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

export const StyledCategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: ${(props) => (props.theme.deviceType === "mobile" ? "100%" : "80%")};
  margin-top: 2vh;
`;

export const StyledTagCategory = styled.div`
  width: auto;
  height: 28px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${(props) => props.theme.secundary};
  margin: ${(props) =>
    props.theme.deviceType === "mobile" ? "8px 10px" : "10px 22px"};
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease 0s;
  color: ${(props) => props.theme.primary};
  font-size: ${(props) =>
    props.theme.deviceType === "mobile" ? "16px" : "18px"};
  font-weight: 500;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
