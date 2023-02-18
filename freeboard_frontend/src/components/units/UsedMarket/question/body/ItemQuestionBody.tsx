import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";

interface IQuestionBodyProps {
  id: string;
}

export default function QuestionBody(props: IQuestionBodyProps): JSX.Element {
  const { data } = useQueryFetchUsedItemQuestions({ useditemId: props.id });

  return (
    <>
      {data?.fetchUseditemQuestions.map((el) => (
        <div key={el._id}>
          <div>{el.contents}</div>
          <div>{el.user.name}</div>
          <div>{el.createdAt}</div>
        </div>
      ))}
    </>
  );
}
