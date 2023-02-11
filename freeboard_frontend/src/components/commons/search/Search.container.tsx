import _ from "lodash";
import * as S from "./Search.styles";

export default function Search(props): JSX.Element {
  const debounce = _.debounce((search) => {
    props.refetch({
      page: 1,
      search,
    });
    props.setSearch(search);
  }, 300);

  const onChangeSearch = (event) => {
    debounce(event.currentTarget.value);
  };

  return (
    <S.SearchContainer>
      <S.SearchInput type="text" onChange={onChangeSearch} />

      <S.SearchIcon src="/images/search.png" />
    </S.SearchContainer>
  );
}
