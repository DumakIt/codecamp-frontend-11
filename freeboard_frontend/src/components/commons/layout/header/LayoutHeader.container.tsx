import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import { useMutationLogoutUser } from "../../hooks/mutation/useMutationLogoutUser";
import { useQueryFetchUserLoggedIn } from "../../hooks/query/useQueryFetchUserLoggedIn";
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
  const { onClickMovePage } = useRouterMovePage();
  const [accessToken] = useRecoilState(accessTokenState);
  const { logoutUser } = useMutationLogoutUser();
  const { data } = useQueryFetchUserLoggedIn();

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

      {accessToken ? (
        <S.ProfileWrapper onClick={onClickMovePage("/usedMarket/myinfo")}>
          <img src={data?.fetchUserLoggedIn.picture ? `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}` : "/images/defaultUserIcon.svg"} />
          <div>{data?.fetchUserLoggedIn.name}</div>
          <div onClick={logoutUser}>로그아웃</div>
        </S.ProfileWrapper>
      ) : (
        <div>
          <div onClick={onClickMovePage("/usedMarket/login")}>로그인</div>
          <div onClick={onClickMovePage("/usedMarket/signup")}>회원가입</div>
        </div>
      )}
    </S.Wrapper>
  );
}
