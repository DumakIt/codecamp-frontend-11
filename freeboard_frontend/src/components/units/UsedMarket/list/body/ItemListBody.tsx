import InfiniteScroll from "react-infinite-scroller";
import { useFetchMoreUsedItems } from "../../../../commons/hooks/custom/useFetchMoreUsedItems";
import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import { useQueryFetchUsedItems } from "../../../../commons/hooks/query/useQueryFetchUseditems";
import * as S from "./ItemListBodyStyles";

export default function ListBody(): JSX.Element {
  const { data, FetchMore } = useQueryFetchUsedItems();
  const { onClickMovePage } = useRouterMovePage();

  return (
    <div>
      <InfiniteScroll loadMore={FetchMore} hasMore={true}>
        {data?.fetchUseditems.map((el) => (
          <S.ContentsWrapper onClick={onClickMovePage(`/usedMarket/${el._id}`)} key={el._id}>
            <S.ContentsTitle>{el._id}</S.ContentsTitle>
            <S.ContentsTitle>{el.name}</S.ContentsTitle>
            <S.ContentsTitle>{el.seller?.name}</S.ContentsTitle>
            <S.ContentsTitle>{el.createdAt}</S.ContentsTitle>
          </S.ContentsWrapper>
        )) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
