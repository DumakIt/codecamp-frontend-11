import { useRouter } from "next/router"
import { useMutation} from "@apollo/client"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import {useState} from "react"
import { BoardWriteUi } from "./BoardWrite.presenter"



export default function BoardWrite(props) {
  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const[writer, setWriter] = useState()
  const[password, setPassword] = useState()
  const[title, setTitle] = useState()
  const[contents, setContents] = useState()
  const[youtubeUrl, setYoutubeUrl] = useState()
  const[zipcode, setZipcode] = useState()
  const[address, setAddress] = useState()
  const[addressDetail, setAddressDetail] = useState()

  const[isActive, setIsActive] = useState(false)
  
  function onChangeWriter(event) {
    setWriter(event.target.value)
    event.target.value && password && title && contents ? setIsActive(true) : setIsActive(false)
    Err()
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
    writer && event.target.value && title && contents ? setIsActive(true) : setIsActive(false)
    Err()
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
    writer && password && event.target.value && contents ? setIsActive(true) : setIsActive(false)
    Err()
  }

  function onChangeContents(event) {
    setContents(event.target.value)
    writer && password && title && event.target.value ? setIsActive(true) : setIsActive(false)
    Err()
  }

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value)
    Err()
  }
  
  function onChangeZipcode(event) {
    setZipcode(event.target.value)
    Err()
  }

  function onChangeAddress(event) {
    setAddress(event.target.value)
    Err()
  }

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value)
    Err()
  }

  const[writerErr, setWriterErr] = useState("작성자 이름을 입력해 주세요.")
  const[passwordErr, setPasswordErr] = useState("비밀번호를 입력해 주세요.")
  const[titleErr, setTitleErr] = useState("제목을 입력해 주세요.")
  const[ContentsErr, setContentsErr] = useState("내용을 입력해 주세요.")
  
  const Err = function() {
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
  }
  
  const checkErr = async function() {

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


  const onClickUpdate = async () => {
    await updateBoard({
      variables: {
        updateBoardInput: {
          title,
          contents,
          youtubeUrl,
          boardAddress: {
            zipcode,
            address,
            addressDetail 
          },
          password,
          boardId: router.query.fetchBoard
        }
      }
    })
    router.push(`/boards/${router.query.fetchBoard}`)
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
    onClickUpdate = {onClickUpdate}
    writerErr = {writerErr}
    passwordErr = {passwordErr}
    titleErr = {titleErr}
    ContentsErr = {ContentsErr}
    isActive = {isActive}
    isEdit = {props.isEdit}
    />
  )
}