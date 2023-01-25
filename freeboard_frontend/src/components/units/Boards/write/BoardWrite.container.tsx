import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState } from "react";
import { BoardWriteUi } from "./BoardWrite.presenter";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "../../../../commons/types/generated/types";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [isActive, setIsActive] = useState(false);

  function onChangeWriter(event: React.ChangeEvent<HTMLInputElement>) {
    activeBtn(event);
    event.target.value ? setWriterErr("") : setWriterErr("작성자 이름을 입력해 주세요.");
    event.target.value && password && title && contents ? setIsActive(true) : setIsActive(false);
  }

  function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    activeBtn(event);
    event.target.value ? setPasswordErr("") : setPasswordErr("비밀번호를 입력해 주세요.");
    writer && event.target.value && title && contents ? setIsActive(true) : setIsActive(false);
  }

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    activeBtn(event);
    event.target.value ? setTitleErr("") : setTitleErr("제목을 입력해 주세요.");
    writer && password && event.target.value && contents ? setIsActive(true) : setIsActive(false);
  }

  function onChangeContents(event: React.ChangeEvent<HTMLTextAreaElement>) {
    activeBtn(event);
    event.target.value ? setContentsErr("") : setContentsErr("내용을 입력해 주세요.");
    writer && password && title && event.target.value ? setIsActive(true) : setIsActive(false);
  }

  function onChangeYoutubeUrl(event: React.ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeZipcode(event: React.ChangeEvent<HTMLInputElement>) {
    setZipcode(event.target.value);
  }

  function onChangeAddress(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }

  function onChangeAddressDetail(event: React.ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  const [writerErr, setWriterErr] = useState(props.isEdit ? "" : "작성자 이름을 입력해 주세요.");
  const [passwordErr, setPasswordErr] = useState("비밀번호를 입력해 주세요.");
  const [titleErr, setTitleErr] = useState(props.isEdit ? "" : "제목을 입력해 주세요.");
  const [ContentsErr, setContentsErr] = useState(props.isEdit ? "" : "내용을 입력해 주세요.");

  const activeBtn = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWriter(event.target.value);
    setPassword(event.target.value);
    setTitle(event.target.value);
    setContents(event.target.value);
  };

  const checkErr = async function () {
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
  };

  const onClickUpdate = async () => {
    if (!router || typeof router.query.fetchBoard !== "string") return <></>;
    try {
      const myVariables: IMyVariables = {
        password: password,
        boardId: router.query.fetchBoard,
        updateBoardInput: {
          boardAddress: {
            zipcode,
            address,
            addressDetail,
          },
        },
      };

      if (title) {
        myVariables.updateBoardInput.title = title;
      }
      if (contents) {
        myVariables.updateBoardInput.contents = contents;
      }
      if (youtubeUrl) {
        myVariables.updateBoardInput.youtubeUrl = youtubeUrl;
      }

      await updateBoard({
        variables: myVariables,
      });
      router.push(`/boards/${router.query.fetchBoard}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  // prettier-ignore
  return (
    <BoardWriteUi
    onChangeWriter = {onChangeWriter}
    onChangePassword = {onChangePassword}
    onChangeTitle = {onChangeTitle}
    onChangeContents = {onChangeContents}
    onChangeYoutubeUrl = {onChangeYoutubeUrl}
    onChangeZipcode = {onChangeZipcode}
    onChangeAddress = {onChangeAddress}
    onChangeAddressDetail = {onChangeAddressDetail}
    checkErr = {checkErr}
    onClickUpdate = {onClickUpdate}
    writerErr = {writerErr}
    passwordErr = {passwordErr}
    titleErr = {titleErr}
    ContentsErr = {ContentsErr}
    isActive = {isActive}
    isEdit = {props.isEdit}
    data = {props.data}
    />
  )
}
