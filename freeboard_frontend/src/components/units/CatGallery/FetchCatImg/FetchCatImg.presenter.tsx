import * as S from "./FetchCatImg.styles";

export default function FetchCatImgUI(props): JSX.Element {
  return (
    <S.Container>
      <S.CategoryWrapper>{props.categoryList ? props.categoryList.map((el) => <S.Category>{el.value}</S.Category>) : <></>}</S.CategoryWrapper>

      <div></div>
    </S.Container>
  );
}
