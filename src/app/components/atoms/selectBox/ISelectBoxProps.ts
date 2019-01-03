import { IDictionaryItem } from "../../../models/DictionaryItem";

export interface ISelectBoxProps {
  isFetching: boolean;
  list: Array<IDictionaryItem<number, string, any>>;
  label: string;
  name: string;
  onChangeHandler: (obj: any) => void;
}
