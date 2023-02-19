import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      images
      pickedCount
      seller {
        name
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItem = (variables: IQueryFetchUseditemArgs) => {
  const data = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, { variables });
  if (!data) return;
  return data;
};
