import styled from "@emotion/styled";

export const CommentContainer = styled.div`
  margin-top: 87px;
  width: 1200px;
`

export const WriteWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const InfoBoxInput = styled.input`
  width: 180px;
  height: 45px;
  margin-bottom: 15px;
  font-size: 16px;
  padding: 10px;
  outline: none;
  border: 1px solid #BDBDBD;
`

export const WriteButton = styled.button`
  width: 180px;
  height: 30px;
  font-size: 16px;
  background-color: #FFD600;
  border: none;
`

export const WriteComment = styled.textarea`
  margin-left: 24px;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  border: 1px solid #BDBDBD;
  resize: none;
  outline: none;
`

export const FetchWrapper = styled.div`
  padding: 0 20px 20px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

export const FetchUserBox = styled.div`
  padding-top: 20px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FetchUserProfile = styled.img`
  width: 50px;
  height: 50px;
`

export const FetchUserWriter = styled.div`
  font-size: 16px;
  text-align: center;
`

export const FetchCommentBox = styled.div`
  margin-left: 15px;
  width: 100%;
`

export const FetchCommentUtilityBox = styled.div`
  font-size: 15px;
  color: #BDBDBD;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CommentUtility = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CommentUtilityImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  
`

export const FetchCommentLine = styled.div`
  border-top: 1px solid #BDBDBD;
  margin: 7px 0;
  
`

export const FetchComment = styled.div`
  font-size: 16px;
`
