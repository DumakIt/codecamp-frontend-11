
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries" // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기 {}없이 사용
import { useRouter } from "next/router"
// import AnyThingName from "./BoardWrite.presenter" // export default로 한개만 가져오기 {}없이 사용 // 받아올때 이름도 변경가능
// import AnyThingName, { apple } from "./BoardWrite.presenter" // export default와 export 같이 가져오기

// import * as QQQ from "./BoardWrite.styles" // Emotion 한번에 다 불러오기
// QQQ.BlueButton
// QQQ.RedInput

export default function BoardWrite(props) {

  const router = useRouter()

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [나의함수] = useMutation(나의그래프큐엘셋팅)
  const [updateBoard] = useMutation(UPDATE_BOARD)


  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {                //  variables 이게 $ 역할을 함
        writer: writer,
        title: title,
        contents: contents
      }
    })
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async () => {
    const myVariables = { number: Number(router.query.number) }

    if (writer) myVariables.writer = writer

    if (title) myVariables.title = title

    if (contents) myVariables.contents = contents
    
    // 여기서 수정하기 하자
    const result = await updateBoard({
      variables: myVariables
    })
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
    
  }

  return(
    <div>
      <div>$$$$$$$ 여기는 페이지입니다 $$$$$$$</div>
        <BoardWriteUI 
          onClickSubmit={onClickSubmit} 
          onClickUpdate={onClickUpdate}
          onChangeWriter={onChangeWriter}
          onChangeTitle={onChangeTitle}
          onChangeContents={onChangeContents}
          isEdit={props.isEdit}
          data={props.data} // undefined이거나, data 이거나 둘 중 하나!
          />
          
      <div>$$$$$$$ 여기는 페이지입니다 $$$$$$$</div>
    </div>


  )
}