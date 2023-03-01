import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ChargePoints from "../../../../commons/chargePoints/chargePoints";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import { useMutationUpdateUser } from "../../../../commons/hooks/mutation/useMutationUpdateUser";
import { useMutationUploadFile } from "../../../../commons/hooks/mutation/useMutationUploadFile";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/query/useQueryFetchUserLoggedIn";
import * as S from "./MyInfoHeaderStyles";

export default function MyInfoHeader(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const { updateUser } = useMutationUpdateUser();
  const { handleSubmit, register, setValue, trigger } = useForm();
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState("");
  const { uploadFile } = useMutationUploadFile();

  useEffect(() => {
    if (data?.fetchUserLoggedIn.picture) setImages(data?.fetchUserLoggedIn.picture);
  }, [data]);

  const onChangeImg = (event) => {
    const file = event.target.files?.[0];
    uploadFile({ file, setImages });
  };

  const onClickImage = (): void => {
    if (isToggle) {
      fileRef.current?.click();
    }
  };

  return (
    <S.Container>
      <input style={{ display: "none" }} type="file" onChange={onChangeImg} ref={fileRef} accept="image/jpeg, image/png" />
      <S.LeftWrapper>
        <img onClick={onClickImage} src={images ? `https://storage.googleapis.com/${images}` : `/images/defaultUserIcon.svg`} />
      </S.LeftWrapper>

      <S.RightWrapper>
        <S.EditBtn onClick={changeIsToggle} />
        <form id="updateUserForm" onSubmit={handleSubmit(updateUser)}>
          <S.UserName type="text" readOnly={!isToggle} defaultValue={data?.fetchUserLoggedIn.name} {...register("name")} />
        </form>
        <S.UserEmail>{data?.fetchUserLoggedIn.email}</S.UserEmail>
        <S.UserPointWrapper>
          <div>Points : </div>
          <S.UserPoint>{data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}원</S.UserPoint>
        </S.UserPointWrapper>

        <S.ChargePointsWrapper>{isToggle ? <S.UpdateBtn form="updateUserForm">수정완료</S.UpdateBtn> : <ChargePoints data={data} />}</S.ChargePointsWrapper>
      </S.RightWrapper>
    </S.Container>
  );
}
