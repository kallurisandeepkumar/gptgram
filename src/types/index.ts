export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
}

export interface Post {
  id: string;
  author: string;
  content: string;
  imageUrl: string;
  caption: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
}