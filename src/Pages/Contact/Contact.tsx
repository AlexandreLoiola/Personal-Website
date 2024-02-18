import React, { useState } from "react";
import {
  StyledItemList,
  StyledBulletedList,
  StyledContainer,
  StyledSubTitle,
  StyledTitleName,
  StyledLeftContainer,
  StyledRightContainer,
  StyledSuccessServerResponse,
  StyledSErrorServerResponse,
} from "./styles";
import { useTranslation } from "react-i18next";
import TextForm from "../../Components/forms/TextInput";
import { FormContainer, StyledFormButton } from "../../Components/forms/styles";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";

interface IForm {
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [successServerMessage, setSuccessServerMessage] = useState<string>("");
  const [errorServerMessage, setErrorServerMessage] = useState<string>("");

  const handleSubmit = async () => {
    setSuccessServerMessage("");
    setErrorServerMessage("");
    if (!email || !subject || !message) {
      setErrorServerMessage("Todos os campos devem ser preenchidos.");
      return;
    }
    const formData: IForm = {
      email,
      subject,
      message,
    };
    try {
      await axios
        .post(
          "https://alexandreloiolabackend.galatus.com.br/wp-json/contact/v1/send",
          formData
        )
        .then((response) => {
          console.log(response);
          setSuccessServerMessage(response.data.message);
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((response) => {
          console.error(response);
          setErrorServerMessage(response.data.message);
        });
    } catch (error) {
      console.error("Houve um erro ao enviar a mensagem", error);
    }
  };

  return (
    <StyledContainer>
      <StyledLeftContainer>
        <StyledTitleName>{t("Contact")}</StyledTitleName>
        <StyledSubTitle>
          {t("Let's talk! Feel free to get in touch.")}
        </StyledSubTitle>
        <StyledBulletedList>
          <StyledItemList>alexandre.loiola.741@gmail.com</StyledItemList>
          <StyledItemList>@AlexandreLoiola</StyledItemList>
          <StyledItemList>alexandreloiola-backend</StyledItemList>
          <StyledItemList>github.com/AlexandreLoiola</StyledItemList>
        </StyledBulletedList>
      </StyledLeftContainer>
      <StyledRightContainer>
        <FormContainer onSubmit={handleSubmit}>
          <div>
            <StyledSuccessServerResponse>
              {successServerMessage}
            </StyledSuccessServerResponse>
          </div>
          <div>
            <StyledSErrorServerResponse>
              {errorServerMessage}
            </StyledSErrorServerResponse>
          </div>
          <TextForm
            label={""}
            placeHolder={t("Your E-mail")}
            message={""}
            value={email}
            onInputChange={setEmail}
          />
          <TextForm
            label={""}
            placeHolder={t("Subject")}
            message={""}
            value={subject}
            onInputChange={setSubject}
          />
          <TextForm
            label={""}
            placeHolder={t("Message")}
            message={""}
            value={message}
            style={{ paddingBottom: "22vh" }}
            onInputChange={setMessage}
          />
          <StyledFormButton type="submit" onClick={() => handleSubmit()}>
            {t("Send")}
          </StyledFormButton>
        </FormContainer>
      </StyledRightContainer>
      <Footer />
    </StyledContainer>
  );
};
export default Contact;
