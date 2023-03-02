import Link from "next/link";
import { useState } from "react";
import { useRouterIdCheck } from "../../../../commons/hooks/custom/useRouterIdCheck";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import { useMutationDeleteUsedItem } from "../../../../commons/hooks/mutation/useMutationDeleteUsedItem";
import { useQueryFetchUsedItemsIPicked } from "../../../../commons/hooks/query/useQueryFetchUsedItemsIPicked";

interface IDetailFooterProps {
  id: string;
}

export default function DetailFooter(props: IDetailFooterProps): JSX.Element {
  const { id } = useRouterIdCheck("fetchItem");
  const { deleteUsedItem } = useMutationDeleteUsedItem();
  const { fetchUseditemsIPicked } = useQueryFetchUsedItemsIPicked();
  const [isToggle, changeIsToggle] = useSetIsToggle();

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
