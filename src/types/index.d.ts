export interface PostListViewProps{
  id: number;
  title: string;
  author: string;
  like: number;
  date: Date;
}
export interface TilePostProps extends PostListViewProps{
  thumbnail?: string;
  tags?: string[];
  description: string;
}
