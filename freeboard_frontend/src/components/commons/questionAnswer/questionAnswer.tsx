import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import { useMutationCreateUsedItemQuestionAnswer } from "../hooks/mutation/useMutationCreateUsedItemQuestionAnswer";
import { useQueryFetchUsedItemQuestionAnswers } from "../hooks/query/useQueryFetchUsedItemQuestionAnswers";

interface IQuestionAnswerProps {
  id: string;
}

export default function QuestionAnswer(props: IQuestionAnswerProps): JSX.Element {
  const { register, handleSubmit } = useForm();
  const { createUsedItemQuestionAnswer } = useMutationCreateUsedItemQuestionAnswer();
  const { changeIsToggle, isToggle } = useSetIsToggle();
  const { data } = useQueryFetchUsedItemQuestionAnswers({ useditemQuestionId: props.id });

  return (
    <div>
      <div onClick={changeIsToggle}>답변하기</div>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <div>
          <div>-------------------</div>
          <div>답변내용: {el.contents}</div>
          <div>유저이름: {el.user.name}</div>
          <div>답변시간: {el.createdAt}</div>
          <div>-------------------</div>
        </div>
      ))}

      {isToggle && (
        <form onSubmit={handleSubmit(createUsedItemQuestionAnswer({ id: props.id, changeIsToggle }))}>
          <input type="text" {...register("contents")} />
          <button>답변완료</button>
        </form>
      )}
    </div>
  );
}
