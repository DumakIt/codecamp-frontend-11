import { useEffect, useRef, useState } from "react";
import { useForm, UseFormHandleSubmit, UseFormProps } from "react-hook-form";
import { IUpdateUserInput } from "../../../../../commons/types/generated/types";
import ChargePoints from "../../../../commons/chargePoints/chargePoints";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import { useMutationUpdateUser } from "../../../../commons/hooks/mutation/useMutationUpdateUser";
import { useMutationUploadFile } from "../../../../commons/hooks/mutation/useMutationUploadFile";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/query/useQueryFetchUserLoggedIn";
import MyInfoImgUpdate from "../../../../commons/myInfoImgUpdate/myInfoImgUpdate";
import * as S from "./MyInfoHeaderStyles";

export default function MyInfoHeader(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const { updateUser } = useMutationUpdateUser();
  const { handleSubmit, register } = useForm<IUpdateUserInput>();
  const [image, setImage] = useState("");

  const onClickEditBtn = () => {
    setImage(data?.fetchUserLoggedIn.picture ?? "");
    changeIsToggle();
  };

  return (
    <S.Container>
      <S.LeftWrapper>
        <MyInfoImgUpdate isToggle={isToggle} image={image} setImage={setImage} dataImage={data?.fetchUserLoggedIn.picture} />
      </S.LeftWrapper>

      <S.RightWrapper>
        <S.EditBtn onClick={onClickEditBtn} />

        <form id="updateUserForm" onSubmit={handleSubmit(updateUser({ image, dataName: data?.fetchUserLoggedIn.name }))}>
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
