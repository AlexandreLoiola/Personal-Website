import React, { useState } from "react";
import {
  StyledItemList,
  StyledBulletedList,
  StyledContainer,
  StyledSubTitle,
  StyledTitleName,
  StyledLeftContainer,
  StyledRightContainer,
} from "./styles";
import { useTranslation } from "react-i18next";
import TextForm from "../../Components/forms/TextInput";
import { FormContainer, StyledFormButton } from "../../Components/forms/styles";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import { Button, Modal } from "react-bootstrap";

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
  const [serverMessage, setServerMessage] = useState<string>("");
  const [modalShow, setModalShow] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async () => {
    setServerMessage("");
    if (!email || !subject || !message) {
      setServerMessage("Por favor, preenchea todos os campos.");
      setModalShow(true);
      return;
    }
    if (!emailRegex.test(email)) {
      setServerMessage("Por favor, insira um e-mail válido.");
      setModalShow(true);
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
          setEmail("");
          setSubject("");
          setMessage("");
          setServerMessage(
            "E-mail enviado com sucesso! Em breve, enviarei uma resposta para sua mensagem."
          );
          setModalShow(true);
        })
        .catch((response) => {
          console.error(response);
          setServerMessage(response.data.message);
          setModalShow(true);
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
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Mensagem do Servidor
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{serverMessage && <p>{serverMessage}</p>}</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </StyledRightContainer>
      <Footer />
    </StyledContainer>
  );
};
export default Contact;
