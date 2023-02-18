import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명을 입력해 주세요."),
  remarks: yup.string().required("리마크를 입력해 주세요."),
  contents: yup.string().required("내용을 입력해 주세요."),
  price: yup.string().required("가격을 입력해 주세요.").max(9, "판매할 수 있는 금액을 초과하였습니다"),
  tags: yup.string().required("태그를 입력해 주세요."),
});
