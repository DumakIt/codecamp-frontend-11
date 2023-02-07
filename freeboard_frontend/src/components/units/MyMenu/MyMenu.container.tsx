import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../commons/libraries/firebase";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore/lite";
import { MouseEvent } from "react";
import MyMenuUI from "./MyMenu.presentor";

export default function MyMenu(): JSX.Element {
  const [catImgResult, setCatImgResult] = useState([[], [], []]);
  const accessDB = collection(getFirestore(firebaseApp), "savCats");

  const getImg = async () => {
    const arr = [[], [], []];

    for (let i = 0; i < 3; i++) {
      const result = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_SEnutBQpOTB4uNB0KSkKHTOLfDKQYfR3NJS6UgWzLNVMUqwzo0sBryYa4CkvC5qB`);

      arr[i].push(...result?.data);
    }
    setCatImgResult((prev) => [
      [...prev[0], ...arr[0]],
      [...prev[1], ...arr[1]],
      [...prev[2], ...arr[2]],
    ]);

    //   new Array(3).fill(1).forEach(async (_, i) => {
    //     const result = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=6&api_key=live_SEnutBQpOTB4uNB0KSkKHTOLfDKQYfR3NJS6UgWzLNVMUqwzo0sBryYa4CkvC5qB`);
    //     arr[i].push(...result.data);
    //     console.log("123");
    //   });
    //   setCatImgResult((prev) => [
    //     [...prev[0], ...arr[0]],
    //     [...prev[1], ...arr[1]],
    //     [...prev[2], ...arr[2]],
    //   ]);
    //   console.log("456");
  };

  useEffect(() => {
    getImg();
  }, []);

  const onClickCat = async (event: MouseEvent<HTMLImageElement>) => {
    void addDoc(accessDB, {
      url: event.currentTarget.id,
    });
  };

  const onClickFetch = async () => {
    const result = await getDocs(accessDB);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  console.log(catImgResult);
  //prettier-ignore

  return <MyMenuUI 
  catImgResult={catImgResult}
  getImg={getImg}
  onClickCat={onClickCat}
  onClickFetch={onClickFetch}
  />;
}
