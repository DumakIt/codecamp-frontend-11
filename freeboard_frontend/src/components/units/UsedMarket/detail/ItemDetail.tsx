import { useRouterIdCheck } from "../../../commons/hooks/custom/useRouterIdCheck";
import { useQueryFetchUsedItem } from "../../../commons/hooks/query/useQueryFetchUsedItem";
import DetailBody from "./body/ItemDetailBody";
import DetailFooter from "./footer/ItemDetailFooter";

export default function ItemDetail(): JSX.Element {
  const { id } = useRouterIdCheck("fetchItem");
  const { data } = useQueryFetchUsedItem({ useditemId: id });
  return (
    <>
      <DetailBody data={data} />
      <DetailFooter id={id} />
    </>
  );
}
