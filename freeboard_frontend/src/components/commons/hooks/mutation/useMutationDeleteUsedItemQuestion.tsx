import { gql, useMutation } from "@apollo/client";
import { MouseEvent } from "react";
import { IMutation, IMutationDeleteUseditemQuestionAnswerArgs, IMutationDeleteUseditemQuestionArgs } from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useMutationDeleteUsedItemQuestion = () => {
  const [mutation] = useMutation<Pick<IMutation, "deleteUseditemQuestion">, IMutationDeleteUseditemQuestionArgs>(DELETE_USED_ITEM_QUESTION);

  const deleteUsedItemQuestion = (variables) => async () => {
    await mutation({
      variables,
    });
  };
  return { deleteUsedItemQuestion };
};
