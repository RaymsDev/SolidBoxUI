import { ILink } from './Link';

export interface IUserTask {
  id: number;
  taskId: number;
  userId: number;
  comment: string;
  isFlexible: boolean;
  startAt: Date;
  duration: number;
  links: ILink[];
}
