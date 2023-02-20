import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateUseditemQuestionAnswerArgs } from "../../../../commons/types/generated/types";

const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!, $useditemQuestionAnswerId: ID!) {
    updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput, useditemQuestionAnswerId: $useditemQuestionAnswerId) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItemQuestionAnswer = () => {
  const [mutation] = useMutation<Pick<IMutation, "updateUseditemQuestionAnswer">, IMutationUpdateUseditemQuestionAnswerArgs>(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const updateUseditemQuestionAnswer = (args) => async (updateUseditemQuestionAnswerInput) => {
    await mutation({
      variables: {
        updateUseditemQuestionAnswerInput,
        useditemQuestionAnswerId: args.id,
      },
    });
    args.setIsActive("");
  };
  return { updateUseditemQuestionAnswer };
};
