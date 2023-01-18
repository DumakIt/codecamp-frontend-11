import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  padding: 80px 102px ;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
`
export const AddressBox = styled.span`
  position: absolute;
  text-align: right;
  line-height: 24px;
  top: 18px;
  right: 118px;
  height: 64px; 
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  background-color: #4F4F4F;
  color: white;
`

export const Triangle = styled.img`
  width: 12px;
  height: 8px;
  position: absolute;
  top: 82px;
  right: 118px;

`

export const UserInfoWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
`

export const UserInfoDataWrapper = styled.div`
  width: 856px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const UserInfoDataWriter = styled.div`
  font-weight: 500;
  font-size: 24px;
`

export const UserInfoUpdatedAt = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
`

export const UserInfoIconWrapper = styled.div`
  width: 86px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserInfoIconLink = styled.img`
  width: 32px;
  height: 32px;
`

export const UserInfoIconLocation = styled.button`
  width: 32px;
  height: 32px;
  background: url("/fetchBoard/location.png") center;
  border: none;
  cursor: pointer;
`

export const DivideLine = styled.div`
  margin: 20px 0px 80px;
  border-top: solid 1px #BDBDBD;
`

export const BoardTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
`

export const BoardImg = styled.div`
  width: 100%;
  height: 480px;
  margin: 40px 0;
  background: #F2F2F2;
`

export const BoardContents = styled.div`
  font-weight: 400;
  font-size: 16px;
`

export const BoardYoutubeWrapper = styled.div`
  margin-top: 120px;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BoardYoutube = styled.iframe`
  width: 486px;
  height: 240px;
  border: none;
`

export const BoardLikeWrapper = styled.div`
  width: 120px;
  height: 51px;
  margin-top: 160px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BoardLikeBox = styled.div`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const BoardLikeIcon = styled.img`
  width: 20px;
  height: 18px;
`

export const BoardLikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #FFD600;
`

export const BoardDisLikeBox = styled.div`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const BoardDisLikeIcon = styled.img`
  width: 20px;
  height: 18px;
`

export const BoardDisLikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #828282;
`

export const FunctionBtnWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 101px;
`

export const FunctionBtn = styled.button`
  margin: 0 12px;
  width: 179px;
  height: 45px; 
  border: 1px solid #BDBDBD;
  font-weight: 500;
  font-size: 16px;
  background: #FFFFFF;
`