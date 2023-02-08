import styled from "@emotion/styled";
import { IRegBtn } from "./BoardWrite.types";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1200px;
  padding: 60px 103px 100px 101px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const WrapperUserInfo = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const UserInfoText = styled.div`
  margin-bottom: 16px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UserInfoWriter = styled.input`
  width: 100%;
  height: 52px;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
`;
export const UserInfoPasswordText = styled.div`
  margin-bottom: 16px;
`;

export const UserInfoPassword = styled.input`
  width: 486px;
  height: 52px;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const WrapperBox = styled.div`
  width: 100%;
`;

export const TitleText = styled.div`
  margin: 40px 0px 16px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;
export const ContentsTextarea = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 16px;
  resize: none;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const AddressText = styled.div`
  margin: 16px 0;
`;

export const AddressSearch = styled.div`
  margin-bottom: 16px;
`;

export const AddressNum = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  font-size: 16px;
  margin-right: 16px;
  border: 1px solid #bdbdbd;
`;
export const AddressBtn = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 30px;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const YoutubeText = styled.div`
  margin-top: 7px;
  margin-bottom: 14.09px;
`;

export const YoutubeInput = styled.input`
  width: 100%;
  height: 45.78px;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImagesText = styled.div`
  margin: 40px 0px 16px;
`;

export const ImagesAddBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImagesAdd = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const ImagesAddPlus = styled.img`
  width: 14px;
  height: 14px;
`;

export const ImagesAddText = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 78px;
  height: 78px;
  object-fit: contain;
  margin-right: 24px;
`;

export const MainSettingText = styled.div`
  margin: 40px 0px 16px;
`;

export const MainSettingRadioBox = styled.div`
  width: 127px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MainSettingRadioColor = styled.input`
  accent-color: #ffd600;
  color-scheme: light;
`;

export const RegBtn = styled.button`
  margin-top: 80px;
  width: 179px;
  height: 52px;
  background-color: ${(props: IRegBtn) => (props.isActive ? "#FFD600" : "#BDBDBD")};
  color: black;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const ErrText = styled.div`
  height: 12px;
  color: red;
  font-size: 12px;
  margin-top: 5px;
  padding-left: 5px;
`;
