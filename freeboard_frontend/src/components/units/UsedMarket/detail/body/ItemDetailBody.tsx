import Dompurify from "dompurify";
import { IQuery } from "../../../../../commons/types/generated/types";

interface IDetailBodyProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export default function DetailBody(props: IDetailBodyProps): JSX.Element {
  return (
    <div>
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        />
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
}
