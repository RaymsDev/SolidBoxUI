import { IClient } from "../../../models/Client";

export interface ITaskSelectorProps {
  clientList: IClient[];
  onClientSelected: (id: number) => void;
}
