import { IQuery } from "../../../../../commons/types/generated/types";

interface IDetailBodyProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export default function DetailBody(props: IDetailBodyProps): JSX.Element {
  return (
    <div>
      <div>{props.data?.fetchUseditem.contents}</div>
    </div>
  );
}
