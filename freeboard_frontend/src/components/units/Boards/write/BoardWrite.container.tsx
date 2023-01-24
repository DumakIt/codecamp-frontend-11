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
    setWriter(event.target.value);
    event.target.value && password && title && contents ? setIsActive(true) : setIsActive(false);
    Err();
  }

  function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    writer && event.target.value && title && contents ? setIsActive(true) : setIsActive(false);
    Err();
  }

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    writer && password && event.target.value && contents ? setIsActive(true) : setIsActive(false);
    Err();
  }

  function onChangeContents(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    writer && password && title && event.target.value ? setIsActive(true) : setIsActive(false);
    Err();
  }

  function onChangeYoutubeUrl(event: React.ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
    Err();
  }

  function onChangeZipcode(event: React.ChangeEvent<HTMLInputElement>) {
    setZipcode(event.target.value);
    Err();
  }

  function onChangeAddress(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
    Err();
  }

  function onChangeAddressDetail(event: React.ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
    Err();
  }

  const [writerErr, setWriterErr] = useState("작성자 이름을 입력해 주세요.");
  const [passwordErr, setPasswordErr] = useState("비밀번호를 입력해 주세요.");
  const [titleErr, setTitleErr] = useState("제목을 입력해 주세요.");
  const [ContentsErr, setContentsErr] = useState("내용을 입력해 주세요.");

  const Err = function () {
    if (!writer) {
      setWriterErr("작성자 이름을 입력해 주세요.");
    } else {
      setWriterErr("");
    }

    if (!password) {
      setPasswordErr("비밀번호를 입력해 주세요.");
    } else {
      setPasswordErr("");
    }

    if (!title) {
      setTitleErr("제목을 입력해 주세요.");
    } else {
      setTitleErr("");
    }

    if (!contents) {
      setContentsErr("내용을 입력해 주세요.");
    } else {
      setContentsErr("");
    }
  };


  const checkErr = async function () {
    if (writer && password && title && contents) {
      try {
        const result:any = await createBoard({
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
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    try {
      const myVariables: IMyVariables = {
        password: password,
        boardId: String(router.query.fetchBoard),
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
    } catch (error: any) {
      console.log(error.message);
    }
  };

  

  console.log(props.data);

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
