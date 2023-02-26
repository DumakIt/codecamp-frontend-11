import ChargePoints from "../../../../commons/chargePoints/chargePoints";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/query/useQueryFetchUserLoggedIn";

export default function MyInfoHeader(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  console.log(data);

  return (
    <div>
      <div>
        <div>
          <img src={data?.fetchUserLoggedIn.picture ? `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}` : `/images/defaultUserIcon.svg`} />
        </div>
        <div>
          <div>{data?.fetchUserLoggedIn.name}</div>
          <div>{data?.fetchUserLoggedIn.email}</div>
          <div>{data?.fetchUserLoggedIn.userPoint?.amount}원</div>
        </div>
      </div>
      <ChargePoints data={data} />
    </div>
  );
}
