export type User = {
  nickname: string;
  id?: number;
  picture?: string;
  email?: string;
};

export interface IPostList {
  id: number;
  title: string;
  user: User;
  content?: string;
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

export type CommentInfo = {
  user: User;
  uploadTime: string;
};

export interface IReply {
  info: CommentInfo;
  content: string;
  recommendCount: number;
}

export interface ICommentContent extends IReply {
  reply?: IComment[];
}

export interface IPostDetail extends IPostList {
  tags?: string[];
  content: string;
  comment?: ICommentContent[];
}
