import { ApolloQueryResult } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export const useQueryRefetchSearch = (args) => {
  const [keyword, setKeyword] = useState("");
  const getDebounce = _.debounce((value: string) => {
    args.refetch({
      page: 1,
      search: value,
    });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };
  return { onChangeSearch, keyword };
};
