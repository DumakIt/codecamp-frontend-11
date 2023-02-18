import { IQuery } from "../../../../../commons/types/generated/types";

interface IDetailBodyProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export default function DetailBody(props: IDetailBodyProps): JSX.Element {
  return (
    <div>
      <div>{props.data?.fetchUseditem.seller?.name}</div>
      <div>{props.data?.fetchUseditem.name}</div>
      <div>{props.data?.fetchUseditem.contents}</div>
      <div>{props.data?.fetchUseditem.price}</div>
    </div>
  );
}
