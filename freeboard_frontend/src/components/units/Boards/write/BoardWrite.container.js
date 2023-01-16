import { useRouter } from "next/router"
import { useMutation} from "@apollo/client"
import { CREATE_BOARD } from "./BoardWrite.queries"
import {useState} from "react"
import { BoardWriteUi } from "./BoardWrite.presenter"



export default function BoardWrite() {
  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)

  const[writer, setWriter] = useState("")
  const[password, setPassword] = useState("")
  const[title, setTitle] = useState("")
  const[contents, setContents] = useState("")
  const[youtubeUrl, setYoutubeUrl] = useState("")
  const[zipcode, setZipcode] = useState("")
  const[address, setAddress] = useState("")
  const[addressDetail, setAddressDetail] = useState("")
  
  function onChangeWriter(event) {
    setWriter(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  function onChangeContents(event) {
    setContents(event.target.value)
  }

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value)
  }
  
  function onChangeZipcode(event) {
    setZipcode(event.target.value)
  }

  function onChangeAddress(event) {
    setAddress(event.target.value)
  }

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value)
  }

  const[writerErr, setWriterErr] = useState("")
  const[passwordErr, setPasswordErr] = useState("")
  const[titleErr, setTitleErr] = useState("")
  const[ContentsErr, setContentsErr] = useState("")
  
  const checkErr = async function() {

    if (!writer) {
      setWriterErr("작성자 이름을 입력해 주세요.")
    } else {
      setWriterErr("")
    }

    if (!password) {
      setPasswordErr("비밀번호를 입력해 주세요.")
    } else {
      setPasswordErr("")
    }

    if (!title) {
      setTitleErr("제목을 입력해 주세요.")
    } else {
      setTitleErr("")
    }

    if (!contents) {
      setContentsErr("내용을 입력해 주세요.")
    } else {
      setContentsErr("")
    }

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

              }
            }
          }
        })
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error) {
        console.log(error.message);
      }
    }
  }

  //자바스크립트 쓰는 곳

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
    writerErr = {writerErr}
    passwordErr = {passwordErr}
    titleErr = {titleErr}
    ContentsErr = {ContentsErr}

    />
  )
}