import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  border: 1px solid #bdbdbd;
  width: 25%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: 1px solid #bdbdbd;
  border-left: none;
  padding: 10px;
  height: 40px;
  width: 90%;
  outline: none;
  font-size: 14px;
`;

export const SearchIcon = styled.img`
  margin: 0 10px;
  width: 25px;
  height: 25px;
`;
