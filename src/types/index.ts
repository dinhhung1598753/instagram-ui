export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  author: User;
  publishedAt: string;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  hasStory: boolean;
}
