import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  StyledBreadcrumb,
  StyledContainer,
  StyledCarousel,
  StyledButton,
  StyledContainerInformation,
  StyledTitle,
  StyledDescription,
  StyledSubTitle,
  StyledTabs,
  StyledTab,
  StyledLi,
  StyledButtonContainer,
  StyledTitleDescription,
} from "./styles";
import Footer from "../../Components/Footer/Footer";

const Post: React.FC = () => {
  const location = useLocation();
  const postTitle = location.state.title;
  const postShortDescription = location.state.short_description;
  const postLongDescription = location.state.long_description;
  const postGaleryImages = location.state.galery_images.split(", ");
  const postLinkSourceCode = location.state.link_source_code;
  const postLinkDocumentation = location.state.link_documentation;
  const postPresentationVideo = location.state.presentation_video;
  const postTechnicalSheet = location.state.technical_sheet.split(", ");

  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledBreadcrumb>
        <Breadcrumb.Item href="/portfolio">{t("Portfolio")}</Breadcrumb.Item>
        <Breadcrumb.Item active>{t(postTitle)}</Breadcrumb.Item>
      </StyledBreadcrumb>
      <StyledContainerInformation>
        <StyledTitle>{t(postTitle)}</StyledTitle>
        <StyledTitleDescription>
          {"\u00A0\u00A0\u00A0"}
          {t(postShortDescription)}
        </StyledTitleDescription>
        <StyledButtonContainer>
          <StyledButton onClick={() => window.open(postLinkSourceCode)}>
            {t("View Source Code")}
          </StyledButton>
          <StyledButton onClick={() => window.open(postLinkDocumentation)}>
            {t("View Documentation")}
          </StyledButton>
        </StyledButtonContainer>
      </StyledContainerInformation>
      <div style={{}}>
        <StyledCarousel>
          {postPresentationVideo && (
            <Carousel.Item>
              <video className="d-block w-100" controls>
                <source src={postPresentationVideo} type="video/mp4" />
                {t("Your browser does not support the video element.")}
              </video>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          )}
          {postGaleryImages.map((imageUrl: string, index: number) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={imageUrl}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </StyledCarousel>
      </div>
      <StyledTabs defaultActiveKey="description" id="uncontrolled-tab-example">
        <StyledTab eventKey="description" title={t("About Project")}>
          <StyledSubTitle>{t("About Project")}</StyledSubTitle>
          <StyledDescription>
            {"\u00A0\u00A0\u00A0"}
            {t(postLongDescription)}
          </StyledDescription>
        </StyledTab>
        <StyledTab eventKey="technicalSheet" title={t("Technical Sheet")}>
          <StyledSubTitle>{t("Technical Sheet")}</StyledSubTitle>
          <ul>
            {postTechnicalSheet.map((item: string, index: number) => (
              <StyledLi key={index}>{t(item)}</StyledLi>
            ))}
          </ul>
        </StyledTab>
        <StyledTab eventKey="documentation" title={t("Documentation")}>
          <StyledSubTitle>{t("Documentation")}</StyledSubTitle>
          <StyledButton
            onClick={() => {
              window.open(postLinkDocumentation);
            }}
          >
            {t("View Documentation")}
          </StyledButton>
          <StyledButton onClick={() => window.open(postLinkSourceCode)}>
            {t("View Source Code")}
          </StyledButton>
        </StyledTab>
      </StyledTabs>
      <Footer style={{ justifyContent: "Center", position: "unset" }} />
    </StyledContainer>
  );
};

export default Post;
