import Link from "next/link";
import { ChangeEvent } from "react";

interface IListHeaderProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ListHeader(props: IListHeaderProps): JSX.Element {
  return (
    <div>
      <input type="text" onChange={props.onChangeSearch} />
      <Link href="/usedMarket/createItem">
        <a>나의상품 등록하기</a>
      </Link>
    </div>
  );
}
