import { Link } from './Link';

export class Task {
    public id: number;
    public name: string;
    public projectId: number;
    public taskTypeId: number;
    public load: number;
    public realizedPercentage: number;
    public sortOrder: number;
    public links: Link[];
}