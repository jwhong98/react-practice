import React from "react";
import {
  ErrorContainer,
  ErrorHeader,
  ErrorTitle,
  ErrorBody,
  ErrorMessage,
  ErrorButton,
} from "./ErrorModalElements";

const ErrorModal = () => {
  return (
    <ErrorContainer>
      <ErrorHeader>
        <ErrorTitle>invalid input</ErrorTitle>
      </ErrorHeader>
      <ErrorBody>
        <ErrorMessage></ErrorMessage>
        <ErrorButton>Okay</ErrorButton>
      </ErrorBody>
    </ErrorContainer>
  );
};

export default ErrorModal;
