import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationToggleUseditemPickArgs } from "../../../../commons/types/generated/types";

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

interface IVariables {
  useditemId: string;
}

export const useMutationToggleUsedItemPick = () => {
  const [mutation] = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(TOGGLE_USED_ITEM_PICK);

  const toggleUseditemPick = (variables: IVariables) => {
    mutation({ variables });
  };

  return { toggleUseditemPick };
};
