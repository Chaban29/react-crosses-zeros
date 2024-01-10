import React from "react";
import styled from "styled-components";

const CustonButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  background: rgb(223, 149, 12);
  color: #fff;
  border: none;
  outline: none;
  margin-top: 30px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;

export default function Button({ children, ...props }) {
  return <CustonButton {...props}>{children}</CustonButton>;
}
