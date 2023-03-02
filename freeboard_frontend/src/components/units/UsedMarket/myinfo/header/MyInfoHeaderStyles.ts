import { EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 35%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  border: 1px solid #bdbdbd;
`;

export const LeftWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightWrapper = styled.div`
  padding-top: 30px;
  width: 65%;
  padding-left: 60px;
`;

export const EditBtn = styled(EditOutlined)`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 25px;
  color: #bdbdbd;
`;

export const UserName = styled.input`
  width: 100%;
  font-size: 40px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  &:focus {
    outline: none;
  }
`;

export const UserEmail = styled.div`
  padding-top: 10px;
  font-size: 16px;
  color: #828282;
`;

export const UserPointWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 10%;
  & div:first-of-type {
    font-size: 25px;
  }
`;

export const UserPoint = styled.div`
  font-size: 40px;
  padding-right: 2%;
  text-align: right;
`;

export const ChargePointsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
`;

export const UpdateBtn = styled.button`
  border: 1px solid #bdbdbd;
  border-radius: 25px;
  width: 120px;
  height: 50px;
  font-size: 18px;
  background-color: white;
`;
