import * as S from "./SignUp.styles";

export default function SignUp(): JSX.Element {
  return (
    <S.LoginContainer>
      <S.UserInput type="text" placeholder="이메일을 입력해 주세요" />
      <S.UserInput type="password" placeholder="비밀번호를 입력해 주세요" />
      <S.UserInput type="password" placeholder="비밀번호를 확인해 주세요" />
      <S.UserInput type="text" placeholder="닉네임을 입력해 주세요" />
      <S.SignUpBtn>회원가입</S.SignUpBtn>
    </S.LoginContainer>
  );
}
