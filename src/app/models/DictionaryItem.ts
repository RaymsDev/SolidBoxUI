export interface IDictionaryItem<TKey = string, TValue = string, T=any> {
  id: TKey;
  value: TValue;
  object: T;
}
