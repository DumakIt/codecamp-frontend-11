import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      createdAt
      price
      seller {
        name
      }
      images
    }
  }
`;

export const useQueryFetchUsedItems = () => {
  const { data, fetchMore, refetch } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS);

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

  return { data, FetchMore, refetch };
};
