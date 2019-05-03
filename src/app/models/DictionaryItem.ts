export interface IDictionaryItem<TKey = string, TText = string, TValue = any> {
  key: TKey;
  text: TText;
  value: TValue;
}
