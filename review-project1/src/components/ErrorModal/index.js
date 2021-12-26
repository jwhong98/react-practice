import React from "react";
import Button from "../Button";
import {
  ErrorContainer,
  ErrorHeader,
  ErrorTitle,
  ErrorBody,
  ErrorMessage,
  ErrorBtnWrap,
} from "./ErrorModalElements";

const ErrorModal = () => {
  return (
    <ErrorContainer>
      <ErrorHeader>
        <ErrorTitle>invalid input</ErrorTitle>
      </ErrorHeader>
      <ErrorBody>
        <ErrorMessage></ErrorMessage>
        <ErrorBtnWrap>
          <Button lebel="okay" />
        </ErrorBtnWrap>
      </ErrorBody>
    </ErrorContainer>
  );
};

export default ErrorModal;
