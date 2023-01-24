import * as Style from "./BoardList.styles"
import { IBoardListUI, IEl } from "./BoardList.type"


export function BoardListUI(props: IBoardListUI) {

  return(
    <Style.ListContainer>
      <Style.ListHeader>
        <div>번호</div>
        <div>제목</div>
        <div>작성자</div>
        <div>날짜</div>
      </Style.ListHeader>
      {props.data ?.fetchBoards.map((el: IEl) => (
        <Style.ListBody key={el._id}>
          <div>{el._id.slice(-4)}</div>
          <div id={el._id} onClick={props.onClickTitle}>{el.title}</div>
          <div>{el.writer}</div>
          <div>{el.createdAt.slice(0,10).replaceAll("-", ".")}</div>
        </Style.ListBody>
      ))}
  </Style.ListContainer>
  )
}