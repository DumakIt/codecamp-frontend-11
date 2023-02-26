import { Modal } from "antd";

import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getNewAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient("https://backend-practice.codebootcamp.co.kr/graphql", { credentials: "include" });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result?.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) {
      Modal.error({
        title: error.message,
        content: "잠시후 다시 시도해 주세요.",
      });
    }
  }
};
