export interface IListNormalized<T> {
  idList: number[];
  entities: {
    [id: number]: T;
  };
}
