import { MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import { useMutationCreateUsedItemQuestionAnswer } from "../hooks/mutation/useMutationCreateUsedItemQuestionAnswer";
import { useMutationUpdateUsedItemQuestionAnswer } from "../hooks/mutation/useMutationUpdateUsedItemQuestionAnswer";
import { useQueryFetchUsedItemQuestionAnswers } from "../hooks/query/useQueryFetchUsedItemQuestionAnswers";

interface IQuestionAnswerProps {
  id: string;
  isActive: string;
  onClickIsActive: (event: MouseEvent<HTMLImageElement>) => void;
}

export default function QuestionAnswer(props: IQuestionAnswerProps): JSX.Element {
  const { register, handleSubmit } = useForm();
  const { createUsedItemQuestionAnswer } = useMutationCreateUsedItemQuestionAnswer();
  const { changeIsToggle, isToggle } = useSetIsToggle();
  const { data } = useQueryFetchUsedItemQuestionAnswers({ useditemQuestionId: props.id });
  const { updateUseditemQuestionAnswer } = useMutationUpdateUsedItemQuestionAnswer();

  return (
    <div>
      <div onClick={changeIsToggle}>답변하기</div>
      {data?.fetchUseditemQuestionAnswers.map((el) =>
        el._id !== props.isActive ? (
          <div>
            <div>-------------------</div>
            <div>답변내용: {el.contents}</div>
            <div>유저이름: {el.user.name}</div>
            <div>답변시간: {el.createdAt}</div>
            <div id={el._id} onClick={props.onClickIsActive}>
              답변수정하기
            </div>
            <div>-------------------</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(updateUseditemQuestionAnswer({ id: el._id, setIsActive: props.setIsActive }))}>
            <input type="text" placeholder="수정할 내용을 입력해 주세요" {...register("contents")} />
            <button>답변수정완료</button>
          </form>
        )
      )}

      {isToggle && (
        <form onSubmit={handleSubmit(createUsedItemQuestionAnswer({ id: props.id, changeIsToggle }))}>
          <input type="text" {...register("contents")} />
          <button>답변완료</button>
        </form>
      )}
    </div>
  );
}
