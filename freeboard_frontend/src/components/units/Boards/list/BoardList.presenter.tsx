import { Table, TableThNum, TableTrList, TableThTitle, TableThWriter, TableThDate, TableTr } from "./BoardList.styles"
import { IEl } from "./BoardList.type"

export function BoardListUI(props: any) {

  return(
    <>
    <Table>
      <TableTr>
        <TableThNum>번호</TableThNum>
        <TableThTitle>제목</TableThTitle>
        <TableThWriter>작성자</TableThWriter>
        <TableThDate>날짜</TableThDate>
      </TableTr>
      {props.data ?.fetchBoards.map((el: IEl) => (
        <TableTr>
          <TableTrList>{props.num}</TableTrList>
          <TableTrList>{el.title}</TableTrList>
          <TableTrList>{el.writer}</TableTrList>
          <TableTrList>{el.createdAt.slice(0,10).replaceAll("-", ".")}</TableTrList>
        </TableTr>
      ))}
    </Table>
  </>
  )
}