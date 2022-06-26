export interface IPostList {
  id: number;
  title: string;
  author: string;
  recommendCount: number;
  viewsCount: number;
  uploadTime: string;
  commentCount?: number;
}

export interface TilePostProps extends IPostList {
  thumbnail?: string;
  tags?: string[];
  description: string;
}

export interface IPost {

}
