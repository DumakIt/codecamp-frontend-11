import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationCreatePointTransactionOfBuyingAndSellingArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

export const useMutationCreatePointTransactionOfBuyingAndSelling = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<Pick<IMutation, "createPointTransactionOfBuyingAndSelling">, IMutationCreatePointTransactionOfBuyingAndSellingArgs>(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const createPointTransactionOfBuyingAndSelling = (variables) => async () => {
    try {
      await mutation({ variables });
      routerMovePage("/usedMarket/");
    } catch (error) {
      if (error instanceof Error)
        Modal.warning({
          content: error.message,
        });
    }
  };

  return { createPointTransactionOfBuyingAndSelling };
};
