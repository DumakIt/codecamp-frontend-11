import Link from "next/link";
import { useRouterIdCheck } from "../../../../commons/hooks/custom/useRouterIdCheck";

interface IDetailFooterProps {
  id: string;
}

export default function DetailFooter(props: IDetailFooterProps): JSX.Element {
  const { id } = useRouterIdCheck("fetchItem");
  return (
    <>
      <Link href="/usedMarket/">
        <a>상품목록</a>
      </Link>
      <Link href={`/usedMarket/${id}/editItem/`}>
        <a>상품수정</a>
      </Link>
    </>
  );
}
