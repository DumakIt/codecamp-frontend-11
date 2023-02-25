import { IQuery } from "../../../../../commons/types/generated/types";
import KakaoMapDetail from "../../../../commons/kakaoMap/kakaoMapDetail";
import * as S from "./ItemDetailHeaderStyles";

interface IDetailBodyProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export default function DetailHeader(props: IDetailBodyProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <S.ImgMainWrapper>
          <img src={props.data?.fetchUseditem.images?.[0] ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}` : "/images/usedItemDefault.png"} />
        </S.ImgMainWrapper>
        <S.ImgSubWrapper>{props.data?.fetchUseditem.images?.map((el) => el && <img src={`https://storage.googleapis.com/${el}`} key={el} />)}</S.ImgSubWrapper>
      </S.ImgContainer>

      <S.DetailContainer>
        <h1>{props.data?.fetchUseditem.name}</h1>
        <div>{props.data?.fetchUseditem.price}원</div>
        <div>{props.data?.fetchUseditem.seller?.name}</div>
        <KakaoMapDetail address={props.data?.fetchUseditem?.useditemAddress} />
      </S.DetailContainer>
    </S.Wrapper>
  );
}
