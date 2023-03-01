import { useState } from "react";

export const useSetIsToggle = (): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState(false);

  const changeIsToggle = () => {
    setIsToggle((prev) => !prev);
  };
  return [isToggle, changeIsToggle];
};
