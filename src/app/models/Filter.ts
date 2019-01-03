import { VisibilityFilter } from "../store/todo/action";

export interface IFilter {
  label: string;
  value: VisibilityFilter;
}
