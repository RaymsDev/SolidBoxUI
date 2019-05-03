import { DropdownProps } from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';
import { IDictionaryItem } from '../../../models/DictionaryItem';

export interface ISelectBoxProps extends DropdownProps {
  isFetching: boolean;
  list: Array<IDictionaryItem<number, string, any>>;
  label: string;
  name: string;
  onChangeHandler: (obj: any) => void;
}
