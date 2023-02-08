import { BoardListUI } from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const { data: lastListNum } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);

  const onClickTitle = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickBoardWrite = () => {
    router.push(`/boards/new`);
  };
  // prettier-ignore
  return(
    <BoardListUI
      data={data}
      lastListNum={lastListNum?.fetchBoardsCount}
      refetch={refetch}
      onClickTitle={onClickTitle}
      onClickBoardWrite={onClickBoardWrite}/>
  )
}
