export default interface SearchItem {
  title: string;
  target?: string;
  scroll?: number;
  keywords?: string[];
  children?: SearchItem[];
}
