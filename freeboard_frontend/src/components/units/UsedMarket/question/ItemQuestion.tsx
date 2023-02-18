import { useRouterIdCheck } from "../../../commons/hooks/custom/useRouterIdCheck";
import QuestionBody from "./body/ItemQuestionBody";
import QuestionHeader from "./header/ItemQuestionHeader";

export default function ItemQuestion(): JSX.Element {
  const { id } = useRouterIdCheck("fetchItem");
  return (
    <>
      <QuestionHeader id={id} />
      <QuestionBody id={id} />
    </>
  );
}
