import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import { useState } from "react";
import { BoardDetailUI } from "./BoardDetail.presenter";
import { IMutation, IMutationDeleteBoardArgs, IMutationDislikeBoardArgs, IMutationLikeBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const [opacity, setOpacity] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const router = useRouter();
  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD);
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);
  const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.fetchBoard),
    },
  });
  const deleteModal = () => {
    setIsDelete((prev) => !prev);
  };

  const onClickDeleteBoard = () => {
    if (!router || typeof router.query.fetchBoard !== "string") return <></>;
    deleteModal();

    deleteBoard({
      variables: {
        boardId: router.query.fetchBoard,
      },
    });
    router.push(`/boards`);
  };

  const AddressBoxWrapperOpacity = () => {
    if (opacity === 0) {
      setOpacity(100);
    } else {
      setOpacity(0);
    }
  };

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: String(router.query.fetchBoard),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.fetchBoard),
          },
        },
      ],
    });
  };

  const onClickDisLike = () => {
    dislikeBoard({
      variables: {
        boardId: String(router.query.fetchBoard),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.fetchBoard),
          },
        },
      ],
    });
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query.fetchBoard}/edit`);
  };

  const onClickList = () => {
    router.push(`/boards`);
  };

  // prettier-ignore
  return(
    <BoardDetailUI 
    data = {data}
    AddressBoxWrapperOpacity = {AddressBoxWrapperOpacity}
    opacity = {opacity}
    onClickDeleteBoard = {onClickDeleteBoard}
    onClickEdit = {onClickEdit}
    onClickList = {onClickList}
    onClickLike={onClickLike}
    onClickDisLike={onClickDisLike}
    isDelete = {isDelete}
    deleteModal={deleteModal}
    />
  )
}
