export interface User {
  id: number;
  name: string;
  avatar: string;
  hasStory: boolean;
}

export interface Post {
  id: number;
  title: string;
  images: string[];
  location: string;
  author: User;
  likeCount: number;
  publishedAt: number;
}
