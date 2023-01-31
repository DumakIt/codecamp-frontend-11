import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as Style from "./Pagination.styles";
import { IPaginationUIProps } from "./Pagination.types";
import InfiniteScroll from "react-infinite-scroller";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <Style.Pagination>
      <LeftOutlined onClick={props.onClickPrev} />
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <Style.PaginationNum key={index + props.startPage} id={String(index + props.startPage)} onClick={props.onClickListNum}>
              {index + props.startPage}
            </Style.PaginationNum>
          )
      )}
      <RightOutlined onClick={props.onClickNext} />
    </Style.Pagination>
  );
}
