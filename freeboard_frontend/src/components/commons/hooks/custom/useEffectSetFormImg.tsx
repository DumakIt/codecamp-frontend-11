import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "../../../units/UsedMarket/create/body/ItemCreateBody";

interface IuseEffectSetFormImgArgs {
  setValue: UseFormSetValue<IFormData>;
  images: {
    0: string;
  };
}

export const useEffectSetFormImg = (args: IuseEffectSetFormImgArgs) => {
  useEffect(() => {
    args.setValue("images", Object.values(args.images));
  }, [args.images]);
};
