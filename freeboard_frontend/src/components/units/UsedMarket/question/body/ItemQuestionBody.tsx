import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroller";
import { useSetIsActive } from "../../../../commons/hooks/custom/useSetIsActive";
import { useMutationDeleteUsedItemQuestion } from "../../../../commons/hooks/mutation/useMutationDeleteUsedItemQuestion";
import { useMutationUpdateUsedItemQuestion } from "../../../../commons/hooks/mutation/useMutationUpdateUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";

import QuestionAnswer from "../../../../commons/questionAnswer/questionAnswer";

interface IQuestionBodyProps {
  id: string;
}

export default function QuestionBody(props: IQuestionBodyProps): JSX.Element {
  const { data, FetchMore } = useQueryFetchUsedItemQuestions({ useditemId: props.id });
  const [onClickIsActive, isActive, setIsActive] = useSetIsActive();
  const [onClickIsOpen, isOpen, setIsOpen] = useSetIsActive();
  const { register, handleSubmit } = useForm();
  const { updateUsedItemQuestion } = useMutationUpdateUsedItemQuestion();
  const { deleteUsedItemQuestion } = useMutationDeleteUsedItemQuestion();

  return (
    <div>
      <InfiniteScroll loadMore={FetchMore} hasMore={true}>
        {data?.fetchUseditemQuestions.map((el) =>
          el._id !== isActive ? (
            <div key={el._id}>
              <div>{el.contents}</div>
              <div>{el.user.name}</div>
              <div>{el.createdAt}</div>
              <button id={el._id} onClick={onClickIsActive}>
                수정하기
              </button>
              <button onClick={deleteUsedItemQuestion({ useditemQuestionId: el._id })}>삭제하기</button>
              <QuestionAnswer id={el._id} isActive={isActive} onClickIsActive={onClickIsActive} setIsActive={setIsActive} isOpen={isOpen} onClickIsOpen={onClickIsOpen} setIsOpen={setIsOpen} />
            </div>
          ) : (
            <form onSubmit={handleSubmit(updateUsedItemQuestion({ id: el._id, setIsActive }))}>
              <input type="text" placeholder="수정할 내용을 입력해 주세요" {...register("contents")} />
              <button>수정완료</button>
            </form>
          )
        ) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
