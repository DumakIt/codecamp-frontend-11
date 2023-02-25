import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteUseditemArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useMutationDeleteUsedItem = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<Pick<IMutation, "deleteUseditem">, IMutationDeleteUseditemArgs>(DELETE_USED_ITEM);

  const deleteUsedItem = (variables) => async () => {
    await mutation({ variables });
    routerMovePage(`/usedMarket`);
  };

  return { deleteUsedItem };
};
