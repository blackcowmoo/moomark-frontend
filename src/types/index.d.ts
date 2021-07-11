export interface PostListViewProps{
  id: number;
  title: string;
  author: string;
  like: number;
  tags?: string[];
  date: Date;
}