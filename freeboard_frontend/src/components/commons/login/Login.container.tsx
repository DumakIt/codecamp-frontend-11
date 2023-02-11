import * as S from "./Login.styles";

export default function Login(): JSX.Element {
  return (
    <S.LoginContainer>
      <S.UserInput type="text" placeholder="이메일을 입력해 주세요" />
      <S.UserInput type="password" placeholder="비밀번호를 입력해 주세요" />
      <S.ForgetPassword>비밀번호를 잊으셨나요?</S.ForgetPassword>
      <S.LoginBtn>로그인</S.LoginBtn>
      <S.SignUp>앗!! 아직 우리의 회원이 아니신가요?</S.SignUp>
    </S.LoginContainer>
  );
}
