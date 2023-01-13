import axios from 'axios'
import 나만의페이지 from "../../section01/01-01-example"



export default function RestGetPage() {

  function onClickASync() {
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log(result);  //  Promise
  }

  // async function onClickSync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1")       => 함수 중복 선언 문제
  //   console.log(result);  //  제대로된 결과 => title: "....."

  // }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result);  //  제대로된 결과 => title: "....."

  }



  return(

    <div>
      <button onClick={onClickASync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST_API(동기) 요청하기</button>
      <나만의페이지 />
    </div>

  )
}