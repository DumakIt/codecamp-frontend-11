import axios from "axios";
import { useEffect, useState } from "react";

export default function RandomImg(): JSX.Element {
  const [Img, setImg] = useState("");

  // const headers = {
  //   "X-Api-Key": 'ARsnXQodsJheXLMRxp6M/g==simmKZ6CiYwEWxEl"',
  // };

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get("https://api.api-ninjas.com/v1/randomimage?category=food", {
        headers: {
          "X-Api-Key": "ARsnXQodsJheXLMRxp6M/g==simmKZ6CiYwEWxEl",
          Accept: "image/jpg",
        },
      });
      setImg(result);
      // console.log(result);
    };
    getImg();
  }, []);
  console.log(Img);

  return (
    <div>
      <img src={Img} />
    </div>
  );
}
