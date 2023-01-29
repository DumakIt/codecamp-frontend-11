import { BoardListUI } from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickTitle = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    router.push(`/boards/${target.id}`);
  };

  const onClickBoardWrite = () => {
    router.push(`/boards/new`);
  };

  // prettier-ignore
  return(
    <BoardListUI
    data = {data}
    onClickTitle={onClickTitle}
    onClickBoardWrite={onClickBoardWrite}
    />
    
  )
}
