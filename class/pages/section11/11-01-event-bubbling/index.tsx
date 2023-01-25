import { gql, useQuery } from "@apollo/client"
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
	fetchBoards{
    number
    writer
    title
    contents
  }
}
`



export default function StaticRoutingMovedPage() {

  const { data } = useQuery(FETCH_BOARDS)
  console.log(data ?.fetchBoards);


  const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  }


  return (
    <div>
      {data ?.fetchBoards.map((el:any) => (
      <div key={el.number} id={el.writer} onClick={onClickWriter}>
        <span><input type="checkbox"/></span>
        <span style={{margin: "10px"}}>{el.number}</span>
        <span style={{margin: "10px"}}>{el.title}</span>
        <span style={{margin: "10px"}}>{el.writer}</span>
      </div>
      ))}
    </div>

  )

}
