import { BoardListUI } from "./BoardList.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_BOARDS } from "./BoardList.queries"




export default function BoardList() {

  const {data} = useQuery(FETCH_BOARDS)
  const num = 10



  return(
    <BoardListUI
    data = {data}
    num = {num}

    />
    
  )
}