import {Background, Wrapper, UserInfo, UserInfoText,  UserInfoName, UserInfoPasswordText,  UserInfoPassword, TitleText,Title, TitleInput, DetailInput, AddressText, AddressSearch,  AddressNum, AddressBtn, AddressInput, YoutubeBox, YoutubeText, YoutubeInput, PictureText, PictureAddBox, PictureAdd, MainSettingText, MainSettingRadioBox, RegBtn, ErrText} from '../../../styles/freeboard'
import {useState} from "react"

export default function EmotionPage() {

  const[name, setName] = useState("")
  const[password, setPassword] = useState("")
  const[title, setTitle] = useState("")
  const[detail, setDetail] = useState("")
  
  function onChangeName(event) {
    setName(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  function onChangeDetail(event) {
    setDetail(event.target.value)
  }

  const[nameErr, setNameErr] = useState("")
  const[passwordErr, setPasswordErr] = useState("")
  const[titleErr, setTitleErr] = useState("")
  const[detailErr, setDetailErr] = useState("")
  
  const checkErr = function() {

    if (!name) {
      setNameErr("작성자 이름을 입력해 주세요.")
    } else {
      setNameErr("")
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

    if (!detail) {
      setDetailErr("내용을 입력해 주세요.")
    } else {
      setDetailErr("")
    }
  }

  //자바스크립트 쓰는 곳

  return (
    <Background>
          <Wrapper>
      <h1>게시물 등록</h1>
      <UserInfo>
        <div>
          <UserInfoText>작성자</UserInfoText>
          <UserInfoName type="text" placeholder='이름을 입력해주세요.' onChange={onChangeName}/>
          <ErrText>{nameErr}</ErrText>
        </div>
        <div>
          <UserInfoPasswordText>비밀번호</UserInfoPasswordText>
          <UserInfoPassword type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword}/>
          <ErrText>{passwordErr}</ErrText>
        </div>
      </UserInfo>
      <Title>
        <TitleText>제목</TitleText>
        <TitleInput type="text" placeholder='제목을 작성해 주세요.' onChange={onChangeTitle}/>
        <ErrText>{titleErr}</ErrText>
      </Title>
      <Title>
        <TitleText>내용</TitleText>
        <DetailInput type="text" placeholder='내용을 작성해주세요.' onChange={onChangeDetail}/>
        <ErrText>{detailErr}</ErrText>
      </Title>
      <Title>
        <AddressText>주소</AddressText>
        <AddressSearch>
          <AddressNum type="text" placeholder='07250'/>
          <AddressBtn>우편번호 검색</AddressBtn>
        </AddressSearch>
        <AddressInput type="text"/>
        <AddressInput type="text"/>
      </Title>
      <YoutubeBox>
        <YoutubeText>유튜브</YoutubeText>
        <YoutubeInput type="text" placeholder='링크를 복사해주세요.'/>
      </YoutubeBox>
      <Title>
        <PictureText>사진 첨부</PictureText>
        <PictureAddBox>
        <PictureAdd></PictureAdd>
        <PictureAdd></PictureAdd>
        <PictureAdd></PictureAdd>
        </PictureAddBox>
      </Title>
      <Title>
        <MainSettingText>메인 설정</MainSettingText>
        <MainSettingRadioBox>
          <div>
          <input type="radio" name="MainSetting"/> 유튜브
          </div>
          <div>
          <input type="radio" name="MainSetting"/> 사진
          </div>
        </MainSettingRadioBox>
      </Title>
      <RegBtn onClick={checkErr}>등록하기</RegBtn>
    </Wrapper>
    </Background>
  )
}