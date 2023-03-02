import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsIPickedArgs } from "../../../../commons/types/generated/types";
import { useQueryFetchUsedItemsCountIPicked } from "./useQueryFetchUsedItemsCountIPicked";

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      seller {
        name
        picture
      }
    }
  }
`;

export const useQueryFetchUsedItemsIPicked = () => {
  const { data: count } = useQueryFetchUsedItemsCountIPicked();
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditemsIPicked">, IQueryFetchUseditemsIPickedArgs>(FETCH_USED_ITEMS_I_PICKED, { variables: { search: "" } });

  const fetchUseditemsIPicked = async () => {
    if (data === undefined) return;
    const lastCount = Math.ceil((count?.fetchUseditemsCountIPicked ?? 10) / 10) - 1;
    const result = await Promise.all(
      new Array(lastCount).fill(1).map((_, idx) =>
        fetchMore({
          variables: {
            search: "",
            page: idx + 2,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (fetchMoreResult === undefined) return prev;

            return { fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked, ...fetchMoreResult.fetchUseditemsIPicked] };
          },
        })
      )
    );

    console.log(data, "dasodjkaso");
  };
  return { fetchUseditemsIPicked };
};
