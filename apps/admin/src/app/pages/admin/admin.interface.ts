export interface IUser {
  id: number;
  name: string;
  email: string;
  webside: string;
}

export interface IGetUsersResponse {
  [index: number]: IUser;
  length: number;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IGetPostsResponse extends IPost {}
