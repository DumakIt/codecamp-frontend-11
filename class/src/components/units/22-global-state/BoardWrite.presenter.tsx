import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

export default function BoardWriteUI(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return <div>{isEdit ? "수정수정" : "등록하귀"}</div>;
}
