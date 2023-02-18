import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItemQuestions = (variables: IQueryFetchUseditemQuestionsArgs) => {
  const data = useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS, { variables });
  return data;
};
