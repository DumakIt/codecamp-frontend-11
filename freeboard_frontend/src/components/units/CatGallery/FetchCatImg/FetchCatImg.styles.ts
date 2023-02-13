import { Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  width: 50%;
`;

export const CategoryWrapper = styled.div`
  display: flex;
`;

export const Category = styled.div`
  margin-right: 15px;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => (props.isActive ? "#fff6f1" : "white")};
  cursor: pointer;
`;

export const GridWrapper = styled.div`
  border: 1px solid #bdbdbd;
  padding: 20px;
`;

export const ImgGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr;
  grid-auto-flow: column dense;
  gap: 20px;
`;
export const ImgContainer = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  &:hover {
    & :last-of-type {
      opacity: 1;
    }
    & > img,
    div {
      filter: grayscale(100%) blur(3px) brightness(0.5);
      transition: all 0.1s linear;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgTitle = styled.div`
  padding: 8px;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-top: none;
  background-color: white;
`;

export const CustomEditOutlined = styled(EditOutlined)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  color: white;
  opacity: 0;
`;

export const CustomModal = styled(Modal)`
  top: 30%;
`;

export const SaveCatContainer = styled.div`
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SaveCatImg = styled.img`
  width: 44%;
  height: 100%;
  object-fit: contain;
`;

export const ImgInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TitleWrapper = styled.div`
  margin: 20px 0 30px;
  display: flex;
  flex-direction: column;

  & > div {
    margin-right: 10px;
    margin-top: 5px;
    align-self: flex-end;
    font-size: 12px;
    color: #828282;
  }
`;

export const InputTitle = styled.input`
  margin-top: 5px;
  padding: 0 11px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;

  &:focus {
    outline: 1px solid #4096ff;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const BtnCancel = styled.button`
  height: 35px;
  width: 70px;
  border-radius: 4px;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const BtnSave = styled.button`
  margin-left: 15px;
  height: 35px;
  width: 70px;
  border-radius: 4px;
  border: none;
  background-color: #71b1ff;
  cursor: pointer;
`;
