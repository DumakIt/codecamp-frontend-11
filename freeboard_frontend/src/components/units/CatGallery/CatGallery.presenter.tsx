import InfiniteScroll from "react-infinite-scroller";
import * as S from "./CatGallery.styles";
import { MouseEvent } from "react";
import { Select } from "antd";

interface IMyMenuUIProps {
  getImg: () => void;
  onClickCat: (event: MouseEvent<HTMLDivElement>) => Promise<void>;
  onClickFetch: () => void;
}

export default function CatGalleryUI(props: any) {
  return (
    <S.Container>
      <InfiniteScroll loadMore={props.getImg} hasMore={true} pageStart={0}>
        <S.ImgGrid>
          {props.catImgResult.map((el) => (
            <S.ImgContainer key={el.id}>
              {el.map((ql) => (
                <S.ImgWrapper key={ql.id} id={ql.url} onClick={props.onClickCat}>
                  <S.Img src={ql.url} />
                  <div>+</div>
                </S.ImgWrapper>
              ))}
            </S.ImgContainer>
          ))}
        </S.ImgGrid>
      </InfiniteScroll>
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

              <Select
                defaultValue={"저장한 이미지"}
                onChange={props.onChangeSelect}
                allowClear={true}
                placement={"topRight"}
                options={props.categoryList}
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <S.SelectAddCategoryWrapper>
                      <S.AddCategoryInput type="text" placeholder="추가하려는 카테고리를 입력해 주세요." onChange={props.onChangeAddCategory} value={props.addCategory} />
                      <S.AddCategoryBtn onClick={props.onClickAddCategory}>추가하기</S.AddCategoryBtn>
                    </S.SelectAddCategoryWrapper>
                  </>
                )}
              />
              <S.BtnWrapper>
                <S.BtnCancel onClick={props.onClickModalCancel}>취소하기</S.BtnCancel>
                <S.BtnSave onClick={props.onClickModalSave}>저장하기</S.BtnSave>
              </S.BtnWrapper>
            </S.ImgInfoContainer>
          </S.SaveCatContainer>
        </S.CustomModal>
      )}

      <S.navBar>
        <button onClick={props.onClickMove}>저장한 이미지 보러가기</button>
      </S.navBar>
    </S.Container>
  );
}
