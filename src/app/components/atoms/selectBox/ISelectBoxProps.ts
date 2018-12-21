import { IDictionaryItem } from "../../../models/DictionaryItem";

export interface ISelectBoxProps {
  list: Array<IDictionaryItem<number>>;
  label: string;
  name: string;
  onChangeHandler: (id: number) => void;
}
