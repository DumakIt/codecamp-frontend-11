import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationPageProps } from "./Pagination.types";

export default function PaginationPage(props: IPaginationPageProps) {
  const [isActivePage, setIsActivePage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil((props.lastListNum ?? 10) / 10);

  const onClickListNum = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({
      page: Number(event.currentTarget.id),
    });
    setIsActivePage(Number(event.currentTarget.id));
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    props.refetch({
      page: startPage - 10,
    });
    setStartPage(startPage - 10);
    setIsActivePage(startPage - 10);
  };

  const onClickNext = () => {
    if (startPage + 10 > lastPage) return;
    props.refetch({
      page: startPage + 10,
    });
    setStartPage(startPage + 10);
    setIsActivePage(startPage + 10);
  };

  // prettier-ignore
  return (
    <PaginationUI
    startPage={startPage}
    lastPage = {lastPage}
    isActivePage={isActivePage}
    onClickListNum={onClickListNum}
    onClickPrev={onClickPrev}
    onClickNext={onClickNext}
    />
  )
}
