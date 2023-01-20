import BoardWrite from "../../../../src/components/units/Boards/write/BoardWrite.container"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "../../../../src/components/units/Boards/write/BoardWrite.queries"
import { useRouter } from "next/router"

export default function updateBoardPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.fetchBoard
    }
  })



  return(
    <BoardWrite isEdit = {true} data={data}/>
  )
}