import { Book } from "./types";

export const BOOKS: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "https://via.placeholder.com/150",
    status: "unread",
    pages: 320,
    genre: "Self-help",
    addedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Deep Work",
    author: "Cal Newport",
    coverImage: "https://via.placeholder.com/150",
    status: "unread",
    pages: 280,
    genre: "Productivity",
    addedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Deep Work",
    author: "Cal Newport",
    coverImage: "https://via.placeholder.com/150",
    status: "unread",
    pages: 240,
    genre: "self-help",
    addedAt: new Date().toISOString(),
  },
];