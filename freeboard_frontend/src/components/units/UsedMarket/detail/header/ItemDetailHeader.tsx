import { IQuery } from "../../../../../commons/types/generated/types";
import * as S from "./ItemDetailHeaderStyles";

interface IDetailBodyProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export default function DetailHeader(props: IDetailBodyProps): JSX.Element {
  return (
    <S.Wrapper>
      <div>das</div>
      <div>{props.data?.fetchUseditem.images?.map((el) => el && <img src={`https://storage.googleapis.com/${el}`} key={el} />)}</div>
      <div>
        <div>{props.data?.fetchUseditem.seller?.name}</div>
        <div>{props.data?.fetchUseditem.name}</div>
        <div>{props.data?.fetchUseditem.price}</div>
      </div>
    </S.Wrapper>
  );
}
