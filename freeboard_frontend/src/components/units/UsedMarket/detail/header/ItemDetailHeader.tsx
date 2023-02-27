import { HeartFilled } from "@ant-design/icons";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import { useMutationToggleUsedItemPick } from "../../../../commons/hooks/mutation/useMutationToggleUsedItemPick";
import KakaoMapDetail from "../../../../commons/kakaoMap/kakaoMapDetail";
import * as S from "./ItemDetailHeaderStyles";

interface IDetailBodyProps {
  data?: Pick<IQuery, "fetchUseditem">;
  id: string;
}

export default function DetailHeader(props: IDetailBodyProps): JSX.Element {
  const { toggleUseditemPick } = useMutationToggleUsedItemPick();
  const [isToggle, changeIsToggle] = useSetIsToggle();
  console.log(props.data?.fetchUseditem.pickedCount);

  const onClickHeart = () => {
    toggleUseditemPick({ useditemId: props.id });
    changeIsToggle();
  };
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <S.ImgMainWrapper>
          <img src={props.data?.fetchUseditem.images?.[0] ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}` : "/images/usedItemDefault.png"} />
        </S.ImgMainWrapper>
        <S.ImgSubWrapper>{props.data?.fetchUseditem.images?.map((el) => el && <img src={`https://storage.googleapis.com/${el}`} key={el} />)}</S.ImgSubWrapper>
      </S.ImgContainer>

      <S.DetailContainer>
        <div>
          <h1>{props.data?.fetchUseditem.name}</h1>
          <S.CustomHeartFilled onClick={onClickHeart} isToggle={isToggle} />
        </div>
        <div>{props.data?.fetchUseditem.price}원</div>
        <div>{props.data?.fetchUseditem.seller?.name}</div>
        <KakaoMapDetail address={props.data?.fetchUseditem?.useditemAddress} />
      </S.DetailContainer>
    </S.Wrapper>
  );
}
