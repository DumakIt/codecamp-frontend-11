
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries" // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기 {}없이 사용
// import AnyThingName from "./BoardWrite.presenter" // export default로 한개만 가져오기 {}없이 사용 // 받아올때 이름도 변경가능
// import AnyThingName, { apple } from "./BoardWrite.presenter" // export default와 export 같이 가져오기

// import * as QQQ from "./BoardWrite.styles" // Emotion 한번에 다 불러오기
// QQQ.BlueButton
// QQQ.RedInput

export default function BoardWrite() {

  const [isActive, setIsActive] = useState(false)

  const [writer, setWriter] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()

  const [나의함수] = useMutation(나의그래프큐엘셋팅)


  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {                //  variables 이게 $ 역할을 함
        writer: writer,
        title: title,
        contents: contents
      }
    })
    console.log(result);
  }



  const onChangeWriter = (event) => {
    setWriter(event.target.value)

    event.target.value && title && contents ? setIsActive(true) : setIsActive(false)
  }
  

  const onChangeTitle = (event) => {
    setTitle(event.target.value)

    writer && event.target.value && contents ? setIsActive(true) : setIsActive(false)

  }

  const onChangeContents = (event) => {
    setContents(event.target.value)

    writer && title && event.target.value ? setIsActive(true)
    : setIsActive(false)
  }


  return(
    <div>
      <div>$$$$$$$ 여기는 페이지입니다 $$$$$$$</div>
        <BoardWriteUI 
          onClickSubmit={onClickSubmit} 
          onChangeWriter={onChangeWriter}
          onChangeTitle={onChangeTitle}
          onChangeContents={onChangeContents}
          isActive={isActive}
          />
          
      <div>$$$$$$$ 여기는 페이지입니다 $$$$$$$</div>
    </div>


  )
}