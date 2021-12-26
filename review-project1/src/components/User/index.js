import React from "react";
import Button from "../Button";
import {
  UserContainer,
  UserWrap,
  UserForm,
  Label,
  UserInput,
  ButtonWrap,
} from "./UserElements";

const User = () => {
  return (
    <UserContainer>
      <UserWrap>
        <UserForm>
          <Label>username</Label>
          <UserInput />
          <Label>age (years)</Label>
          <UserInput />
          <ButtonWrap>
            <Button label="add user" />
          </ButtonWrap>
        </UserForm>
      </UserWrap>
    </UserContainer>
  );
};

export default User;
