import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
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

  const toggleUseditemPick = async (variables: IVariables) => {
    try {
      await mutation({ variables });
      Modal.success({
        content: "찜목록에 추가했습니다",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "잠시후 다시 시도해주세요.",
        });
    }
  };

  return { toggleUseditemPick };
};
