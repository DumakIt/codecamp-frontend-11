import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // 1. 로그인 체크(refreshToken 이전)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능합니당");
  //     void router.push("/section23/23-05-login-check-hoc");
  //   }
  // }, []);

  //  2. 로그인 체크 (refreshToken 이후 => 안좋움) _app.tsx에 이어서 총 2회 요청]]
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용 가능합니당");
  //       void router.push("/section30/30-01-login-refreshtoken");
  //     }
  //   });
  // }, []);

  // 3. 로그인 체크 (refreshToken 이후 => 좋움) 함수를 공유함으로 _app.tsx에 이어서 총 1번만 요청하게 됨
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니당");
        void router.push("/section30/30-01-login-refreshtoken");
      }
    });
  }, []);

  return <컴포넌트 {...프롭스} />;
};
