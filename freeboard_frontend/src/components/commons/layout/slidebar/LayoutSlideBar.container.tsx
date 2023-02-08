import { Dispatch, MouseEvent, SetStateAction } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./LayoutSlideBar.styles";

interface ILayoutSlideBarProps {
  setLogoPath: Dispatch<SetStateAction<string>>;
}

export default function LayoutSlideBar(props: ILayoutSlideBarProps): JSX.Element {
  const router = useRouter();
  const MyWebs = [
    { title: "자유게시판", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
    { title: "마이메뉴", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/mymenu/" },
    { title: "중고마켓", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
    { title: "마이페이지", contents: "어떤 것들을 배웠고 어떤 기술을 사용했고 이런것을 느꼈다", page: "/boards/" },
  ];

  const onClickWebsWrapper = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
    props.setLogoPath(event.currentTarget.id);
  };

  const [isHover, setIsHover] = useState(false);

  const onMouseHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <S.SlideBarContainer isHover={isHover}>
      <div onMouseEnter={onMouseHover} onMouseLeave={onMouseHover}>
        <S.SlideBarWrapperBody>
          {MyWebs.map((el) => (
            <S.MyWebsWrapper id={el.page} key={el.title} onClick={onClickWebsWrapper}>
              <S.MyWebsImg></S.MyWebsImg>
              <div>
                <S.MyWebsTitle>{el.title}</S.MyWebsTitle>
                <S.MyWebsContents>{el.contents}</S.MyWebsContents>
              </div>
            </S.MyWebsWrapper>
          ))}
        </S.SlideBarWrapperBody>
        <S.SlideBarRight></S.SlideBarRight>
      </div>
    </S.SlideBarContainer>
  );
}
