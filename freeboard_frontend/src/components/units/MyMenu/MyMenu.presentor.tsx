import InfiniteScroll from "react-infinite-scroller";
import * as S from "./MyMenu.styles";
import { MouseEvent } from "react";

interface IMyMenuUIProps {
  getImg: () => void;
  onClickCat: (event: MouseEvent<HTMLImageElement>) => Promise<void>;
  onClickFetch: () => void;
}

export default function MyMenuUI(props: IMyMenuUIProps) {
  return (
    <S.Container>
      {/* <button onClick={props.getImg}>클릭</button>
      <button onClick={props.onClickFetch}>조회</button> */}
      <InfiniteScroll loadMore={props.getImg} hasMore={true}>
        <S.ImgGrid>
          {props.catImgResult.map((el) => (
            <S.ImgContainer key={el.id}>
              {el.map((ql) => (
                <S.ImgWrapper>
                  <S.Img key={ql.id} id={ql.url} src={ql.url} onClick={props.onClickCat} />
                  <div>+</div>
                </S.ImgWrapper>
              ))}
            </S.ImgContainer>
          ))}
        </S.ImgGrid>
      </InfiniteScroll>
      <S.navBar>dddd</S.navBar>
    </S.Container>
  );
}
