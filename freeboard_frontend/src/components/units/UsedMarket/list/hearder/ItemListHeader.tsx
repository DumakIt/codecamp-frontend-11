import Link from "next/link";

export default function ListHeader(): JSX.Element {
  return (
    <div>
      <Link href="/usedMarket/createItem">
        <a>나의상품 등록하기</a>
      </Link>
    </div>
  );
}
