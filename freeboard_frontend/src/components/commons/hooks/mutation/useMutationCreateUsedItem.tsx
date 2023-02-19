import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useMutationCreateUsedItem = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_USED_ITEM);

  const createUsedItem = async (data) => {
    console.log(data);
    const result = await mutation({
      variables: {
        createUseditemInput: {
          ...data,
          price: Number(data.price),
        },
      },
    });
    routerMovePage(`/usedMarket/${result.data?.createUseditem._id}`);
  };
  return { createUsedItem };
};
