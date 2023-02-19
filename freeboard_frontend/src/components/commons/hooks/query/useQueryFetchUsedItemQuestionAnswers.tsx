import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemQuestionAnswersArgs } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItemQuestionAnswers = (variables: IQueryFetchUseditemQuestionAnswersArgs) => {
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditemQuestionAnswers">, IQueryFetchUseditemQuestionAnswersArgs>(FETCH_USED_ITEM_QUESTION_ANSWERS, { variables });

  const FetchMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestionAnswers.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestionAnswers === undefined) return { fetchUseditemQuestionAnswers: [...prev.fetchUseditemQuestionAnswers] };
        return { fetchUseditemQuestionAnswers: [...prev.fetchUseditemQuestionAnswers, ...fetchMoreResult.fetchUseditemQuestionAnswers] };
      },
    });
  };

  return { data, FetchMore };
};
