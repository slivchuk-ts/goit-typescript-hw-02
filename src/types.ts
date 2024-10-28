

export interface User {
  name: string;
}

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  user: User;
  likes: number;
}