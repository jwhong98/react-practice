import React, { useState } from "react";
import Card from "../Card";
import ErrorModal from "../ErrorModal";
import User from "../User";
import { PageContainer } from "./PageElements";

const Page = () => {
  const USERS = [];
  const [users, setUsers] = useState(USERS);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const addUser = (user) => {
    setUsers((prevUsers) => {
      console.log(user);
      return [...prevUsers, user];
    });
  };
  return (
    <PageContainer>
      <User onAddUser={addUser} toggle={toggle} />
      <Card users={users} />
    </PageContainer>
  );
};

export default Page;
