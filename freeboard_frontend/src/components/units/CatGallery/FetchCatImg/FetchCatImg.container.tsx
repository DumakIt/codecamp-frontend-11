import FetchCatImgUI from "./FetchCatImg.presenter";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { collection, getFirestore, getDocs, doc, setDoc, query, orderBy } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function FetchCatImg(): JSX.Element {
  const [categoryList, setCategoryList] = useState("");
  const [saveImgList, setSaveImgList] = useState([[], [], []]);
  const [selectCategory, setSelectCategory] = useState("저장한 이미지");
  const [isOpen, setIsOpen] = useState(false);
  const [saveUrl, setSaveUrl] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      const accessDB = collection(getFirestore(firebaseApp), "saveCats");
      const result = await getDocs(query(accessDB, orderBy("timestamp", "asc")));
      const datas = result.docs.map((el) => el.data());

      setCategoryList(datas);
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchSaveImg = async () => {
      const accessDB = collection(getFirestore(firebaseApp), "saveCats", selectCategory, selectCategory);
      const result = await getDocs(query(accessDB, orderBy("timestamp", "asc")));
      const datas = result.docs.map((el) => el.data());

      const datasSorted = [[], [], []];
      let count = 0;
      for (let i = 0; i < datas.length; i++) {
        datasSorted[count].push(datas[i]);
        count++;
        if (count === 3) count = 0;
      }

      setSaveImgList(datasSorted);
    };
    fetchSaveImg();
  }, [selectCategory]);

  const onClickCategory = (event) => {
    setSelectCategory(event.currentTarget.id);
  };

  const onClickUpdate = (event) => {
    setSaveUrl(event.currentTarget.id);
    setIsOpen(!isOpen);
  };

  const onClickModalCancel = () => {
    setIsOpen(!isOpen);
  };

  //prettier-ignore

  return <FetchCatImgUI 
  categoryList={categoryList}
  saveImgList={saveImgList}
  selectCategory={selectCategory}
  isOpen={isOpen}
  saveUrl={saveUrl}
  onClickCategory={onClickCategory}
  onClickUpdate={onClickUpdate}
  onClickModalCancel={onClickModalCancel}
  />;
}
