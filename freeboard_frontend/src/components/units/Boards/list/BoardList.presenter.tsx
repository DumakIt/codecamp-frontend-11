import * as Style from "./BoardList.styles";
import { IBoardListUI, IEl } from "./BoardList.type";
import PaginationPage from "../../../commons/pagination/Pagination.container";
import BestBoards from "../bestBoards/BestBoards.container";
import Search from "../../../commons/search/Search.container";

export function BoardListUI(props: IBoardListUI) {
  return (
    <Style.ListContainer>
      <BestBoards />
      <Style.ListWrapper>
        <Style.ListHeader>
          <Search setSearch={props.setSearch} refetch={props.refetch} />
          <Style.WriteBtn onClick={props.onClickBoardWrite}>게시물 등록하기</Style.WriteBtn>
        </Style.ListHeader>
        <Style.ListTitle>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </Style.ListTitle>
        {props.data?.fetchBoards.map((el: IEl) => (
          <Style.ListBody key={el._id}>
            <div>{el._id.slice(-4)}</div>
            <div id={el._id} onClick={props.onClickTitle}>
              {el.title
                .replaceAll(props.search, `!$@#${props.search}!$@#`)
                .split("!$@#")
                .map((el) => (
                  <span key={el} style={{ backgroundColor: el === props.search ? "yellow" : "" }}>
                    {el}
                  </span>
                ))}
            </div>
            <div>{el.writer}</div>
            <div>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</div>
          </Style.ListBody>
        ))}
      </Style.ListWrapper>
      <PaginationPage lastListNum={props.lastListNum} refetch={props.refetch} />
    </Style.ListContainer>
  );
}
