import * as S from "./FetchCatImg.styles";

export default function FetchCatImgUI(props): JSX.Element {
  return (
    <S.Container>
      <S.CategoryWrapper>
        {props.categoryList ? (
          props.categoryList.map((el) => (
            <S.Category key={el.label} id={el.value} onClick={props.onClickCategory} isActive={props.selectCategory === el.value ? true : false}>
              {el.value}
            </S.Category>
          ))
        ) : (
          <></>
        )}
      </S.CategoryWrapper>

      <S.GridWrapper>
        <S.ImgGrid>
          {props.saveImgList.map((el) => (
            <S.ImgContainer>
              {el.map((ql) => (
                <S.ImgWrapper id={ql.url} onClick={props.onClickUpdate}>
                  <S.Img src={ql.url} />
                  {ql.title && <S.ImgTitle>{ql.title}</S.ImgTitle>}

                  <S.CustomEditOutlined />
                </S.ImgWrapper>
              ))}
            </S.ImgContainer>
          ))}
        </S.ImgGrid>
      </S.GridWrapper>
      {props.isOpen && (
        <S.CustomModal open={true} width={750} footer={false} onCancel={props.onClickModalCancel}>
          <S.SaveCatContainer>
            <S.SaveCatImg src={props.saveUrl} />
            <S.ImgInfoContainer>
              <h1>애옹이 저장</h1>
              <S.TitleWrapper>
                <S.InputTitle type="text" placeholder="제목을 입력해 주세요." onChange={props.onChangeTitle} />
                <div>필수는 아니에요</div>
              </S.TitleWrapper>

              <S.BtnWrapper>
                <S.BtnCancel onClick={props.onClickModalCancel}>취소하기</S.BtnCancel>
                <S.BtnSave onClick={props.onClickModalSave}>저장하기</S.BtnSave>
              </S.BtnWrapper>
            </S.ImgInfoContainer>
          </S.SaveCatContainer>
        </S.CustomModal>
      )}
    </S.Container>
  );
}
