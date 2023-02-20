import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroller";
import { useSetIsActive } from "../../../../commons/hooks/custom/useSetIsActive";
import { useMutationUpdateUsedItemQuestion } from "../../../../commons/hooks/mutation/useMutationUpdateUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";

import QuestionAnswer from "../../../../commons/questionAnswer/questionAnswer";

interface IQuestionBodyProps {
  id: string;
}

export default function QuestionBody(props: IQuestionBodyProps): JSX.Element {
  const { data, FetchMore } = useQueryFetchUsedItemQuestions({ useditemId: props.id });
  const { isActive, onClickIsActive, setIsActive } = useSetIsActive();
  const { register, handleSubmit } = useForm();
  const { updateUsedItemQuestion } = useMutationUpdateUsedItemQuestion();

  return (
    <div>
      <InfiniteScroll loadMore={FetchMore} hasMore={true}>
        {data?.fetchUseditemQuestions.map((el) =>
          el._id !== isActive ? (
            <div key={el._id}>
              <div>{el.contents}</div>
              <div>{el.user.name}</div>
              <div>{el.createdAt}</div>
              <div id={el._id} onClick={onClickIsActive}>
                수정하기
              </div>
              <QuestionAnswer id={el._id} isActive={isActive} setIsActive={setIsActive} onClickIsActive={onClickIsActive} />
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
