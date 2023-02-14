import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import * as S from "./Login.styles";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  const onChangeInputs = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: { ...inputs },
      });

      if (result.data?.loginUser === undefined)
        return Modal.error({
          title: "오류가 발생했습니다",
          content: "잠시후 다시 시도해 주세요.",
        });

      const accessToken = result.data?.loginUser.accessToken;

      setAccessToken(accessToken);

      localStorage.setItem("accessToken", accessToken);
      router.push("/23/hoc/main");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "확인후 다시 시도해 주세요.",
        });
    }
  };

  return (
    <S.LoginContainer>
      <S.UserInput type="text" placeholder="이메일을 입력해 주세요" onChange={onChangeInputs("email")} />
      <S.UserInput type="password" placeholder="비밀번호를 입력해 주세요" onChange={onChangeInputs("password")} />
      <S.ForgetPassword>비밀번호를 잊으셨나요?</S.ForgetPassword>
      <S.LoginBtn onClick={onClickLogin}>로그인</S.LoginBtn>
      <S.SignUp>앗!! 아직 우리의 회원이 아니신가요?</S.SignUp>
    </S.LoginContainer>
  );
}
