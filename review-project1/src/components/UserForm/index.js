import React, { useState } from "react";
import {
  UserFormContainer,
  Label,
  UserInput,
  ButtonWrap,
} from "./UserFormElements";
import Button from "../Button";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      age: age,
    };
    props.onSaveUser(userData);
    setName("");
    setAge("");
  };
  return (
    <UserFormContainer onSubmit={submitHandler}>
      <Label>username</Label>
      <UserInput type="text" value={name} onChange={handleNameChange} />
      <Label>age (years)</Label>
      <UserInput type="number" value={age} onChange={handleAgeChange} />
      <ButtonWrap>
        <Button label="add user" type="submit" />
      </ButtonWrap>
    </UserFormContainer>
  );
};

export default UserForm;
