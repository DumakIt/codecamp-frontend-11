import { Dispatch, MouseEvent, SetStateAction } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./LayoutSlideBar.styles";

interface ILayoutSlideBarProps {
  MyWebs: {
    title: string;
    contents: string;
    page: string;
  }[];
}

export default function LayoutSlideBar(props: ILayoutSlideBarProps): JSX.Element {
  const router = useRouter();

  const onClickWebsWrapper = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };

  const [isHover, setIsHover] = useState(false);

  const onMouseHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <S.SlideBarContainer isHover={isHover}>
      <div onMouseEnter={onMouseHover} onMouseLeave={onMouseHover}>
        <S.SlideBarWrapperBody>
          {props.MyWebs.map((el) => (
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
