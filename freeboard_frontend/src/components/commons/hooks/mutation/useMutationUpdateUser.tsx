import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateUserArgs } from "../../../../commons/types/generated/types";

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;

export const useMutationUpdateUser = () => {
  const [mutation] = useMutation<Pick<IMutation, "updateUser">, IMutationUpdateUserArgs>(UPDATE_USER);

  const updateUser = (value) => {
    // mutation({ variables: value });
    console.log(value, "여기");
  };

  return { updateUser };
};
