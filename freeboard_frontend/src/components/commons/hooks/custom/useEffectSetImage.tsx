import { useEffect } from "react";

interface IuseEffectSetImageArgs {}

export const useEffectSetImage = (args) => {
  useEffect(() => {
    if (args.data?.fetchUseditem?.images === undefined) return;
    args.setImages({ ...args.data?.fetchUseditem?.images });
  }, [args.data?.fetchUseditem?.images]);
};
