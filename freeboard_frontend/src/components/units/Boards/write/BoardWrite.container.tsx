import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState } from "react";
import { BoardWriteUi } from "./BoardWrite.presenter";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "../../../../commons/types/generated/types";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";
import { Address } from "react-daum-postcode";
import { Modal } from "antd";

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
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [updateErr, setUpdateErr] = useState(false);
  const [updateErrMessage, setUpdateErrMessage] = useState("");

  function onChangeWriter(event: React.ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    event.target.value ? setWriterErr("") : setWriterErr("작성자 이름을 입력해 주세요.");
    event.target.value && password && title && contents ? setIsActive(true) : setIsActive(false);
  }

  function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    event.target.value ? setPasswordErr("") : setPasswordErr("비밀번호를 입력해 주세요.");
    writer && event.target.value && title && contents ? setIsActive(true) : setIsActive(false);
  }

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    event.target.value ? setTitleErr("") : setTitleErr("제목을 입력해 주세요.");
    writer && password && event.target.value && contents ? setIsActive(true) : setIsActive(false);
  }

  function onChangeContents(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    event.target.value ? setContentsErr("") : setContentsErr("내용을 입력해 주세요.");
    writer && password && title && event.target.value ? setIsActive(true) : setIsActive(false);
  }

  function onChangeYoutubeUrl(event: React.ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event: React.ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  const [writerErr, setWriterErr] = useState(props.isEdit ? "" : "작성자 이름을 입력해 주세요.");
  const [passwordErr, setPasswordErr] = useState("비밀번호를 입력해 주세요.");
  const [titleErr, setTitleErr] = useState(props.isEdit ? "" : "제목을 입력해 주세요.");
  const [ContentsErr, setContentsErr] = useState(props.isEdit ? "" : "내용을 입력해 주세요.");

  const onClickAddressBtn = () => {
    setAddressModalOpen(!addressModalOpen);
  };

  const AddressComplete = (data: Address) => {
    setAddressModalOpen(!addressModalOpen);
    setZipcode(data.zonecode);
    setAddress(data.address);
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
        console.log(error);

        Modal.error({
          title: "비밀번호가 일치하지 않습니다",
          content: "확인 후 다시 입력해주세요.",
        });
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
    onChangeAddressDetail = {onChangeAddressDetail}
    onClickAddressBtn = {onClickAddressBtn}
    AddressComplete = {AddressComplete}
    checkErr = {checkErr}
    onClickUpdate = {onClickUpdate}
    addressModalOpen = {addressModalOpen}
    zipcode={zipcode}
    address={address}
    writerErr = {writerErr}
    passwordErr = {passwordErr}
    titleErr = {titleErr}
    ContentsErr = {ContentsErr}
    updateErr = {updateErr}
    isActive = {isActive}
    isEdit = {props.isEdit}
    data = {props.data}
    />
  )
}