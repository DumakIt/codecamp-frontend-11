import {Background, Wrapper, UserInfo, UserInfoText,  UserInfoName, UserInfoPassword, TitleText,Title, TitleInput, DetailInput, AddressText, AddressSearch,  AddressNum, AddressBtn, AddressInput, YoutubeBox, YoutubeText, YoutubeInput, PictureText, PictureAddBox, PictureAdd, MainSettingText, MainSettingRadioBox, RegBtn} from '../../styles/freeboard'

export default function EmotionPage() {


  //자바스크립트 쓰는 곳

  return (
    <Background>
          <Wrapper>
      <h1>게시물 등록</h1>
      <UserInfo>
        <div>
          <UserInfoText>제목</UserInfoText>
          <UserInfoName type="text" placeholder='이름을 입력해주세요.'/>
        </div>
        <div>
          <UserInfoText>비밀번호</UserInfoText>
          <UserInfoPassword type="password" placeholder='비밀번호를 입력해주세요.'/>
        </div>
      </UserInfo>
      <Title>
        <TitleText>제목</TitleText>
        <TitleInput type="text" placeholder='제목을 작성해 주세요.'/>
      </Title>
      <Title>
        <TitleText>내용</TitleText>
        <DetailInput type="text" placeholder='내용을 작성해주세요.'/>
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
      <RegBtn>등록하기</RegBtn>
    </Wrapper>
    </Background>
  )
}