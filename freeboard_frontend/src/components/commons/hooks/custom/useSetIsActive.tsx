import { MouseEvent, useState } from "react";

export const useSetIsActive = () => {
  const [isActive, setIsActive] = useState("");

  const onClickIsActive = (event: MouseEvent<HTMLImageElement>) => {
    setIsActive(event.currentTarget.id);
  };
  return { isActive, onClickIsActive, setIsActive };
};
