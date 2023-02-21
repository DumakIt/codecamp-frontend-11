import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItem = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_USED_ITEM);

  const updateUsedItem = (id: string) => async (data) => {
    console.log(data);
    //   await mutation({
    //     variables: {
    //       updateUseditemInput: { ...data, price: Number(data.price) },
    //       useditemId: id,
    //     },
    //   });

    //   routerMovePage(`/usedMarket/${id}`);
  };
  return { updateUsedItem };
};
