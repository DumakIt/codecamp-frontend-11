import { useWithAuth } from "../../../src/components/commons/hooks/custom/useWithAuth";
import ItemCreate from "../../../src/components/units/UsedMarket/create/ItemCreate";

export default function createItemPage(): JSX.Element {
  // useWithAuth();
  return <ItemCreate isEdit={false} />;
}
