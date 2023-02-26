import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

import { IMutation, IMutationLoginUserArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useMutationLoginUser = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [mutation] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);
  const { routerMovePage } = useRouterMovePage();

  const loginUser = async (variables) => {
    try {
      const result = await mutation({ variables });

      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined)
        return Modal.error({
          title: "오류가 발생했습니다",
          content: "잠시후 다시 시도해 주세요.",
        });

      setAccessToken(accessToken);
      routerMovePage("/usedMarket");
    } catch (error) {
      if (error instanceof Error) {
        return Modal.error({
          title: error.message,
          content: "확인후 다시 시도해 주세요.",
        });
      }
    }
  };

  return { loginUser };
};
