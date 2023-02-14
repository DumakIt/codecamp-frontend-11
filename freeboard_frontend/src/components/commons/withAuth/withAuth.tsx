import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.warning({
        title: "로그인한 유저만 이용 가능합니다",
        content: "로그인후 다시 시도해 주세요.",
      });
      router.push("/23/hoc/login");
    }
  }, []);
  return <Component {...props} />;
};
