import { useRouter } from "next/router"
import { useQuery, useMutation } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD } from "./BoatdDetail.queries"
import { useState } from "react"
import { BoardDetailUI } from "./BoardDetail.presenter"
import { IMutation, IMutationDeleteBoardArgs } from "../../../../commons/types/generated/types"





export default function BoardDetail() {
  const [opacity, setOpacity] = useState(0)
  const router =  useRouter()
  const [deleteBoard] = useMutation <Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs> (DELETE_BOARD)

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.fetchBoard
    }
  })

  const onClickDeleteBoard = () => {
    deleteBoard({
      variables: {
        boardId: String(router.query.fetchBoard)
      } 
    })
    router.push(`/boards/list`)
  }


  const AddressBoxWrapperOpacity = () => {
    if (opacity === 0) {
      setOpacity(100)
    } else {
      setOpacity(0)
    }
  }

  const onClickEdit = () => {
    router.push(`/boards/${router.query.fetchBoard}/edit`)
  }

  const onClickList = () => {
    router.push(`/boards/list`)
  }

  return(
    <BoardDetailUI 
    data = {data}
    AddressBoxWrapperOpacity = {AddressBoxWrapperOpacity}
    opacity = {opacity}
    onClickDeleteBoard = {onClickDeleteBoard}
    onClickEdit = {onClickEdit}
    onClickList = {onClickList}
    />
  )
}