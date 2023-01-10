import {useState} from "react"

export default function SignupStatePage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")

  function onChangeEmail(event) {
    console.log(event); // 나의 행동
    console.log(event.target);  // 작동된 태그
    console.log(event.target.value);  //  작동된 태그의 입력된 값               => 이벤트 핸들러 함수
    
    setEmail(event.target.value)
  }

  function onChangePassword(event) {

    setPassword(event.target.value)

  }

  function onClickSignup(event) {

    console.log(email, password); // 진짜 포장이 잘 됐는지 확인 해보기

    // 1. 검증하기

    if (email.includes("@") === false) {
      // alert("이메일이 올바르지 않습니다!! @가 없음!!")
      // document.getElementById('myerror').innerText = "이메일이 올바르지 않습니다!! @가 없음!!" => 옛날방식
      setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")

    } else {

    // 2. 뱍엔드 컴퓨터에 보내주기 (백엔드 개발자가 만든 함수. 즉, API)
    //    => 나중에

    // 3. 성공알람 보여주기

    setEmailError("")
    alert("회원가입을 축하합니다!!")


    }


  }

  return (

    <div>
      이메일: <input type="text" onChange={onChangeEmail}/>
      {/* <div id="myerror"></div> => 엣날방식 */}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword}/>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )
}