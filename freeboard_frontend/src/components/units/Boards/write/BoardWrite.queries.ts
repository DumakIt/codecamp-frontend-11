import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
	createBoard(
    createBoardInput: $createBoardInput
  ){
    _id
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
  }
}
`

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {
    updateBoard(
      updateBoardInput: $updateBoardInput,
      password: $password,
      boardId: $boardId,
    ){
      _id
      writer
    }
  }
`

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
  fetchBoard(
    boardId: $boardId
  ){
    writer
    title
    contents
    likeCount
    dislikeCount
    youtubeUrl
    boardAddress{
      zipcode
      address
      addressDetail
    }
  }
}
`