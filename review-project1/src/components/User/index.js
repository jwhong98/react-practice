import React from "react";
import {
  UserContainer,
  UserWrap,
  UserForm,
  Label,
  UserInput,
  Button,
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
          <Button>add user</Button>
        </UserForm>
      </UserWrap>
    </UserContainer>
  );
};

export default User;
