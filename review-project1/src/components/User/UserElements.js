import styled from "styled-components";

export const UserContainer = styled.div`
  width: 800px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const UserWrap = styled.div``;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 1rem;
  text-transform: capitalize;
`;

export const UserInput = styled.input`
  border: 1px solid lightgray;
`;

export const ButtonWrap = styled.div`
  align-self: flex-start;
`;
