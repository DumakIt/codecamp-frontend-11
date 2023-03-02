import { useRef } from "react";
import { useMutationUploadFile } from "../hooks/mutation/useMutationUploadFile";
import * as S from "./myInfoImgUpdateStyles";

export default function MyInfoImgUpdate(props): JSX.Element {
  const { uploadFile } = useMutationUploadFile();
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeImg = (event) => {
    const file = event.target.files?.[0];
    uploadFile({ file, setImage: props.setImage });
  };

  const onClickImage = (): void => {
    if (props.isToggle) {
      fileRef.current?.click();
    }
  };

  return (
    <S.Container>
      <S.DisabledInput style={{ display: "none" }} type="file" onChange={onChangeImg} ref={fileRef} accept="image/jpeg, image/png" />
      {props.isToggle ? (
        <S.UserImg onClick={onClickImage} src={props.image ? `https://storage.googleapis.com/${props.image}` : `/images/defaultUserIcon.svg`} />
      ) : (
        <S.UserImg onClick={onClickImage} src={props.dataImage ? `https://storage.googleapis.com/${props.dataImage}` : `/images/defaultUserIcon.svg`} />
      )}
    </S.Container>
  );
}
