import axios from "axios";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../commons/libraries/firebase";
import { collection, getFirestore, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { MouseEvent } from "react";
import CatGalleryUI from "./CatGallery.presenter";
import { useRouter } from "next/router";

export default function CatGallery(): JSX.Element {
  const [catImgResult, setCatImgResult] = useState([[], [], []]);
  const [isOpen, setIsOpen] = useState(false);
  const [saveUrl, setSaveUrl] = useState("");
  const [title, setTitle] = useState("");
  const [categoryList, setCategoryList] = useState("");
  const [addCategory, setAddCategory] = useState("");
  const [selectCategory, setSelectCategory] = useState("저장한 이미지");

  const router = useRouter();

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

    // new Array(3).fill(1).forEach(async (_, i) => {
    //   const result = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=6&api_key=live_SEnutBQpOTB4uNB0KSkKHTOLfDKQYfR3NJS6UgWzLNVMUqwzo0sBryYa4CkvC5qB`);
    //   arr[i].push(...result.data);
    //   console.log("123");
    // });
    // setCatImgResult((prev) => [
    //   [...prev[0], ...arr[0]],
    //   [...prev[1], ...arr[1]],
    //   [...prev[2], ...arr[2]],
    // ]);
    // console.log("456");
  };

  useEffect(() => {
    getImg();
  }, []);

  const onClickCat = async (event: MouseEvent<HTMLDivElement>) => {
    setSaveUrl(event.currentTarget.id);
    setIsOpen(!isOpen);

    const accessDB = collection(getFirestore(firebaseApp), "saveCats");
    const result = await getDocs(accessDB);
    const datas = result.docs.map((el) => el.data());

    setCategoryList(datas);
  };

  const onChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const onChangeAddCategory = (event) => {
    setAddCategory(event.currentTarget.value);
  };

  const onClickAddCategory = async () => {
    const newCategory = {
      value: addCategory,
      label: addCategory,
      timestamp: new Date(),
    };

    const accessDB = doc(getFirestore(firebaseApp), "saveCats", addCategory);
    await setDoc(accessDB, newCategory);
    setAddCategory("");
    setCategoryList((prev) => [...prev, newCategory]);
  };

  const onChangeSelect = (value) => {
    setSelectCategory(value);
  };

  const onClickModalCancel = () => {
    setIsOpen(!isOpen);
  };

  const onClickModalSave = async () => {
    const accessDB = doc(getFirestore(firebaseApp), "saveCats", selectCategory, selectCategory, title);

    await setDoc(accessDB, {
      url: saveUrl,
      timestamp: new Date(),
    });
    setIsOpen(!isOpen);
  };

  const onClickMove = () => {
    router.push("/catGallery/fetchCatImg");
  };

  //prettier-ignore

  return <CatGalleryUI 
  catImgResult={catImgResult}
  isOpen={isOpen}
  saveUrl={saveUrl}
  categoryList={categoryList}
  addCategory={addCategory}
  getImg={getImg}
  onClickCat={onClickCat}
  onChangeTitle={onChangeTitle}
  onChangeAddCategory={onChangeAddCategory}
  onClickAddCategory={onClickAddCategory}
  onChangeSelect={onChangeSelect}
  onClickModalCancel={onClickModalCancel}
  onClickModalSave={onClickModalSave}
  onClickMove={onClickMove}
  />;
}
