import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      message
      number
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs. setInputs] = useState({
    writer:"",
    title:"",
    contents:""
  })

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs
      },
    });
    console.log(result);
  };

  const onChangeinputs = (event) => {
    setInputs((prev)=>({
      ...prev,

      [event.target.id]:event.target.value,
    }))
  };

  // const onChangeTitle = (event) => {
  //   setInputs({
  //     ...inputs,

  //     title:event.target.value,
  //   })
  // };

  // const onChangeContents = (event) => {
  //   setInputs({
  //     ...inputs,

  //     contents:event.target.values
  //   })
  // };

  // 한 줄일때는 괄호() 없어도 된다
  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeinputs} />
      제목: <input type="text" id="title" onChange={onChangeinputs} />
      내용: <input type="text" id="contents" onChange={onChangeinputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
