import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid red;
`;

export const ImgContainer = styled.div`
  width: 50%;
`;

export const ImgMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 500px;
  border: 1px solid blue;

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

export const ImgSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100px;

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

export const DetailContainer = styled.div`
  width: 50%;
  padding-left: 30px;
`;

export const DetailTitle = styled.h1``;

interface ICustomHeartFilledProps {
  isToggle: boolean;
}

export const CustomHeartFilled = styled(HeartFilled)`
  color: ${(props: ICustomHeartFilledProps) => (props.isToggle ? "#ff6a00" : "#BDBDBD")};
`;
