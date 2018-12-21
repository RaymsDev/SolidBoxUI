import { IClient } from "../../../models/Client";

export interface IPlanningPageProps {
  clientList: IClient[];
  onClientSelected: (id: number) => void;
}
