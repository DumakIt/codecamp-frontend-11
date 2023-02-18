import CreateBody from "./body/ItemCreateBody";

interface IItemCreateProps {
  isEdit: boolean;
}

export default function ItemCreate(props: IItemCreateProps): JSX.Element {
  return <CreateBody isEdit={props.isEdit} />;
}
