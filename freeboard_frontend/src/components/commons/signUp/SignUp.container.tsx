import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import * as S from "./SignUp.styles";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;

export default function SignUp(): JSX.Element {
  const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(CREATE_USER);
  const [checkPassword, setCheckPassword] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChangeInputs = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value);
  };

  const onClickSignUp = async () => {
    try {
      if (checkPassword !== inputs.password)
        return Modal.error({
          title: "비밀번호와 비밀번호 확인이 일치하지 않습니다",
          content: "확인후 다시 입력해 주세요",
        });

      const result = await createUser({
        variables: { createUserInput: { ...inputs } },
      });

      Modal.success({
        content: `${result.data?.createUser.name}님 회원이 되신걸 환영합니다~`,
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "확인후 다시 입력해 주세요",
        });
    }
  };

  return (
    <S.LoginContainer>
      <S.UserInput type="text" placeholder="이메일을 입력해 주세요" onChange={onChangeInputs("email")} />
      <S.UserInput type="password" placeholder="비밀번호를 입력해 주세요" onChange={onChangeInputs("password")} />
      <S.UserInput type="password" placeholder="비밀번호를 확인해 주세요" onChange={onChangeCheckPassword} />
      <S.UserInput type="text" placeholder="닉네임을 입력해 주세요" onChange={onChangeInputs("name")} />
      <S.SignUpBtn onClick={onClickSignUp}>회원가입</S.SignUpBtn>
    </S.LoginContainer>
  );
}
