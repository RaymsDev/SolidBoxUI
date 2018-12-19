import { IFilter } from "../../../models/Filter";

export interface IFilterLinkProps {
  filter: IFilter;
  onClickHandler: (filter: string) => void;
}
