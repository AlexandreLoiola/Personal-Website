import styled from "styled-components";
import { Form } from "react-bootstrap";
import { PrimaryButton } from "../../Styles/GlobalStyles";

export const StyledFormGroup = styled(Form.Group)`
  width: 100%;
  margin: 0;
`;

export const StyledFormLabel = styled(Form.Label)`
  font-size: 1.2rem;
  color: #333;
`;

export const StyledFormControl = styled(Form.Control)`
  margin: 0;
  font-size: 1rem;
  background-color: ${(props) => props.theme.primary};
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.tertiary};
  width: 100%;
  color: ${(props) => props.theme.tertiary};

  &::placeholder {
    color: ${(props) => props.theme.tertiary};
    font-weight: 200;
  }

  &:focus {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.tertiary};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

export const StyledFormButton = styled(PrimaryButton)`
  width: 100% !important;
  margin-top: 2vh;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 6px 0px;
`;
