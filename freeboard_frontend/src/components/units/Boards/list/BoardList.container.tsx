import { BoardListUI } from "./BoardList.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_BOARDS } from "./BoardList.queries"
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import { useRouter } from "next/router"



export default function BoardList() {
  const router = useRouter()
  const {data} = useQuery <Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs> (FETCH_BOARDS)

  const onClickTitle = (event) => {
    console.log("aaa");
    router.push(`/boards/${event.target.id}`)
  }


  return(
    <BoardListUI
    data = {data}
    onClickTitle={onClickTitle}
    />
    
  )
}