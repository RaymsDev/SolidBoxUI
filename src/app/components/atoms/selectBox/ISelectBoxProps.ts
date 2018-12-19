export interface ISelectBoxProps {
  list: Array<{
    id: number,
    value: string
  }>;
  selected: number;
  label: string;
  name: string;
  onChangeHandler: (id: number) => {};
}
