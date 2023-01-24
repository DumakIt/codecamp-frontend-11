import { CommentWriteUI } from "./BoardCommentWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS, CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT, DELETE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationCreateBoardCommentArgs, IMutationDeleteBoardCommentArgs, IMutationUpdateBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";

export default function CommentWrite() {
  const router = useRouter();
  const [CreateBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
  const [UpdateBoardComment] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);
  const [DeleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);
  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.fetchBoard),
    },
  });

  const [isEdit, setIsEdit] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const CheckValue = () => {
    if (!isEdit) {
      if (!writer || !password || !contents) {
        return alert("닉네임, 비밀번호, 댓글내용은 필수로 입력 해야합니다.");
      }
    }

    if (isEdit) {
      if (!password || !contents) {
        return alert("비밀번호, 댓글내용은 필수로 입력 해야합니다.");
      }
    }
    const rating = Number(prompt("이 게시물의 평점을 입력해 주세요.\n입력하지 않을시 0점으로 등록됩니다. (최대 5점, 숫자만 입력)", "5"));


    if (rating < 0 || rating > 5 || Number.isNaN(rating)) {
      return alert("평점은 0점 ~ 5점사이의 점수와 숫자만 부여할수 있습니다");
    }
    return rating;
  };


  const onClickCreate = async () => {
    try {
      const rating = CheckValue();
      if (rating !== 0 && !rating) return;

      await CreateBoardComment({
        variables: {
          boardId: String(router.query.fetchBoard),
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
              boardId: String(router.query.fetchBoard),
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdate = () => {
    try {
      const rating = CheckValue();
      if (!rating) return;

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
              boardId: String(router.query.fetchBoard),
            },
          },
        ],
      });
      alert('수정을 완료하였습니다');
    } catch (error) {
      console.log(error);
    }
  };
  

  const onClickUpdateMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement
    try {
      setBoardCommentId(target.className.replace(" css-opa42u", ""));
      setIsEdit(true);
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDelete = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement
    try {
      const DeletePassword = prompt("비밀번호를 입력해주세요.");
      DeleteBoardComment({
        variables: {
          password: DeletePassword,
          boardCommentId: target.className.replace(" css-opa42u", ""),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.fetchBoard),
            },
          },
        ],
      });
      alert("삭제를 완료히였습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  // prettier-ignore
  return <CommentWriteUI 
  isEdit={isEdit} 
  data={data} onChangeWriter={onChangeWriter} 
  onChangePassword={onChangePassword} 
  onChangeContents={onChangeContents} 
  onClickCreate={onClickCreate} 
  onClickUpdate={onClickUpdate} 
  onClickUpdateMove={onClickUpdateMove} 
  onClickDelete={onClickDelete} />;
}
