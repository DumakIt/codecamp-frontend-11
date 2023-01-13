import { useMutation, gql } from "@apollo/client"
import {Background, Container, WrapperUserInfo, UserInfoText,  UserInfoWriter, UserInfoPasswordText,  UserInfoPassword, TitleText, WrapperBox, TitleInput, ContentsTextarea, AddressText, AddressSearch,  AddressNum, AddressBtn, AddressInput, YoutubeText, YoutubeInput, PictureText, PictureAddBox, PictureAdd, PictureAddPlus, PictureAddText,  MainSettingText, MainSettingRadioBox, MainSettingRadioColor, RegBtn, ErrText} from '../../../styles/freeboard'
import {useState} from "react"

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
	createBoard(
    createBoardInput: $createBoardInput
  ){
    _id
    writer
    title
    contents
  }
}
`


export default function EmotionPage() {
  const [createBoard] = useMutation(CREATE_BOARD)

  const[writer, setWriter] = useState("")
  const[password, setPassword] = useState("")
  const[title, setTitle] = useState("")
  const[contents, setContents] = useState("")
  
  function onChangeWriter(event) {
    setWriter(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  function onChangeContents(event) {
    setContents(event.target.value)
  }

  const[writerErr, setWriterErr] = useState("")
  const[passwordErr, setPasswordErr] = useState("")
  const[titleErr, setTitleErr] = useState("")
  const[ContentsErr, setContentsErr] = useState("")
  
  const checkErr = async function() {

    if (!writer) {
      setWriterErr("작성자 이름을 입력해 주세요.")
    } else {
      setWriterErr("")
    }

    if (!password) {
      setPasswordErr("비밀번호를 입력해 주세요.")
    } else {
      setPasswordErr("")
    }

    if (!title) {
      setTitleErr("제목을 입력해 주세요.")
    } else {
      setTitleErr("")
    }

    if (!contents) {
      setContentsErr("내용을 입력해 주세요.")
    } else {
      setContentsErr("")
    }

    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents
          }
        }
      })
      console.log(result);
    }
  }

  //자바스크립트 쓰는 곳

  return (
    <Background>
      <Container>
        <h1>게시물 등록</h1>
        <WrapperUserInfo>
          <div>
            <UserInfoText>작성자</UserInfoText>
            <UserInfoWriter type="text" placeholder='이름을 입력해주세요.' onChange={onChangeWriter}/>
            <ErrText>{writerErr}</ErrText>
          </div>
          <div>
            <UserInfoPasswordText>비밀번호</UserInfoPasswordText>
            <UserInfoPassword type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword}/>
            <ErrText>{passwordErr}</ErrText>
          </div>
        </WrapperUserInfo>
        <WrapperBox>
          <TitleText>제목</TitleText>
          <TitleInput type="text" placeholder='제목을 작성해 주세요.' onChange={onChangeTitle}/>
          <ErrText>{titleErr}</ErrText>
        </WrapperBox>
        <WrapperBox>
          <TitleText>내용</TitleText>
          <ContentsTextarea placeholder='내용을 작성해주세요.' onChange={onChangeContents}></ContentsTextarea>
          <ErrText>{ContentsErr}</ErrText>
        </WrapperBox>
        <WrapperBox>
          <AddressText>주소</AddressText>
          <AddressSearch>
            <AddressNum type="text" placeholder='07250'/>
            <AddressBtn>우편번호 검색</AddressBtn>
          </AddressSearch>
          <AddressInput type="text"/>
          <AddressInput type="text"/>
        </WrapperBox>
        <WrapperBox>
          <YoutubeText>유튜브</YoutubeText>
          <YoutubeInput type="text" placeholder='링크를 복사해주세요.'/>
        </WrapperBox>
        <WrapperBox>
          <PictureText>사진 첨부</PictureText>
          <PictureAddBox>
          <PictureAdd>
            <PictureAddPlus src="/addPost/Plus.png"/>
            <PictureAddText>
              Upload
            </PictureAddText>
            </PictureAdd>
            <PictureAdd>
            <PictureAddPlus src="/addPost/Plus.png"/>
            <PictureAddText>
              Upload
            </PictureAddText>
            </PictureAdd>
            <PictureAdd>
            <PictureAddPlus src="/addPost/Plus.png"/>
            <PictureAddText>
              Upload
            </PictureAddText>
            </PictureAdd>
          </PictureAddBox>
        </WrapperBox>
        <WrapperBox>
          <MainSettingText>메인 설정</MainSettingText>
          <MainSettingRadioBox>
            <div>
            <MainSettingRadioColor type="radio" name="MainSetting"/> 유튜브
            </div>
            <div>
            <MainSettingRadioColor type="radio" name="MainSetting"/> 사진
            </div>
          </MainSettingRadioBox>
        </WrapperBox>
        <RegBtn onClick={checkErr}>등록하기</RegBtn>
      </Container>
    </Background>
  )
}