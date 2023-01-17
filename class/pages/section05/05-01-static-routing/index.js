import {useRouter} from "next/router"

export default function StaticRoutingPage() {

  const aaa = useRouter()
  
  const onClickMove = () => {
    aaa.push("/section05/05-01-static-routing-moved")
    console.log(useRouter);
  }
  return <button onClick={onClickMove}>페이지 이동하기!!</button>
}



