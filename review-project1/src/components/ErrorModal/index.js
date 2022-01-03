import React from "react";
import Button from "../Button";
import {
  ErrorContainer,
  ErrorWrap,
  ErrorHeader,
  ErrorTitle,
  ErrorBody,
  ErrorMessage,
  ErrorBtnWrap,
} from "./ErrorModalElements";

const ErrorModal = ({isOpen, toggle}) => {
  return (
    <ErrorContainer isOpen={isOpen} onClick={toggle}>
      <ErrorWrap>
        <ErrorHeader>
          <ErrorTitle>invalid input</ErrorTitle>
        </ErrorHeader>
        <ErrorBody>
          <ErrorMessage></ErrorMessage>
          <ErrorBtnWrap>
            <Button label="okay" />
          </ErrorBtnWrap>
        </ErrorBody>
      </ErrorWrap>
    </ErrorContainer>
  );
};

export default ErrorModal;
