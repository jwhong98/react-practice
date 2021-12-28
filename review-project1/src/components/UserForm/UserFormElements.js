import styled from "styled-components";

export const UserFormContainer = styled.form`
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

  &:focus {
    outline: 1px solid purple;
  }
`;

export const ButtonWrap = styled.div`
  align-self: flex-start;
`;
