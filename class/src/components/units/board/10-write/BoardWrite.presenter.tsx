import {BlueButton, RedInput} from "./BoardWrite.styles"
import { IBoardWriteUIProps } from "./BoardWrite.types"




export default function BoardWriteUI(props: IBoardWriteUIProps) {
  

  return(

    <div>
      <div>@@@@@ 여기는 프리젠터입니다 @@@@@</div>
      <div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data ? props.data?.fetchBoard.writer : ""}/>
      제목: <input type="text" onChange={props.onChangeTitle}  defaultValue={props.data ? props.data.fetchBoard.title : ""}/>
      내용: <input type="text" onChange={props.onChangeContents}  defaultValue={props.data ? props.data.fetchBoard.contents : ""}/>
      <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
      </div>
      <div>@@@@@ 여기는 프리젠터입니다 @@@@@</div>
    </div>



  )
}