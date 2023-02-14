import { useRouter } from "next/router";
import * as S from "./LayoutHeader.styles";

interface ILayoutHeaderProps {
  MyWebs: {
    title: string;
    contents: string;
    page: string;
  }[];
}

export default function LayoutHeader(props: ILayoutHeaderProps): JSX.Element {
  const router = useRouter();

  const onclickLogo = () => {
    props.MyWebs.forEach((el) => {
      if (router.asPath.includes(el.page)) {
        router.push(el.page);
      }
    });
  };

  return (
    <S.Wrapper>
      <img src="/layout/CMK-Black-logo.svg" onClick={onclickLogo} />
      <div>
        <div>로그인</div>
        <div>회원가입</div>
      </div>
    </S.Wrapper>
  );
}
