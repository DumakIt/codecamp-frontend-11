import { useEffect } from "react";
import { useSetIsToggle } from "./useSetIsToggle";

export const useEffectChargePointsLoad = (changeIsToggle: () => void) => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script2);

    script1.onload,
      (script2.onload = () => {
        console.log("여기");
        changeIsToggle();
      });
  }, []);
};
