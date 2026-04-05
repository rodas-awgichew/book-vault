export type BookStatus = "unread" | "reading" | "completed";

export type Book = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  status: BookStatus;
  rating?: number;       
  addedAt: string;        
  pages?: number;
  genre?: string;
};