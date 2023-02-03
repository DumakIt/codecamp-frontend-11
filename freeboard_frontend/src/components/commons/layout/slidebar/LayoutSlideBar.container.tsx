import { useRouter } from "next/router";
import * as S from "./LayoutSlideBar.styles";

export default function LayoutSlideBar(): JSX.Element {
  const router = useRouter();
  const MyWebs = [
    { title: "자유게시판", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
    { title: "중고마켓", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
    { title: "마이페이지", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
  ];

  const onClickWebsWrapper = (event) => {
    router.push(event.target.id);
  };

  return (
    <S.SlideBarCon111tainer>
      <S.SlideBarContainer>
        {MyWebs.map((el) => (
          <S.MyWebsWrapper id={el.page} key={el.title} onClick={onClickWebsWrapper}>
            <S.MyWebsImg></S.MyWebsImg>
            <div>
              <S.MyWebsTitle>{el.title}</S.MyWebsTitle>
              <S.MyWebsContents>{el.contents}</S.MyWebsContents>
            </div>
          </S.MyWebsWrapper>
        ))}
      </S.SlideBarContainer>
      <S.SlideBarHover>dsadsa</S.SlideBarHover>
    </S.SlideBarCon111tainer>
  );
}
