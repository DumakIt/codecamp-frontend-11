import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
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
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS, { variables });

  const FetchMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestions === undefined) return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions, ...fetchMoreResult.fetchUseditemQuestions] };
      },
    });
  };

  return { data, FetchMore };
};
