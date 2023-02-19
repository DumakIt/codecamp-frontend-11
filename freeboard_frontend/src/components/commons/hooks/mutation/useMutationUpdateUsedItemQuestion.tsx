import { gql, useMutation } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { IMutation, IMutationUpdateUseditemQuestionArgs } from "../../../../commons/types/generated/types";

const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion($updateUseditemQuestionInput: UpdateUseditemQuestionInput!, $useditemQuestionId: ID!) {
    updateUseditemQuestion(updateUseditemQuestionInput: $updateUseditemQuestionInput, useditemQuestionId: $useditemQuestionId) {
      _id
    }
  }
`;

interface IupdateUsedItemQuestionArgs {
  setIsActive: Dispatch<SetStateAction<string>>;
  id: string;
}

export const useMutationUpdateUsedItemQuestion = () => {
  const [mutation] = useMutation<Pick<IMutation, "updateUseditemQuestion">, IMutationUpdateUseditemQuestionArgs>(UPDATE_USED_ITEM_QUESTION);

  const updateUsedItemQuestion = (args: IupdateUsedItemQuestionArgs) => async (updateUseditemQuestionInput) => {
    await mutation({
      variables: {
        updateUseditemQuestionInput,
        useditemQuestionId: args.id,
      },
    });
    console.log(args.id);
    args.setIsActive("");
  };
  return { updateUsedItemQuestion };
};
