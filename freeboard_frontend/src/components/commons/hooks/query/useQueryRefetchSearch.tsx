import { ApolloQueryResult } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

interface IuseQueryRefetchSearchArgs {
  refetch: (variables?: Partial<any> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useQueryRefetchSearch = (args: IuseQueryRefetchSearchArgs) => {
  const [keyword, setKeyword] = useState("");
  const debounce = _.debounce((value: string) => {
    args.refetch({
      page: 1,
      search: value,
    });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    debounce(event.currentTarget.value);
  };
  return { onChangeSearch, keyword };
};
