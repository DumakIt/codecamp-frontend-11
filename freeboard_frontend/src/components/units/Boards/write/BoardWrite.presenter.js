import {Background, Container, WrapperUserInfo, UserInfoText,  UserInfoWriter, UserInfoPasswordText,  UserInfoPassword, TitleText, WrapperBox, TitleInput, ContentsTextarea, AddressText, AddressSearch,  AddressNum, AddressBtn, AddressInput, YoutubeText, YoutubeInput, ImagesText, ImagesAddBox, ImagesAdd, ImagesAddPlus, ImagesAddText,  MainSettingText, MainSettingRadioBox, MainSettingRadioColor, RegBtn, ErrText} from "./BoardWrite.styles"

export function BoardWriteUi(props) {

  return(
    <Background>
    <Container>
      <h1>게시물 등록</h1>
      <WrapperUserInfo>
        <div style={{width: props.isEdit ? "100%" : "486px"}}>
          <UserInfoText>작성자</UserInfoText>
          <UserInfoWriter style={{width: "100%"}} type="text" placeholder='이름을 입력해주세요.' onChange={props.onChangeWriter}/>
          <ErrText>{props.writerErr}</ErrText>
        </div>
        <div style={{display: props.isEdit ? "none" : "block"}}>
          <UserInfoPasswordText>비밀번호</UserInfoPasswordText>
          <UserInfoPassword type="password" placeholder='비밀번호를 입력해주세요.' onChange={props.onChangePassword}/>
          <ErrText>{props.passwordErr}</ErrText>
        </div>
      </WrapperUserInfo>
      <WrapperBox>
        <TitleText>제목</TitleText>
        <TitleInput type="text" placeholder='제목을 작성해 주세요.' onChange={props.onChangeTitle}/>
        <ErrText>{props.titleErr}</ErrText>
      </WrapperBox>
      <WrapperBox>
        <TitleText>내용</TitleText>
        <ContentsTextarea placeholder='내용을 작성해주세요.' onChange={props.onChangeContents}></ContentsTextarea>
        <ErrText>{props.ContentsErr}</ErrText>
      </WrapperBox>
      <WrapperBox>
        <AddressText>주소</AddressText>
        <AddressSearch>
          <AddressNum type="text" placeholder='07250' onChange={props.onChangeZipcode}/>
          <AddressBtn>우편번호 검색</AddressBtn>
        </AddressSearch>
        <AddressInput type="text" onChange={props.onChangeAddress}/>
        <AddressInput type="text" onChange={props.onChangeAddressDetail}/>
      </WrapperBox>
      <WrapperBox>
        <YoutubeText>유튜브</YoutubeText>
        <YoutubeInput type="text" placeholder='링크를 복사해주세요.' onChange={props.onChangeYoutubeUrl}/>
      </WrapperBox>
      <WrapperBox>
        <ImagesText>사진 첨부</ImagesText>
        <ImagesAddBox>
        <ImagesAdd>
          <ImagesAddPlus src="/addPost/Plus.png"/>
          <ImagesAddText>
            Upload
          </ImagesAddText>
        </ImagesAdd>
        <ImagesAdd>
          <ImagesAddPlus src="/addPost/Plus.png"/>
          <ImagesAddText>
            Upload
          </ImagesAddText>
        </ImagesAdd>
        <ImagesAdd>
          <ImagesAddPlus src="/addPost/Plus.png"/>
          <ImagesAddText>
            Upload
          </ImagesAddText>
        </ImagesAdd>
        </ImagesAddBox>
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
      <RegBtn onClick={props.isEdit ? props.onClickUpdate : props.checkErr} isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}하기</RegBtn>
    </Container>
  </Background>
  )
}