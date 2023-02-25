import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteUseditemQuestionAnswerArgs } from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId: $useditemQuestionAnswerId)
  }
`;

export const useMutationDeleteUsedItemQuestionAnswer = () => {
  const [mutation] = useMutation<Pick<IMutation, "deleteUseditemQuestionAnswer">, IMutationDeleteUseditemQuestionAnswerArgs>(DELETE_USED_ITEM_QUESTION_ANSWER);

  const deleteUsedItemQuestionAnswer = (variables) => async () => {
    await mutation({ variables });
  };
  return { deleteUsedItemQuestionAnswer };
};
