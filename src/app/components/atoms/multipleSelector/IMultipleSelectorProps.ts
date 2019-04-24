import { IDictionaryItem } from '../../../models/DictionaryItem';

export interface IMultipleSelectorProps {
  label: string;
  name: string;
  placeholder: string;
  isFetching: boolean;
  onChangeHandler: (obj: any) => void;
  list: Array<IDictionaryItem<number, string, any>>;
}
