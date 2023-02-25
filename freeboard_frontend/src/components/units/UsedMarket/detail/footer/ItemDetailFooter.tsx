import Link from "next/link";
import { useRouterIdCheck } from "../../../../commons/hooks/custom/useRouterIdCheck";
import { useMutationDeleteUsedItem } from "../../../../commons/hooks/mutation/useMutationDeleteUsedItem";

interface IDetailFooterProps {
  id: string;
}

export default function DetailFooter(props: IDetailFooterProps): JSX.Element {
  const { id } = useRouterIdCheck("fetchItem");
  const { deleteUsedItem } = useMutationDeleteUsedItem();
  return (
    <>
      <Link href="/usedMarket/">
        <a>상품목록</a>
      </Link>
      <Link href={`/usedMarket/${id}/editItem/`}>
        <a>상품수정</a>
      </Link>
      <div onClick={deleteUsedItem({ useditemId: id })}>상품삭제</div>
    </>
  );
}
