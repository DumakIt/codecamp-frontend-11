import { BoardListUI } from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export default function BoardList() {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS, {
    variables: {
      search,
    },
  });
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
      search={search}
      lastListNum={lastListNum?.fetchBoardsCount}
      refetch={refetch}
      setSearch={setSearch}
      onClickTitle={onClickTitle}
      onClickBoardWrite={onClickBoardWrite}/>
  )
}
