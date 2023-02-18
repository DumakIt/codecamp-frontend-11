import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUseditemQuestionArgs } from "../../../../commons/types/generated/types";

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput!, $useditemId: ID!) {
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

export const useMutationCreateUsedItemQuestion = () => {
  const [mutation] = useMutation<Pick<IMutation, "createUseditemQuestion">, IMutationCreateUseditemQuestionArgs>(CREATE_USED_ITEM_QUESTION);

  const createUsedItemQuestion = (useditemId: string) => (createUseditemQuestionInput) => {
    mutation({
      variables: {
        createUseditemQuestionInput,
        useditemId,
      },
    });
  };
  return { createUsedItemQuestion };
};
