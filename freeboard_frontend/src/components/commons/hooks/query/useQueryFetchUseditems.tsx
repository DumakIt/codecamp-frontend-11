import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      createdAt
      seller {
        name
      }
    }
  }
`;

export const useQueryFetchUsedItems = () => {
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS);

  const FetchMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditems === undefined) return { fetchUseditems: [...prev.fetchUseditems] };
        return { fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems] };
      },
    });
  };

  return { data, FetchMore };
};
