import { useEffect } from "react";
import { useLocalStorage } from "../../../commons/hooks/custom/useLocalStorage";
import { useRouterIdCheck } from "../../../commons/hooks/custom/useRouterIdCheck";
import { useQueryFetchUsedItem } from "../../../commons/hooks/query/useQueryFetchUsedItem";
import DetailBody from "./body/ItemDetailBody";
import DetailFooter from "./footer/ItemDetailFooter";
import DetailHeader from "./header/ItemDetailHeader";

export default function ItemDetail(): JSX.Element {
  const { id } = useRouterIdCheck("fetchItem");
  const { data } = useQueryFetchUsedItem({ useditemId: id });
  const { setRecentlyViewed } = useLocalStorage();

  useEffect(() => {
    if (data?.fetchUseditem) {
      setRecentlyViewed({ image: data?.fetchUseditem?.images?.[0], name: data?.fetchUseditem.name, id: data?.fetchUseditem._id });
    }
  }, [data?.fetchUseditem]);

  return (
    <div>
      <DetailHeader data={data} />
      <DetailBody data={data} />
      <DetailFooter id={id} />
    </div>
  );
}
