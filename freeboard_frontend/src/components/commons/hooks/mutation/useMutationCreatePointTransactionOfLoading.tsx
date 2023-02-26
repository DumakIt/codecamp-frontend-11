import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreatePointTransactionOfLoadingArgs } from "../../../../commons/types/generated/types";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

export const useMutationCreatePointTransactionOfLoading = () => {
  const [mutation] = useMutation<Pick<IMutation, "createPointTransactionOfLoading">, IMutationCreatePointTransactionOfLoadingArgs>(CREATE_POINT_TRANSACTION_OF_LOADING);

  const createPointTransactionOfLoading = (variables) => {
    mutation({ variables });
  };

  return { createPointTransactionOfLoading };
};
