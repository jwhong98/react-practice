import React, { useState } from "react";
import UserForm from "../UserForm";
import { UserContainer, UserWrap } from "./UserElements";

const User = (props) => {
  const saveUser = (enteredData) => {
    const newData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddUser(newData);
  };

  return (
    <UserContainer>
      <UserWrap>
        <UserForm onSaveUser={saveUser} />
      </UserWrap>
    </UserContainer>
  );
};

export default User;
