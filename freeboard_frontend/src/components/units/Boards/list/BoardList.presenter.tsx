import * as Style from "./BoardList.styles";
import { IBoardListUI, IEl } from "./BoardList.type";
import PaginationPage from "../../../commons/pagination/Pagination.container";

export function BoardListUI(props: IBoardListUI) {
  return (
    <div>
      <Style.ListWrapper>
        <Style.ListHeader>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </Style.ListHeader>
        {props.data?.fetchBoards.map((el: IEl) => (
          <Style.ListBody key={el._id}>
            <div>{el._id.slice(-4)}</div>
            <div id={el._id} onClick={props.onClickTitle}>
              {el.title}
            </div>
            <div>{el.writer}</div>
            <div>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</div>
          </Style.ListBody>
        ))}
        <Style.WriteBtn onClick={props.onClickBoardWrite}>게시물 등록하기</Style.WriteBtn>
      </Style.ListWrapper>
      <PaginationPage lastListNum={props.lastListNum} refetch={props.refetch} />
    </div>
  );
}
