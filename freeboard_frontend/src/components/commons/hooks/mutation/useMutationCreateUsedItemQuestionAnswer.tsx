import { gql, useMutation } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { IMutation, IMutationCreateUseditemQuestionAnswerArgs } from "../../../../commons/types/generated/types";

const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!, $useditemQuestionId: ID!) {
    createUseditemQuestionAnswer(createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput, useditemQuestionId: $useditemQuestionId) {
      _id
    }
  }
`;

interface IcreateUsedItemQuestionAnswerArgs {
  setIsOpen: Dispatch<SetStateAction<string>>;
  id: string;
}

export const useMutationCreateUsedItemQuestionAnswer = () => {
  const [mutation] = useMutation<Pick<IMutation, "createUseditemQuestionAnswer">, IMutationCreateUseditemQuestionAnswerArgs>(CREATE_USED_ITEM_QUESTION_ANSWER);

  const createUsedItemQuestionAnswer = (args: IcreateUsedItemQuestionAnswerArgs) => async (createUseditemQuestionAnswerInput) => {
    await mutation({
      variables: {
        createUseditemQuestionAnswerInput,
        useditemQuestionId: args.id,
      },
    });
    args.setIsOpen("");
  };
  return { createUsedItemQuestionAnswer };
};
