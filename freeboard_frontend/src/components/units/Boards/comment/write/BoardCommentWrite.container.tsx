import { CommentWriteUI } from "./BoardCommentWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS, CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT, DELETE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationCreateBoardCommentArgs, IMutationDeleteBoardCommentArgs, IMutationUpdateBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function CommentWrite() {
  const router = useRouter();
  const [CreateBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
  const [UpdateBoardComment] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);
  const [DeleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.fetchBoard),
    },
  });

  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [modalPassword, setModalPassword] = useState("");

  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeModalPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalPassword(event.target.value);
  };

  const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const inputValueClear = () => {
    setWriter("");
    setPassword("");
    setContents("");
  };

  const changeIsOpen = () => {
    if (!writer || !password || !contents) {
      return Modal.warning({
        content: "닉네임, 비밀번호, 댓글내용은 필수로 입력 해야합니다.",
        okText: "확인",
      });
    }
    setIsOpen((prev) => !prev);
  };

  // 여기요 여기!!!!

  const commentCreate = async (value: number) => {
    setRating((value) => value);
    setIsOpen((prev) => !prev);
    try {
      if (!router || typeof router.query.fetchBoard !== "string") return <></>;
      await CreateBoardComment({
        variables: {
          boardId: router.query.fetchBoard,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.fetchBoard,
            },
          },
        ],
      });
      inputValueClear();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdate = () => {
    if (!password || !contents) {
      return Modal.warning({
        content: "비밀번호, 댓글내용은 필수로 입력 해야합니다.",
        okText: "확인",
      });
    }

    try {
      UpdateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.fetchBoard,
            },
          },
        ],
      });
      inputValueClear();
      setIsEdit(false);
      Modal.success({
        content: "수정을 완료하였습니다",
        okText: "확인",
      });
    } catch (error) {
      Modal.warning({
        content: "비밀번호가 일치하지 않습니다",
        okText: "확인",
      });
    }
  };

  const onClickUpdateMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    try {
      setBoardCommentId(target.id);
      setIsEdit(true);

      window.scrollTo({
        top: 2000,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ChangeIsOpenDelete = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    setIsOpenDelete((prev) => !prev);
    setBoardCommentId(target.id);
    setModalPassword("");
  };

  const onClickDelete = async () => {
    try {
      await DeleteBoardComment({
        variables: {
          password: modalPassword,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.fetchBoard,
            },
          },
        ],
      });
      setIsOpenDelete((prev) => !prev);
      Modal.success({
        content: "삭제를 완료하였습니다",
        okText: "확인",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        Modal.error({
          title: "비밀번호가 일치하지 않습니다",
          content: "확인 후 다시 입력해주세요.",
        });
      }
    }
  };

  const moreComments = () => {
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return { fetchBoardComments: [...prev.fetchBoardComments] };
        return { fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments] };
      },
    });
  };

  // prettier-ignore

  return <CommentWriteUI 
    isEdit={isEdit} 
    isOpen={isOpen}
    isOpenDelete={isOpenDelete}
    data={data}
    changeIsOpen={changeIsOpen}
    onChangeWriter={onChangeWriter}
    onChangePassword={onChangePassword} 
    onChangeContents={onChangeContents} 
    commentCreate={commentCreate} 
    onClickUpdate={onClickUpdate} 
    onClickUpdateMove={onClickUpdateMove} 
    onClickDelete={onClickDelete}
    ChangeIsOpenDelete={ChangeIsOpenDelete}
    onChangeModalPassword={onChangeModalPassword}
    moreComments={moreComments}
    rating={rating}
    writer={writer} 
    password={password} 
    contents={contents} 
    
    />;
}
