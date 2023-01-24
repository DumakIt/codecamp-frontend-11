import { gql } from '@apollo/client';

export const FETCH_BOARD_COMMENTS = gql`
query fetchBoardComments($boardId: ID!) {
  fetchBoardComments(
    boardId: $boardId
  ){
    _id
    writer
    contents
    rating
    createdAt
  }
}
`

export const CREATE_BOARD_COMMENT = gql`
mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!){
	createBoardComment(
    createBoardCommentInput: $createBoardCommentInput
    boardId: $boardId
  ){
    _id
    contents
    rating
    writer
    createdAt
  }
}
`

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment($boardCommentId: ID!, $password: String, $updateBoardCommentInput: UpdateBoardCommentInput!){
  updateBoardComment(
    updateBoardCommentInput: $updateBoardCommentInput
    password: $password
    boardCommentId: $boardCommentId
  ){
    _id
  }
}
`

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
	deleteBoardComment(
    password: $password
    boardCommentId: $boardCommentId
  )
}
`