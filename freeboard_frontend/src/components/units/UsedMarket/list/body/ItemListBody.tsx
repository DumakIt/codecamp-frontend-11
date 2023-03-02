import InfiniteScroll from "react-infinite-scroller";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import * as S from "./ItemListBodyStyles";
import { v4 as uuidv4 } from "uuid";

interface IListBodyProps {
  data?: Pick<IQuery, "fetchUseditems">;
  FetchMore: () => void;
  keyword: string;
}

export default function ListBody(props: IListBodyProps): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  console.log(props.data?.fetchUseditems, "여기");

  return (
    <div>
      <InfiniteScroll loadMore={props.FetchMore} hasMore={true}>
        <S.Container>
          {props.data?.fetchUseditems.map((el) => (
            <S.ContentsWrapper onClick={onClickMovePage(`/usedMarket/${el._id}`)} key={uuidv4()}>
              <S.ImgWrapper>
                <img src={el.images?.[0] ? `https://storage.googleapis.com/${el.images[0]}` : "/images/usedItemDefault.png"} />
              </S.ImgWrapper>
              <div>
                <S.ContentsTitle>
                  {el.name
                    .replaceAll(props.keyword, `*%@!&@${props.keyword}*%@!&@`)
                    .split("*%@!&@")
                    .map((ql) => (
                      <S.ContentsTitleSpan key={uuidv4()} isKeyword={ql === props.keyword ? true : false}>
                        {ql}
                      </S.ContentsTitleSpan>
                    ))}
                </S.ContentsTitle>
                <S.ContentsSeller>{el.seller?.name}</S.ContentsSeller>
                <S.ContentsSeller>{el.createdAt}</S.ContentsSeller>
              </div>
            </S.ContentsWrapper>
          )) ?? <div></div>}
        </S.Container>
      </InfiniteScroll>
    </div>
  );
}
