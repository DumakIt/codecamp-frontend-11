
import { useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {   # 변수의 타입 적는 곳
    createProduct (                                                                     # 실제 우리가 전달한 변수 적는 곳
      seller: $seller
      createProductInput: $createProductInput
    ){
      message
      number
    }
  }
`


export default function GraphqlMutationPage() {

  const [createProduct] = useMutation(CREATE_PRODUCT)


  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "정말루?",
          price: 3000
        }
      }
    })
    console.log(result);
  }






  // 한 줄일때는 괄호() 없어도 된다
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}