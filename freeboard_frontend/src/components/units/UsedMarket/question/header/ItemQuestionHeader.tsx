import { useForm } from "react-hook-form";
import { useMutationCreateUsedItemQuestion } from "../../../../commons/hooks/mutation/useMutationCreateUsedItemQuestion";

interface IQuestionHeaderProps {
  id: string;
}

export default function QuestionHeader(props: IQuestionHeaderProps): JSX.Element {
  const { register, handleSubmit } = useForm();
  const { createUsedItemQuestion } = useMutationCreateUsedItemQuestion();
  return (
    <form onSubmit={handleSubmit(createUsedItemQuestion(props.id))}>
      <input type="text" placeholder="질문을 입력해 주세요" {...register("contents")} />
      <button>등록하기</button>
    </form>
  );
}
