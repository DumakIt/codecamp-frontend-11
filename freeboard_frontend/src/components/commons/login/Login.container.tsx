import { useForm } from "react-hook-form";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import { useMutationLoginUser } from "../hooks/mutation/useMutationLoginUser";
import * as S from "./Login.styles";

export default function Login(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const { loginUser } = useMutationLoginUser();

  return (
    <S.LoginContainer onSubmit={handleSubmit(loginUser)}>
      <S.UserInput type="text" placeholder="이메일을 입력해 주세요" {...register("email")} />
      <S.UserInput type="password" placeholder="비밀번호를 입력해 주세요" {...register("password")} />
      <S.ForgetPassword>비밀번호를 잊으셨나요?</S.ForgetPassword>
      <S.LoginBtn>로그인</S.LoginBtn>
      <S.SignUp>앗!! 아직 우리의 회원이 아니신가요?</S.SignUp>
    </S.LoginContainer>
  );
}
