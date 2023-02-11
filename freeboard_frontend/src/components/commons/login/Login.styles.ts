import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  /* border: 1px solid red; */
  width: 20%;

  display: flex;
  flex-direction: column;
`;

export const UserInput = styled.input`
  padding: 15px;
  height: 50px;
  margin-bottom: 20px;
  border: none;
  background-color: #f2f2f2;
  font-size: 14px;
  outline: none;
`;

export const ForgetPassword = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #828282;
  align-self: flex-end;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  margin-bottom: 20px;
  height: 50px;
  background-color: rgb(68 140 255);
  color: white;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const SignUp = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #828282;
  align-self: flex-end;
  cursor: pointer;
`;
