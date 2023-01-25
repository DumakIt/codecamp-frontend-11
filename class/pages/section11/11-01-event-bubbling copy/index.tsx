import { gql, useQuery } from "@apollo/client"
import { Checkbox } from "antd";
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


  // const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  // }

  const qqq1 = () => {
    alert(`1번클릭`);
  }


  const qqq4 = (event) => {
    event.stopPropagation()
    alert(`4번클릭`);
  }


  return (
    <div>
      {data ?.fetchBoards.map((el:any) => (
      <div key={el.number} id={el.writer} onClick={qqq1}>
        <Checkbox/>
        <span style={{margin: "10px"}} onClick={qqq4}>{el.number}</span>
        <span style={{margin: "10px"}}>{el.title}</span>
        <span style={{margin: "10px"}}>{el.writer}</span>
      </div>
      ))}
    </div>

  )

}
