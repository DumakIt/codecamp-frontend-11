import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"
import {Container, AddressBox, Triangle, UserInfoWrapper, UserInfoDataWrapper, UserInfoDataWriter, UserInfoUpdatedAt, UserInfoIconWrapper, UserInfoIconLink, UserInfoIconLocation, DivideLine, BoardTitle, BoardImg, BoardContents, BoardYoutubeWrapper, BoardYoutube, BoardLikeWrapper, BoardLikeBox, BoardLikeIcon, BoardLikeCount, BoardDisLikeBox, BoardDisLikeIcon, BoardDisLikeCount} from "../../../styles/boards/fetchBoard/styles"
import { useState } from "react"

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
  fetchBoard(
    boardId: $boardId
  ){
    writer
    title
    contents
    youtubeUrl
    createdAt
    boardAddress{
      zipcode
      address
      addressDetail
    }
    likeCount
    dislikeCount
  }
}
`



export default function fetchBoard() {
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
    <div>
      <Container>
        <div style={{opacity: opacity}}>
          <AddressBox>
            <div>{data ?.fetchBoard.boardAddress.address}</div>
            <div>{data ?.fetchBoard.boardAddress.addressDetail}</div>
          </AddressBox>
          <Triangle src="/fetchBoard/triangle.png"/>
        </div>
        <UserInfoWrapper>
          <img src="/fetchBoard/profile.png"/>
          <UserInfoDataWrapper>
            <UserInfoDataWriter>{data ?.fetchBoard.writer}</UserInfoDataWriter>
            <UserInfoUpdatedAt>Date : {data ?.fetchBoard.createdAt.slice(0,10).replaceAll("-", ".")}</UserInfoUpdatedAt>
          </UserInfoDataWrapper>
            <UserInfoIconWrapper>
              <UserInfoIconLink src="/fetchBoard/link.png"/>
              <UserInfoIconLocation onClick={AddressBoxWrapperOpacity}>
              </UserInfoIconLocation>
            </UserInfoIconWrapper>
        </UserInfoWrapper>
        <DivideLine/>

        <div>
          <BoardTitle>{data ?.fetchBoard.title}</BoardTitle>
          <BoardImg/>
          <BoardContents>{data ?.fetchBoard.contents}</BoardContents> 
        </div>
        <BoardYoutubeWrapper>
          <BoardYoutube src={data ?.fetchBoard.youtubeUrl.replace("watch?v=", "embed/")}/>
        </BoardYoutubeWrapper>
        <BoardLikeWrapper>
          <BoardLikeBox>
            <BoardLikeIcon src="/fetchBoard/like.png"/>
            <BoardLikeCount>{data ?.fetchBoard.likeCount}</BoardLikeCount>
          </BoardLikeBox>
          <BoardDisLikeBox>
          <BoardDisLikeIcon src="/fetchBoard/disLike.png"/>
          <BoardDisLikeCount>{data ?.fetchBoard.dislikeCount}</BoardDisLikeCount>
          </BoardDisLikeBox>
        </BoardLikeWrapper>
      </Container>
    </div>







  )
}