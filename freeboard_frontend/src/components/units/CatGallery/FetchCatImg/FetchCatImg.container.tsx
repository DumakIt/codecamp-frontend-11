import FetchCatImgUI from "./FetchCatImg.presenter";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { collection, getFirestore, getDocs, doc, setDoc, query, orderBy } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function FetchCatImg(): JSX.Element {
  const [categoryList, setCategoryList] = useState("");
  const [saveImgList, setSaveImgList] = useState([[], [], []]);

  useEffect(() => {
    const fetchCategory = async () => {
      const accessDB = collection(getFirestore(firebaseApp), "saveCats");
      const result = await getDocs(query(accessDB, orderBy("timestamp", "asc")));
      const datas = result.docs.map((el) => el.data());

      setCategoryList(datas);
    };
    fetchCategory();
  }, []);

  console.log(categoryList, "un");

  useEffect(() => {
    const fetchSaveImg = async () => {
      const accessDB = collection(getFirestore(firebaseApp), "saveCats", "저장한 이미지", "저장한 이미지");
      const result = await getDocs(query(accessDB, orderBy("timestamp", "asc")));
      const datas = result.docs.map((el) => el.data());

      const datasSorted = [[], [], []];
      let count = 0;
      for (let i = 0; i < datas.length; i++) {
        datasSorted[count].push(datas[i].url);
        count++;
        if (count === 3) count = 0;
      }

      setSaveImgList(datasSorted);
    };
    fetchSaveImg();
  }, []);

  console.log(saveImgList, "123");

  //prettier-ignore

  return <FetchCatImgUI 
  categoryList={categoryList}
  saveImgList={saveImgList}
  />;
}
