import { useState } from "react";

export const useSetIsToggle = () => {
  const [isToggle, setIsToggle] = useState(false);

  const changeIsToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return { isToggle, changeIsToggle };
};
