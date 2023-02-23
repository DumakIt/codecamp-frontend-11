import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouterIdCheck } from "../../../../commons/hooks/custom/useRouterIdCheck";
import { useMutationCreateUsedItem } from "../../../../commons/hooks/mutation/useMutationCreateUsedItem";
import { useMutationUpdateUsedItem } from "../../../../commons/hooks/mutation/useMutationUpdateUsedItem";
import { useQueryFetchUsedItem } from "../../../../commons/hooks/query/useQueryFetchUsedItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ItemCreateBodyvaildation";
import ImgUpload from "../../../../commons/imgUpload/imgUpload.container";
import { useEffectSetImage } from "../../../../commons/hooks/custom/useEffectSetImage";
import { useEffectSetFormImg } from "../../../../commons/hooks/custom/useEffectSetFormImg";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KakaoMap from "../../../../commons/kakaoMap/kakaoMap";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface ICreateBodyProps {
  isEdit: boolean;
}

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
  images: string[];
}

export default function CreateBody(props: ICreateBodyProps): JSX.Element {
  const [images, setImages] = useState({ 0: "" });

  const { register, handleSubmit, formState, setValue, trigger } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { createUsedItem } = useMutationCreateUsedItem();
  const { updateUsedItem } = useMutationUpdateUsedItem();
  const { id } = useRouterIdCheck("fetchItem");
  const { data } = useQueryFetchUsedItem({ useditemId: id });

  useEffectSetImage({ setImages, data });
  useEffectSetFormImg({ setValue, images });

  const onChangeQuill = (value) => {
    setValue("contents", value === "<p></br></p>" ? "" : value);
    void trigger("contents");
  };

  useEffect(() => {
    setValue("contents", data?.fetchUseditem.contents);
  }, [data]);

  return (
    <div>
      {props.isEdit ? (
        data?.fetchUseditem ? (
          <form onSubmit={handleSubmit(updateUsedItem(id))}>
            {Object.values(images).map((_, idx) => (
              <ImgUpload key={idx} idx={idx} setImages={setImages} images={images} />
            ))}

            <input type="text" placeholder="제목을 입력해 주세요" defaultValue={data?.fetchUseditem.name} {...register("name")} />
            <div>{formState.errors.name?.message}</div>
            <input type="text" placeholder="참고사항을 입력해 주세요" defaultValue={data?.fetchUseditem.remarks} {...register("remarks")} />
            <div>{formState.errors.remarks?.message}</div>
            <ReactQuill placeholder="내용을 입력해 주세요" defaultValue={data?.fetchUseditem?.contents} onChange={onChangeQuill} />
            <div>{formState.errors.contents?.message}</div>
            <input type="number" placeholder="상품가격" defaultValue={data?.fetchUseditem.price} {...register("price")} />
            <div>{formState.errors.price?.message}</div>
            <input type="text" placeholder="태그" defaultValue={data?.fetchUseditem.tags} {...register("tags")} />
            <div>{formState.errors.tags?.message}</div>
            <KakaoMap />
            <button>상품등록</button>
          </form>
        ) : (
          <div>로딩중....</div>
        )
      ) : (
        <form onSubmit={handleSubmit(createUsedItem)}>
          {Object.values(images).map((_, idx) => (
            <ImgUpload key={idx} idx={idx} setImages={setImages} images={images} />
          ))}

          <input type="text" placeholder="제목을 입력해 주세요" {...register("name")} />
          <div>{formState.errors.name?.message}</div>
          <input type="text" placeholder="참고사항을 입력해 주세요" {...register("remarks")} />
          <div>{formState.errors.remarks?.message}</div>
          <ReactQuill placeholder="내용을 입력해 주세요" onChange={onChangeQuill} />
          <div>{formState.errors.contents?.message}</div>
          <input type="number" placeholder="상품가격" {...register("price")} />
          <div>{formState.errors.price?.message}</div>
          <input type="text" placeholder="태그" {...register("tags")} />
          <div>{formState.errors.tags?.message}</div>
          <KakaoMap />
          <button>상품등록</button>
        </form>
      )}
    </div>
  );
}
