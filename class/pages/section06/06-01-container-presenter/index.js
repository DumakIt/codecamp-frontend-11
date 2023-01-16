import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container"


export default function GraphqlMutationPage() {

  // 한 줄일때는 괄호() 없어도 된다
  return( 
    <div>
      <div>######## 여기는 페이지입니다 ########</div>
      <BoardWrite/>
      <div>######## 여기는 페이지입니다 ########</div>
    </div>
  )
}