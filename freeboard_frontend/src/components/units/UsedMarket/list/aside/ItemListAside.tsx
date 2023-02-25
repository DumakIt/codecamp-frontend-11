import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import * as S from "./ItemListAsideStyles";

interface IListAsideProps {
  viewedItems: string;
}

export default function ListAside(props: IListAsideProps): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  console.log(props.viewedItems);
  return (
    <S.Container>
      <div>오늘본 상품</div>
      {props.viewedItems &&
        props.viewedItems.map((el) => (
          <S.ContentsWrapper key={el.value?.id} onClick={onClickMovePage(`/usedMarket/${el.value?.id}`)}>
            <S.ContentsImgWrapper>
              <S.ContentsImg src={el.value?.image ? `https://storage.googleapis.com/${el.value.image}` : `/images/usedItemDefault.png`} />
            </S.ContentsImgWrapper>
            <div>{el.value.name}</div>
          </S.ContentsWrapper>
        ))}
    </S.Container>
  );
}
