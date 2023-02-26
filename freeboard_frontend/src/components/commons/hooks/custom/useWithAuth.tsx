import { Modal } from "antd";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useRouterMovePage } from "./useRouterMovePage";

export const useWithAuth = (): void => {
  const [accessToken] = useRecoilState(accessTokenState);
  const { routerMovePage } = useRouterMovePage();

  useEffect(() => {
    if (accessToken === "") {
      Modal.info({
        content: "로그인 후 이용 가능합니다.",
        onOk() {
          routerMovePage("/usedMarket/login");
        },
      });
    }
  }, []);
};
