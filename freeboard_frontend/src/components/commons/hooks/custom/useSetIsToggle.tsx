import { useState } from "react";

interface IUseSetIsToggle {
  isToggle: boolean;
  changeIsToggle: () => void;
}

export const useSetIsToggle = (): IUseSetIsToggle => {
  const [isToggle, setIsToggle] = useState(false);

  const changeIsToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return { isToggle, changeIsToggle };
};
