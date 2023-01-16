import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./BoatdDetail.queries"
import { useState } from "react"
import { BoardDetailUI } from "./BoardDetail.presenter"





export default function BoardDetail() {
  const [opacity, setOpacity] = useState(0)
  const router =  useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.fetchBoard
    }
  })


  const AddressBoxWrapperOpacity = () => {
    if (opacity === 0) {
      setOpacity(100)
    } else {
      setOpacity(0)
    }
  }


  return(
    <BoardDetailUI 
    data = {data}
    AddressBoxWrapperOpacity = {AddressBoxWrapperOpacity}
    opacity = {opacity}
    />

  )
}