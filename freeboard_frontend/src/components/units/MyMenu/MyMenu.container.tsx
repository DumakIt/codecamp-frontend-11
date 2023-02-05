import * as S from "./MyMenu.styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../commons/libraries/firebase";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore/lite";

export default function MyMenu(): JSX.Element {
  const [catImgResult, setCatImgResult] = useState([]);
  const accessDB = collection(getFirestore(firebaseApp), "savCats");

  const getImg = async () => {
    // new Array(3).fill(1).forEach(async (_) => {
    const result = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=6&api_key=live_SEnutBQpOTB4uNB0KSkKHTOLfDKQYfR3NJS6UgWzLNVMUqwzo0sBryYa4CkvC5qB`);

    setCatImgResult((prev) => [...prev, ...result.data]);

    // });
  };

  useEffect(() => {
    getImg();
  }, []);

  const onClickCat = async (event) => {
    void addDoc(accessDB, {
      url: event.currentTarget.id,
    });
  };

  const onClickFetch = async () => {
    const result = await getDocs(accessDB);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <S.Container>
      <button onClick={getImg}>클릭</button>
      <button onClick={onClickFetch}>조회</button>
      <S.ImgContainer>
        <S.ImgWrapper1>
          {catImgResult.map((el) => (
            <S.Img key={el.url} id={el.url} src={el.url} onClick={onClickCat} />
          ))}
        </S.ImgWrapper1>

        <S.ImgWrapper2>
          {catImgResult.map((el) => (
            <S.Img key={el.url} id={el.url} src={el.url} onClick={onClickCat} />
          ))}
        </S.ImgWrapper2>

        <S.ImgWrapper3>
          {catImgResult.map((el) => (
            <S.Img key={el.url} id={el.url} src={el.url} onClick={onClickCat} />
          ))}
        </S.ImgWrapper3>
      </S.ImgContainer>
    </S.Container>
  );
}
