import { Background, Container, WrapperUserInfo, UserInfoText, UserInfoWriter, UserInfoPasswordText, UserInfoPassword, TitleText, WrapperBox, TitleInput, ContentsTextarea, AddressText, AddressSearch, AddressNum, AddressBtn, AddressInput, YoutubeText, YoutubeInput, ImagesText, ImagesAddBox, ImagesAdd, ImagesAddPlus, ImagesAddText, Img, MainSettingText, MainSettingRadioBox, MainSettingRadioColor, RegBtn, ErrText } from "./BoardWrite.styles";
import { IBoardWriteUi } from "./BoardWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";
import ImgUpload from "../../../imgUpload/imgUpload.container";

export function BoardWriteUi(props: IBoardWriteUi) {
  return (
    <Background>
      <Container>
        <h1>게시물 {props.isEdit ? "수정" : "등록"}</h1>
        <WrapperUserInfo>
          <div style={{ width: props.isEdit ? "486px" : "486px" }}>
            <UserInfoText>작성자</UserInfoText>
            <UserInfoWriter type="text" placeholder="이름을 입력해주세요." onChange={props.onChangeWriter} defaultValue={props.data ? props.data.fetchBoard.writer : ""} readOnly={props.isEdit ? true : false} />
            <ErrText>{props.writerErr}</ErrText>
          </div>
          <div style={{ display: props.isEdit ? "block" : "block" }}>
            <UserInfoPasswordText>비밀번호</UserInfoPasswordText>
            <UserInfoPassword type="password" placeholder="비밀번호를 입력해주세요." onChange={props.onChangePassword} />
            <ErrText>{props.passwordErr}</ErrText>
          </div>
        </WrapperUserInfo>
        <WrapperBox>
          <TitleText>제목</TitleText>
          <TitleInput type="text" placeholder="제목을 작성해 주세요." onChange={props.onChangeTitle} defaultValue={props.data ? props.data.fetchBoard.title : ""} />
          <ErrText>{props.titleErr}</ErrText>
        </WrapperBox>
        <WrapperBox>
          <TitleText>내용</TitleText>
          <ContentsTextarea placeholder="내용을 작성해주세요." onChange={props.onChangeContents} defaultValue={props.data ? props.data.fetchBoard.contents : ""}></ContentsTextarea>
          <ErrText>{props.ContentsErr}</ErrText>
        </WrapperBox>
        <WrapperBox>
          <AddressText>주소</AddressText>
          <AddressSearch>
            <AddressNum type="text" readOnly value={props.zipcode ? props.zipcode : props.data?.fetchBoard.boardAddress?.zipcode ?? ""} />
            <AddressBtn onClick={props.onClickAddressBtn}>우편번호 검색</AddressBtn>
            {props.addressModalOpen && (
              <Modal title="Basic Modal" open={true} onOk={props.onClickAddressBtn} onCancel={props.onClickAddressBtn} footer={null}>
                <DaumPostcodeEmbed onComplete={props.AddressComplete} />
              </Modal>
            )}
          </AddressSearch>
          <AddressInput type="text" readOnly value={props.address ? props.address : props.data?.fetchBoard.boardAddress?.address ?? ""} />
          <AddressInput type="text" onChange={props.onChangeAddressDetail} defaultValue={props.data?.fetchBoard.boardAddress ? props.data.fetchBoard.boardAddress.addressDetail : ""} />
        </WrapperBox>
        <WrapperBox>
          <YoutubeText>유튜브</YoutubeText>
          <YoutubeInput type="text" placeholder="링크를 복사해주세요." onChange={props.onChangeYoutubeUrl} defaultValue={props.data ? props.data.fetchBoard.youtubeUrl : ""} />
        </WrapperBox>
        <WrapperBox>
          <ImagesText>사진 첨부</ImagesText>
          <ImagesAddBox>
            {Object.values(props.images).map((data, idx) => (
              <ImgUpload data={data} idx={idx} setImages={props.setImages} images={props.images} />
            ))}
          </ImagesAddBox>
        </WrapperBox>
        <WrapperBox>
          <MainSettingText>메인 설정</MainSettingText>
          <MainSettingRadioBox>
            <div>
              <MainSettingRadioColor type="radio" name="MainSetting" /> 유튜브
            </div>
            <div>
              <MainSettingRadioColor type="radio" name="MainSetting" /> 사진
            </div>
          </MainSettingRadioBox>
        </WrapperBox>
        <RegBtn onClick={props.isEdit ? props.onClickUpdate : props.checkErr} isActive={props.isEdit ? true : props.isActive}>
          {props.isEdit ? "수정" : "등록"}하기
        </RegBtn>
      </Container>
    </Background>
  );
}
