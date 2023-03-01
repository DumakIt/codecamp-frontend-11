import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const useMutationLogoutUser = () => {
  const [mutation] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const logoutUser = () => {
    mutation();
  };

  return { logoutUser };
};
