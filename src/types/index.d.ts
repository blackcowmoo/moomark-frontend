export interface PostListViewProps{
  id: number;
  title: string;
  author: string;
  like: number;
  tags?: string[];
  thumbnail?: string;
  date: Date;
}
export interface TilePostProps extends PostListViewProps{
  description: string;
}
