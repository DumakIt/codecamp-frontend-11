import {Container, AddressBox, Triangle, UserInfoWrapper, UserInfoDataWrapper, UserInfoDataWriter, UserInfoUpdatedAt, UserInfoIconWrapper, UserInfoIconLink, UserInfoIconLocation, DivideLine, BoardTitle, BoardImg, BoardContents, BoardYoutubeWrapper, BoardYoutube, BoardLikeWrapper, BoardLikeBox, BoardLikeIcon, BoardLikeCount, BoardDisLikeBox, BoardDisLikeIcon, BoardDisLikeCount} from "./BoardDetail.styles"

export function BoardDetailUI(props) {

  return(
    <div>
      <Container>
        <div style={{opacity: props.opacity}}>
          <AddressBox>
            <div>{props.data ?.fetchBoard.boardAddress.address}</div>
            <div>{props.data ?.fetchBoard.boardAddress.addressDetail}</div>
          </AddressBox>
          <Triangle src="/fetchBoard/triangle.png"/>
        </div>
        <UserInfoWrapper>
          <img src="/fetchBoard/profile.png"/>
          <UserInfoDataWrapper>
            <UserInfoDataWriter>{props.data ?.fetchBoard.writer}</UserInfoDataWriter>
            <UserInfoUpdatedAt>Date : {props.data ?.fetchBoard.createdAt.slice(0,10).replaceAll("-", ".")}</UserInfoUpdatedAt>
          </UserInfoDataWrapper>
            <UserInfoIconWrapper>
              <UserInfoIconLink src="/fetchBoard/link.png"/>
              <UserInfoIconLocation onClick={props.AddressBoxWrapperOpacity}>
              </UserInfoIconLocation>
            </UserInfoIconWrapper>
        </UserInfoWrapper>
        <DivideLine/>

        <div>
          <BoardTitle>{props.data ?.fetchBoard.title}</BoardTitle>
          <BoardImg/>
          <BoardContents>{props.data ?.fetchBoard.contents}</BoardContents> 
        </div>
        <BoardYoutubeWrapper>
          <BoardYoutube src={props.data ?.fetchBoard.youtubeUrl.replace("watch?v=", "embed/")}/>
        </BoardYoutubeWrapper>
        <BoardLikeWrapper>
          <BoardLikeBox>
            <BoardLikeIcon src="/fetchBoard/like.png"/>
            <BoardLikeCount>{props.data ?.fetchBoard.likeCount}</BoardLikeCount>
          </BoardLikeBox>
          <BoardDisLikeBox>
          <BoardDisLikeIcon src="/fetchBoard/disLike.png"/>
          <BoardDisLikeCount>{props.data ?.fetchBoard.dislikeCount}</BoardDisLikeCount>
          </BoardDisLikeBox>
        </BoardLikeWrapper>
      </Container>
    </div>
  )
}