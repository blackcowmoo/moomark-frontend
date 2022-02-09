export interface IPostList{
  id: number;
  title: string;
  author: string;
  like: number;
  date: Date;
  commentCount?: number;
}
export interface TilePostProps extends IPostList{
  thumbnail?: string;
  tags?: string[];
  description: string;
}
