import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateUserArgs, IUpdateUserInput } from "../../../../commons/types/generated/types";

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;

interface IUpdateUserArgs {
  image?: string;
  dataName?: string;
}

export const useMutationUpdateUser = () => {
  const [mutation] = useMutation<Pick<IMutation, "updateUser">, IMutationUpdateUserArgs>(UPDATE_USER);

  const updateUser = (args: IUpdateUserArgs) => (value: IUpdateUserInput) => {
    const updateUserInput: IUpdateUserInput = {};

    if (args.dataName !== value.name) {
      updateUserInput.name = value.name;
    }

    if (args.image) {
      updateUserInput.picture = args.image;
    }
    console.log(value.name, "ㅇㄴㅁㅇㄴㅁ");

    mutation({ variables: { updateUserInput } });
  };

  return { updateUser };
};
