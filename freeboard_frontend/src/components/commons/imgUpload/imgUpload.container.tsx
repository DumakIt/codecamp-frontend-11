import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../../commons/types/generated/types";
import * as S from "./imgUpload.styles";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgUpload(args): JSX.Element {
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);
  const imgRef = useRef<HTMLInputElement>(null);

  const onClickImg = () => {
    imgRef.current?.click();
  };

  const onChangeImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file === undefined) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    args.setImages((prev) => ({ ...prev, [args.idx]: result.data?.uploadFile.url }));

    if (Object.values(args.images).length - 1 === args.idx) {
      args.setImages((prev) => ({ ...prev, [args.idx + 1]: "" }));
    }
  };

  return (
    <div>
      {args.images[args.idx] !== "" ? <S.Img src={`https://storage.googleapis.com/${args.images[args.idx]}`} onClick={onClickImg} /> : <S.Img src="/addPost/addImg.png" onClick={onClickImg} />}

      <S.DisabledInput type="file" ref={imgRef} onChange={onChangeImg} accept="image/jpeg, image/png" />
    </div>
  );
}
