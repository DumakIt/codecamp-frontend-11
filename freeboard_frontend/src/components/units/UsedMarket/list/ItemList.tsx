import { useQueryFetchUsedItems } from "../../../commons/hooks/query/useQueryFetchUseditems";
import { useQueryRefetchSearch } from "../../../commons/hooks/query/useQueryRefetchSearch";
import ListAside from "./aside/ItemListAside";
import ListBody from "./body/ItemListBody";
import ListHeader from "./hearder/ItemListHeader";
import styled from "@emotion/styled";
import { useLocalStorage } from "../../../commons/hooks/custom/useLocalStorage";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function ItemList(): JSX.Element {
  const { data, FetchMore, refetch } = useQueryFetchUsedItems();
  const { keyword, onChangeSearch } = useQueryRefetchSearch({ refetch });
  const { getRecentlyViewed } = useLocalStorage();
  const [viewedItems, setViewedItems] = useState("");

  useEffect(() => {
    getRecentlyViewed(setViewedItems);
  }, []);

  return (
    <Container>
      <div>
        <ListHeader onChangeSearch={onChangeSearch} />
        <ListBody data={data} FetchMore={FetchMore} keyword={keyword} />
      </div>
      <ListAside viewedItems={viewedItems} />
    </Container>
  );
}
