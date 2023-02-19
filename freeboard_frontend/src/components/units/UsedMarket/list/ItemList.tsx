import { useQueryFetchUsedItems } from "../../../commons/hooks/query/useQueryFetchUseditems";
import { useQueryRefetchSearch } from "../../../commons/hooks/query/useQueryRefetchSearch";
import ListBody from "./body/ItemListBody";
import ListHeader from "./hearder/ItemListHeader";

export default function ItemList(): JSX.Element {
  const { data, FetchMore, refetch } = useQueryFetchUsedItems();
  const { keyword, onChangeSearch } = useQueryRefetchSearch({ refetch });

  return (
    <>
      <ListHeader onChangeSearch={onChangeSearch} />
      <ListBody data={data} FetchMore={FetchMore} keyword={keyword} />
    </>
  );
}
