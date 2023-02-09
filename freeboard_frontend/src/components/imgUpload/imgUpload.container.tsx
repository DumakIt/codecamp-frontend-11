import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../commons/types/generated/types";
import * as S from "./imgUpload.styles";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgUpload(props): JSX.Element {
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);
  const imgRef = useRef(null);

  const onClickImg = () => {
    imgRef.current.click();
  };

  const onChangeImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file === undefined) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    props.setImages((prev) => ({ ...prev, [props.idx]: result.data?.uploadFile.url }));
  };

  return (
    <div>
      {props.images[props.idx] !== "" ? <S.Img src={`https://storage.googleapis.com/${props.images[props.idx]}`} onClick={onClickImg} /> : <S.Img src="/addPost/addImg.png" onClick={onClickImg} />}

      <input type="file" ref={imgRef} onChange={onChangeImg} accept="image/jpeg, image/png" />
    </div>
  );
}
